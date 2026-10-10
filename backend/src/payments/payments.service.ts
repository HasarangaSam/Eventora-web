import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  EventStatus,
  PaymentStatus,
  RegistrationStatus,
} from '../../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async confirmSimulatedPayment(registrationId: string, attendeeId: string) {
    // Read the IDs needed to acquire locks in a consistent order.
    const initialRegistration = await this.prisma.registration.findUnique({
      where: { id: registrationId },
      select: {
        id: true,
        eventId: true,
        ticketTypeId: true,
      },
    });

    if (!initialRegistration) {
      throw new NotFoundException('Registration not found');
    }

    const result = await this.prisma.$transaction(
      async (tx) => {
        await tx.$queryRaw<Array<{ id: string }>>`
          SELECT "id"
          FROM "Event"
          WHERE "id" = ${initialRegistration.eventId}
          FOR UPDATE
        `;

        await tx.$queryRaw<Array<{ id: string }>>`
          SELECT "id"
          FROM "TicketType"
          WHERE "id" = ${initialRegistration.ticketTypeId}
            AND "eventId" = ${initialRegistration.eventId}
          FOR UPDATE
        `;

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
            eventId: true,
            ticketTypeId: true,
            quantity: true,
            unitPrice: true,
            totalPrice: true,
            status: true,
            expiresAt: true,
            event: {
              select: {
                id: true,
                status: true,
                startsAt: true,
                registeredCount: true,
                maxCapacity: true,
              },
            },
            ticketType: {
              select: {
                id: true,
                price: true,
                quantity: true,
                soldQuantity: true,
                isActive: true,
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

        if (!registration) {
          throw new NotFoundException('Registration not found');
        }

        if (registration.attendeeId !== attendeeId) {
          throw new NotFoundException('Registration not found');
        }

        if (
          registration.status === RegistrationStatus.CONFIRMED &&
          registration.payment?.status === PaymentStatus.SUCCEEDED
        ) {
          return {
            outcome: 'ALREADY_CONFIRMED' as const,
            registrationId: registration.id,
            status: registration.status,
            payment: registration.payment,
          };
        }

        if (registration.payment?.status === PaymentStatus.SUCCEEDED) {
          throw new ConflictException(
            'Payment is already successful but the registration is not confirmed. Contact support.',
          );
        }

        if (registration.status !== RegistrationStatus.PENDING) {
          throw new BadRequestException(
            'Only pending registrations can be paid',
          );
        }

        const now = new Date();

        if (registration.expiresAt !== null && registration.expiresAt <= now) {
          await tx.registration.update({
            where: { id: registration.id },
            data: { status: RegistrationStatus.EXPIRED },
          });

          return {
            outcome: 'EXPIRED' as const,
          };
        }

        if (
          registration.event.status !== EventStatus.PUBLISHED ||
          registration.event.startsAt <= now
        ) {
          throw new BadRequestException(
            'Payment is unavailable because the event is no longer accepting registrations',
          );
        }

        if (!registration.ticketType.isActive) {
          throw new BadRequestException(
            'This ticket type is no longer available',
          );
        }

        const activeTicketReservations =
          await tx.registration.aggregate({
            where: {
              ticketTypeId: registration.ticketTypeId,
              id: { not: registration.id },
              status: RegistrationStatus.PENDING,
              expiresAt: { gt: now },
            },
            _sum: { quantity: true },
          });

        const otherReservedTickets =
          activeTicketReservations._sum.quantity ?? 0;

        if (
          registration.ticketType.soldQuantity +
            otherReservedTickets +
            registration.quantity >
          registration.ticketType.quantity
        ) {
          throw new ConflictException(
            'There is insufficient ticket inventory to confirm this registration',
          );
        }

        const activeEventReservations = await tx.registration.aggregate({
          where: {
            eventId: registration.eventId,
            id: { not: registration.id },
            status: RegistrationStatus.PENDING,
            expiresAt: { gt: now },
          },
          _sum: { quantity: true },
        });

        const otherReservedPlaces =
          activeEventReservations._sum.quantity ?? 0;

        if (
          registration.event.registeredCount +
            otherReservedPlaces +
            registration.quantity >
          registration.event.maxCapacity
        ) {
          throw new ConflictException(
            'There is insufficient event capacity to confirm this registration',
          );
        }

        const providerReference = `DEMO-${registration.id}`;

        const payment = registration.payment
          ? await tx.payment.update({
              where: { registrationId: registration.id },
              data: {
                providerReference,
                amount: registration.totalPrice,
                currency: 'LKR',
                status: PaymentStatus.SUCCEEDED,
                confirmedAt: now,
              },
              select: {
                id: true,
                providerReference: true,
                amount: true,
                currency: true,
                status: true,
                confirmedAt: true,
              },
            })
          : await tx.payment.create({
              data: {
                registrationId: registration.id,
                providerReference,
                amount: registration.totalPrice,
                currency: 'LKR',
                status: PaymentStatus.SUCCEEDED,
                confirmedAt: now,
              },
              select: {
                id: true,
                providerReference: true,
                amount: true,
                currency: true,
                status: true,
                confirmedAt: true,
              },
            });

        await tx.ticketType.update({
          where: { id: registration.ticketTypeId },
          data: {
            soldQuantity: { increment: registration.quantity },
          },
        });

        await tx.event.update({
          where: { id: registration.eventId },
          data: {
            registeredCount: { increment: registration.quantity },
          },
        });

        await tx.registration.update({
          where: { id: registration.id },
          data: { status: RegistrationStatus.CONFIRMED },
        });

        return {
          outcome: 'CONFIRMED' as const,
          registrationId: registration.id,
          status: RegistrationStatus.CONFIRMED,
          quantity: registration.quantity,
          totalPrice: registration.totalPrice,
          payment,
        };
      },
      { timeout: 15000 },
    );

    if (result.outcome === 'EXPIRED') {
      throw new BadRequestException(
        'This reservation has expired. Please register again.',
      );
    }

    return result;
  }
}
