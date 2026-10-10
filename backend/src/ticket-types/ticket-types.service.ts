import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  EventStatus,
  RegistrationStatus,
  UserRole,
} from '../../generated/prisma/client.js';
import type { User } from '../../generated/prisma/client.js';
import type { CreateTicketTypeDto } from './dto/create-ticket-type.dto.js';
import type { UpdateTicketTypeDto } from './dto/update-ticket-type.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

type EventActor = Pick<User, 'id' | 'role'>;

@Injectable()
export class TicketTypesService {
  constructor(private readonly prisma: PrismaService) {}

  async listPublicTicketTypes(eventId: string) {
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

    return this.prisma.ticketType.findMany({
      where: {
        eventId,
        isActive: true,
      },
      orderBy: [{ price: 'asc' }, { createdAt: 'asc' }],
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        quantity: true,
        salesStart: true,
        salesEnd: true,
      },
    });
  }

  async listManageableTicketTypes(eventId: string, user: EventActor) {
    await this.findManageableEvent(eventId, user);

    return this.prisma.ticketType.findMany({
      where: { eventId },
      orderBy: [{ createdAt: 'asc' }],
    });
  }

  async create(eventId: string, user: EventActor, dto: CreateTicketTypeDto) {
    const event = await this.findManageableEvent(eventId, user);
    this.ensureEventCanChangeTicketTypes(event.status);

    const salesStart = dto.salesStart ? new Date(dto.salesStart) : undefined;
    const salesEnd = dto.salesEnd ? new Date(dto.salesEnd) : undefined;

    this.validateSalesWindow(salesStart, salesEnd);

    const existing = await this.prisma.ticketType.findUnique({
      where: {
        eventId_name: {
          eventId,
          name: dto.name,
        },
      },
      select: { id: true },
    });

    if (existing) {
      throw new ConflictException(
        'A ticket type with this name already exists for the event',
      );
    }

    return this.prisma.ticketType.create({
      data: {
        eventId,
        name: dto.name,
        description: dto.description,
        price: dto.price,
        quantity: dto.quantity,
        salesStart,
        salesEnd,
      },
    });
  }

  async update(
    eventId: string,
    ticketTypeId: string,
    user: EventActor,
    dto: UpdateTicketTypeDto,
  ) {
    if (Object.keys(dto).length === 0) {
      throw new BadRequestException('Provide at least one field to update');
    }

    const event = await this.findManageableEvent(eventId, user);
    this.ensureEventCanChangeTicketTypes(event.status);

    const ticketType = await this.prisma.ticketType.findFirst({
      where: {
        id: ticketTypeId,
        eventId,
        isActive: true,
      },
    });

    if (!ticketType) {
      throw new NotFoundException('Active ticket type not found');
    }

    if (dto.name !== undefined && dto.name !== ticketType.name) {
      const duplicate = await this.prisma.ticketType.findUnique({
        where: {
          eventId_name: {
            eventId,
            name: dto.name,
          },
        },
        select: { id: true },
      });

      if (duplicate) {
        throw new ConflictException(
          'A ticket type with this name already exists for the event',
        );
      }
    }

    if (dto.quantity !== undefined && dto.quantity < ticketType.soldQuantity) {
      throw new BadRequestException(
        `Quantity cannot be lower than the ${ticketType.soldQuantity} tickets already sold`,
      );
    }

    if (dto.quantity !== undefined) {
      const pendingRegistrations = await this.prisma.registration.aggregate({
        where: {
          ticketTypeId,
          status: RegistrationStatus.PENDING,
          expiresAt: { gt: new Date() },
        },
        _sum: { quantity: true },
      });

      const activeReservedQuantity = pendingRegistrations._sum.quantity ?? 0;

      const minimumQuantity = ticketType.soldQuantity + activeReservedQuantity;

      if (dto.quantity < minimumQuantity) {
        throw new BadRequestException(
          `Quantity cannot be lower than the ${minimumQuantity} tickets sold or currently reserved`,
        );
      }
    }

    const salesStart =
      dto.salesStart === undefined
        ? ticketType.salesStart
        : dto.salesStart === null
          ? null
          : new Date(dto.salesStart);

    const salesEnd =
      dto.salesEnd === undefined
        ? ticketType.salesEnd
        : dto.salesEnd === null
          ? null
          : new Date(dto.salesEnd);

    this.validateSalesWindow(salesStart ?? undefined, salesEnd ?? undefined);

    return this.prisma.ticketType.update({
      where: { id: ticketTypeId },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.description !== undefined && {
          description: dto.description,
        }),
        ...(dto.price !== undefined && { price: dto.price }),
        ...(dto.quantity !== undefined && {
          quantity: dto.quantity,
        }),
        ...(dto.salesStart !== undefined && { salesStart }),
        ...(dto.salesEnd !== undefined && { salesEnd }),
      },
    });
  }

  async deactivate(eventId: string, ticketTypeId: string, user: EventActor) {
    const event = await this.findManageableEvent(eventId, user);
    this.ensureEventCanChangeTicketTypes(event.status);

    const ticketType = await this.prisma.ticketType.findFirst({
      where: {
        id: ticketTypeId,
        eventId,
        isActive: true,
      },
      select: { id: true },
    });

    if (!ticketType) {
      throw new NotFoundException('Active ticket type not found');
    }

    return this.prisma.ticketType.update({
      where: { id: ticketTypeId },
      data: { isActive: false },
      select: {
        id: true,
        eventId: true,
        name: true,
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

  private ensureEventCanChangeTicketTypes(status: EventStatus) {
    if (status === EventStatus.CANCELLED || status === EventStatus.COMPLETED) {
      throw new BadRequestException(
        'Ticket types cannot be changed for cancelled or completed events',
      );
    }
  }

  private validateSalesWindow(salesStart?: Date, salesEnd?: Date) {
    if (salesStart && Number.isNaN(salesStart.getTime())) {
      throw new BadRequestException('Invalid sales start date');
    }

    if (salesEnd && Number.isNaN(salesEnd.getTime())) {
      throw new BadRequestException('Invalid sales end date');
    }

    if (salesStart && salesEnd && salesStart >= salesEnd) {
      throw new BadRequestException(
        'Sales start must be earlier than sales end',
      );
    }
  }
}
