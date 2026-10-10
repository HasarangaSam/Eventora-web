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
} from '../../generated/prisma/client.js';
import type { User } from '../../generated/prisma/client.js';
import type { CreateRegistrationDto } from './dto/create-registration.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

type RegistrationActor = Pick<User, 'id'>;

const RESERVATION_MINUTES = 10;

@Injectable()
export class RegistrationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    eventId: string,
    ticketTypeId: string,
    user: RegistrationActor,
    dto: CreateRegistrationDto,
  ) {
    const now = new Date();
    const expiresAt = new Date(now.getTime() + RESERVATION_MINUTES * 60 * 1000);

    return this.prisma.$transaction(
      async (tx) => {
        // Lock in a consistent order so competing reservations serialize.
        await tx.$queryRaw<Array<{ id: string }>>`
          SELECT "id"
          FROM "Event"
          WHERE "id" = ${eventId}
          FOR UPDATE
        `;

        const event = await tx.event.findUnique({
          where: { id: eventId },
          select: {
            id: true,
            status: true,
            startsAt: true,
            maxCapacity: true,
            registeredCount: true,
          },
        });

        if (!event) {
          throw new NotFoundException('Event not found');
        }

        await tx.$queryRaw<Array<{ id: string }>>`
          SELECT "id"
          FROM "TicketType"
          WHERE "id" = ${ticketTypeId}
            AND "eventId" = ${eventId}
          FOR UPDATE
        `;

        const ticketType = await tx.ticketType.findFirst({
          where: {
            id: ticketTypeId,
            eventId,
          },
          select: {
            id: true,
            name: true,
            price: true,
            quantity: true,
            soldQuantity: true,
            isActive: true,
            salesStart: true,
            salesEnd: true,
          },
        });

        if (!ticketType) {
          throw new NotFoundException('Ticket type not found for this event');
        }

        if (event.status !== EventStatus.PUBLISHED) {
          throw new BadRequestException(
            'Registrations are only available for published events',
          );
        }

        if (event.startsAt <= now) {
          throw new BadRequestException(
            'Registrations are closed because the event has started',
          );
        }

        if (!ticketType.isActive) {
          throw new BadRequestException(
            'This ticket type is no longer available',
          );
        }

        if (ticketType.salesStart && ticketType.salesStart > now) {
          throw new BadRequestException('Ticket sales have not started');
        }

        if (ticketType.salesEnd && ticketType.salesEnd <= now) {
          throw new BadRequestException('Ticket sales have ended');
        }

        // Expired reservations must not consume inventory.
        await tx.registration.updateMany({
          where: {
            eventId,
            status: RegistrationStatus.PENDING,
            expiresAt: { lte: now },
          },
          data: { status: RegistrationStatus.EXPIRED },
        });

        const ticketReservations = await tx.registration.aggregate({
          where: {
            ticketTypeId,
            status: RegistrationStatus.PENDING,
            expiresAt: { gt: now },
          },
          _sum: { quantity: true },
        });

        const reservedForTicketType = ticketReservations._sum.quantity ?? 0;

        const availableTicketQuantity =
          ticketType.quantity - ticketType.soldQuantity - reservedForTicketType;

        if (dto.quantity > availableTicketQuantity) {
          throw new ConflictException(
            `Only ${Math.max(0, availableTicketQuantity)} tickets are available`,
          );
        }

        const eventReservations = await tx.registration.aggregate({
          where: {
            eventId,
            status: RegistrationStatus.PENDING,
            expiresAt: { gt: now },
          },
          _sum: { quantity: true },
        });

        const reservedForEvent = eventReservations._sum.quantity ?? 0;

        const availableEventCapacity =
          event.maxCapacity - event.registeredCount - reservedForEvent;

        if (dto.quantity > availableEventCapacity) {
          throw new ConflictException(
            `Only ${Math.max(0, availableEventCapacity)} event places are available`,
          );
        }

        const totalPrice = ticketType.price * dto.quantity;

        if (!Number.isSafeInteger(totalPrice)) {
          throw new BadRequestException(
            'The requested registration total is too large',
          );
        }

        return tx.registration.create({
          data: {
            attendeeId: user.id,
            eventId,
            ticketTypeId,
            quantity: dto.quantity,
            unitPrice: ticketType.price,
            totalPrice,
            status: RegistrationStatus.PENDING,
            registeredAt: now,
            expiresAt,
          },
          select: {
            id: true,
            eventId: true,
            ticketTypeId: true,
            quantity: true,
            unitPrice: true,
            totalPrice: true,
            status: true,
            registeredAt: true,
            expiresAt: true,
          },
        });
      },
      { timeout: 15000 },
    );
  }

  async findMine(user: RegistrationActor) {
    const now = new Date();

    await this.prisma.registration.updateMany({
      where: {
        attendeeId: user.id,
        status: RegistrationStatus.PENDING,
        expiresAt: { lte: now },
      },
      data: { status: RegistrationStatus.EXPIRED },
    });

    return this.prisma.registration.findMany({
      where: { attendeeId: user.id },
      orderBy: { registeredAt: 'desc' },
      select: {
        id: true,
        quantity: true,
        unitPrice: true,
        totalPrice: true,
        status: true,
        registeredAt: true,
        expiresAt: true,
        cancelledAt: true,
        event: {
          select: {
            id: true,
            title: true,
            venue: true,
            address: true,
            startsAt: true,
            endsAt: true,
            coverImageUrl: true,
            status: true,
          },
        },
        ticketType: {
          select: {
            id: true,
            name: true,
            price: true,
          },
        },
        payment: {
          select: {
            id: true,
            providerReference: true,
            amount: true,
            currency: true,
            status: true,
            confirmedAt: true,
          },
        },
      },
    });
  }

  async cancel(registrationId: string, user: RegistrationActor) {
    return this.prisma.$transaction(async (tx) => {
      await tx.$queryRaw<Array<{ id: string }>>`
        SELECT "id"
        FROM "Registration"
        WHERE "id" = ${registrationId}
        FOR UPDATE
      `;

      const registration = await tx.registration.findUnique({
        where: { id: registrationId },
        select: {
          id: true,
          attendeeId: true,
          status: true,
          expiresAt: true,
        },
      });

      if (!registration) {
        throw new NotFoundException('Registration not found');
      }

      if (registration.attendeeId !== user.id) {
        throw new ForbiddenException(
          'You do not have permission to cancel this registration',
        );
      }

      if (registration.status !== RegistrationStatus.PENDING) {
        throw new BadRequestException(
          'Only pending registrations can be cancelled at this stage',
        );
      }

      if (
        registration.expiresAt !== null &&
        registration.expiresAt <= new Date()
      ) {
        return tx.registration.update({
          where: { id: registration.id },
          data: { status: RegistrationStatus.EXPIRED },
          select: {
            id: true,
            status: true,
            expiresAt: true,
          },
        });
      }

      return tx.registration.update({
        where: { id: registration.id },
        data: {
          status: RegistrationStatus.CANCELLED,
          cancelledAt: new Date(),
        },
        select: {
          id: true,
          status: true,
          cancelledAt: true,
          expiresAt: true,
        },
      });
    });
  }
}
