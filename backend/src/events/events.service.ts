import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { EventStatus, UserRole } from '../../generated/prisma/client.js';
import type { User } from '../../generated/prisma/client.js';

import { PrismaService } from '../prisma/prisma.service.js';
import type { CreateEventDto } from './dto/create-event.dto.js';
import type { ListEventsDto } from './dto/list-events.dto.js';
import type { UpdateEventDto } from './dto/update-event.dto.js';

type EventActor = Pick<User, 'id' | 'role'>;

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async listPublished(dto: ListEventsDto) {
    const page = dto.page ?? 1;
    const limit = dto.limit ?? 10;
    const q = dto.q?.trim();

    const where = {
      status: EventStatus.PUBLISHED,
      startsAt: { gte: new Date() },
      ...(dto.categoryId ? { categoryId: dto.categoryId } : {}),
      ...(q ? { title: { contains: q, mode: 'insensitive' as const } } : {}),
    };

    const [total, items] = await this.prisma.$transaction([
      this.prisma.event.count({ where }),
      this.prisma.event.findMany({
        where,
        orderBy: { startsAt: 'asc' },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          title: true,
          description: true,
          venue: true,
          address: true,
          coverImageUrl: true,
          startsAt: true,
          endsAt: true,
          maxCapacity: true,
          registeredCount: true,
          status: true,
          createdAt: true,
          category: {
            select: { id: true, name: true },
          },
          organizer: {
            select: { id: true, name: true },
          },
        },
      }),
    ]);

    return {
      items,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findPublishedById(id: string) {
    const event = await this.prisma.event.findFirst({
      where: {
        id,
        status: EventStatus.PUBLISHED,
      },
      select: {
        id: true,
        title: true,
        description: true,
        venue: true,
        address: true,
        coverImageUrl: true,
        startsAt: true,
        endsAt: true,
        maxCapacity: true,
        registeredCount: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        category: {
          select: { id: true, name: true, description: true },
        },
        organizer: {
          select: { id: true, name: true },
        },
      },
    });

    if (!event) {
      throw new NotFoundException('Published event not found');
    }

    return event;
  }

  async listManaged(user: EventActor) {
    return this.prisma.event.findMany({
      where: user.role === UserRole.ADMIN ? {} : { organizerId: user.id },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        venue: true,
        address: true,
        startsAt: true,
        endsAt: true,
        maxCapacity: true,
        registeredCount: true,
        status: true,
        createdAt: true,
        category: {
          select: { id: true, name: true },
        },
        organizer: {
          select: { id: true, name: true },
        },
      },
    });
  }

  async create(user: EventActor, dto: CreateEventDto) {
    const startsAt = new Date(dto.startsAt);
    const endsAt = new Date(dto.endsAt);

    this.validateDates(startsAt, endsAt, true);

    const category = await this.prisma.category.findFirst({
      where: {
        id: dto.categoryId,
        isActive: true,
      },
      select: { id: true },
    });

    if (!category) {
      throw new BadRequestException('An active category is required');
    }

    return this.prisma.event.create({
      data: {
        title: dto.title.trim(),
        description: dto.description.trim(),
        venue: dto.venue.trim(),
        address: dto.address.trim(),
        startsAt,
        endsAt,
        maxCapacity: dto.maxCapacity,
        categoryId: category.id,
        organizerId: user.id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        venue: true,
        address: true,
        startsAt: true,
        endsAt: true,
        maxCapacity: true,
        registeredCount: true,
        status: true,
        category: {
          select: { id: true, name: true },
        },
        organizer: {
          select: { id: true, name: true },
        },
      },
    });
  }

  async update(id: string, user: EventActor, dto: UpdateEventDto) {
    const event = await this.findForManagement(id, user);

    if (
      event.status === EventStatus.CANCELLED ||
      event.status === EventStatus.COMPLETED
    ) {
      throw new BadRequestException(
        'Cancelled or completed events cannot be edited',
      );
    }

    const startsAt = dto.startsAt ? new Date(dto.startsAt) : event.startsAt;
    const endsAt = dto.endsAt ? new Date(dto.endsAt) : event.endsAt;

    this.validateDates(startsAt, endsAt, true);

    if (
      dto.maxCapacity !== undefined &&
      dto.maxCapacity < event.registeredCount
    ) {
      throw new BadRequestException(
        'Capacity cannot be lower than the current registration count',
      );
    }

    if (dto.categoryId !== undefined) {
      const category = await this.prisma.category.findFirst({
        where: { id: dto.categoryId, isActive: true },
        select: { id: true },
      });

      if (!category) {
        throw new BadRequestException('An active category is required');
      }
    }

    return this.prisma.event.update({
      where: { id },
      data: {
        ...(dto.title !== undefined ? { title: dto.title.trim() } : {}),
        ...(dto.description !== undefined
          ? { description: dto.description.trim() }
          : {}),
        ...(dto.venue !== undefined ? { venue: dto.venue.trim() } : {}),
        ...(dto.address !== undefined ? { address: dto.address.trim() } : {}),
        ...(dto.startsAt !== undefined ? { startsAt } : {}),
        ...(dto.endsAt !== undefined ? { endsAt } : {}),
        ...(dto.maxCapacity !== undefined
          ? { maxCapacity: dto.maxCapacity }
          : {}),
        ...(dto.categoryId !== undefined ? { categoryId: dto.categoryId } : {}),
      },
      select: {
        id: true,
        title: true,
        description: true,
        venue: true,
        address: true,
        startsAt: true,
        endsAt: true,
        maxCapacity: true,
        registeredCount: true,
        status: true,
        updatedAt: true,
        category: {
          select: { id: true, name: true },
        },
      },
    });
  }

  async publish(id: string, user: EventActor) {
    const event = await this.findForManagement(id, user);

    if (event.status !== EventStatus.DRAFT) {
      throw new BadRequestException('Only draft events can be published');
    }

    this.validateDates(event.startsAt, event.endsAt, true);

    const category = await this.prisma.category.findFirst({
      where: { id: event.categoryId, isActive: true },
      select: { id: true },
    });

    if (!category) {
      throw new BadRequestException(
        'The event category must be active before publishing',
      );
    }

    return this.prisma.event.update({
      where: { id },
      data: { status: EventStatus.PUBLISHED },
    });
  }

  async cancel(id: string, user: EventActor) {
    const event = await this.findForManagement(id, user);

    if (event.status === EventStatus.COMPLETED) {
      throw new BadRequestException('Completed events cannot be cancelled');
    }

    if (event.status === EventStatus.CANCELLED) {
      return event;
    }

    return this.prisma.event.update({
      where: { id },
      data: { status: EventStatus.CANCELLED },
    });
  }

  private async findForManagement(id: string, user: EventActor) {
    const event = await this.prisma.event.findUnique({
      where: { id },
    });

    if (!event) {
      throw new NotFoundException('Event not found');
    }

    if (user.role !== UserRole.ADMIN && event.organizerId !== user.id) {
      throw new ForbiddenException(
        'You do not have permission to manage this event',
      );
    }

    return event;
  }

  private validateDates(
    startsAt: Date,
    endsAt: Date,
    requireFutureStart: boolean,
  ) {
    if (Number.isNaN(startsAt.getTime()) || Number.isNaN(endsAt.getTime())) {
      throw new BadRequestException('Event dates are invalid');
    }

    if (endsAt <= startsAt) {
      throw new BadRequestException(
        'The event end time must be later than its start time',
      );
    }

    if (requireFutureStart && startsAt <= new Date()) {
      throw new BadRequestException(
        'The event start time must be in the future',
      );
    }
  }
}
