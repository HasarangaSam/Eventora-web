import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventStatus, UserRole } from '../../generated/prisma/client.js';
import type { User } from '../../generated/prisma/client.js';
import type { CreateEventSessionDto } from './dto/create-event-session.dto.js';
import type { UpdateEventSessionDto } from './dto/update-event-session.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

type EventActor = Pick<User, 'id' | 'role'>;

@Injectable()
export class EventSessionsService {
  constructor(private readonly prisma: PrismaService) {}

  async listPublishedSessions(eventId: string) {
    const event = await this.prisma.event.findFirst({
      where: {
        id: eventId,
        status: EventStatus.PUBLISHED,
      },
      select: { id: true },
    });

    if (!event) {
      throw new NotFoundException('Published event not found');
    }

    return this.prisma.eventSession.findMany({
      where: { eventId, isActive: true },
      orderBy: { startsAt: 'asc' },
      select: {
        id: true,
        title: true,
        description: true,
        startsAt: true,
        endsAt: true,
        venue: true,
        speakerName: true,
      },
    });
  }

  async listManageableSessions(eventId: string, user: EventActor) {
    await this.findManageableEvent(eventId, user);

    return this.prisma.eventSession.findMany({
      where: { eventId, isActive: true },
      orderBy: { startsAt: 'asc' },
    });
  }

  async create(eventId: string, user: EventActor, dto: CreateEventSessionDto) {
    const event = await this.findManageableEvent(eventId, user);
    this.ensureEventCanChangeSessions(event.status);

    const startsAt = new Date(dto.startsAt);
    const endsAt = new Date(dto.endsAt);

    this.validateSessionSchedule(
      startsAt,
      endsAt,
      event.startsAt,
      event.endsAt,
    );

    return this.prisma.eventSession.create({
      data: {
        eventId,
        title: dto.title,
        description: dto.description ?? '',
        startsAt,
        endsAt,
        venue: dto.venue,
        speakerName: dto.speakerName,
      },
    });
  }

  async update(
    eventId: string,
    sessionId: string,
    user: EventActor,
    dto: UpdateEventSessionDto,
  ) {
    if (Object.keys(dto).length === 0) {
      throw new BadRequestException('Provide at least one field to update');
    }

    const event = await this.findManageableEvent(eventId, user);
    this.ensureEventCanChangeSessions(event.status);

    const session = await this.prisma.eventSession.findFirst({
      where: {
        id: sessionId,
        eventId,
        isActive: true,
      },
    });

    if (!session) {
      throw new NotFoundException('Active event session not found');
    }

    const startsAt = dto.startsAt ? new Date(dto.startsAt) : session.startsAt;
    const endsAt = dto.endsAt ? new Date(dto.endsAt) : session.endsAt;

    this.validateSessionSchedule(
      startsAt,
      endsAt,
      event.startsAt,
      event.endsAt,
    );

    return this.prisma.eventSession.update({
      where: { id: session.id },
      data: {
        ...(dto.title !== undefined && { title: dto.title }),
        ...(dto.description !== undefined && {
          description: dto.description,
        }),
        ...(dto.startsAt !== undefined && { startsAt }),
        ...(dto.endsAt !== undefined && { endsAt }),
        ...(dto.venue !== undefined && { venue: dto.venue }),
        ...(dto.speakerName !== undefined && {
          speakerName: dto.speakerName,
        }),
      },
    });
  }

  async remove(eventId: string, sessionId: string, user: EventActor) {
    const event = await this.findManageableEvent(eventId, user);
    this.ensureEventCanChangeSessions(event.status);

    const session = await this.prisma.eventSession.findFirst({
      where: {
        id: sessionId,
        eventId,
        isActive: true,
      },
      select: { id: true },
    });

    if (!session) {
      throw new NotFoundException('Active event session not found');
    }

    return this.prisma.eventSession.update({
      where: { id: session.id },
      data: { isActive: false },
      select: {
        id: true,
        eventId: true,
        title: true,
        isActive: true,
      },
    });
  }

  private async findManageableEvent(eventId: string, user: EventActor) {
    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
      select: {
        id: true,
        status: true,
        organizerId: true,
        startsAt: true,
        endsAt: true,
      },
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

  private ensureEventCanChangeSessions(status: EventStatus) {
    if (status === EventStatus.CANCELLED || status === EventStatus.COMPLETED) {
      throw new BadRequestException(
        'Sessions cannot be changed for cancelled or completed events',
      );
    }
  }

  private validateSessionSchedule(
    startsAt: Date,
    endsAt: Date,
    eventStartsAt: Date,
    eventEndsAt: Date,
  ) {
    if (Number.isNaN(startsAt.getTime()) || Number.isNaN(endsAt.getTime())) {
      throw new BadRequestException('Invalid session date or time');
    }

    if (startsAt >= endsAt) {
      throw new BadRequestException(
        'Session start time must be earlier than its end time',
      );
    }

    if (startsAt < eventStartsAt || endsAt > eventEndsAt) {
      throw new BadRequestException(
        'The session must start and end within the parent event schedule',
      );
    }
  }
}
