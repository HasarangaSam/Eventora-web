import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import type { User } from '../../generated/prisma/client.js';
import { AppUserGuard } from '../auth/app-user.guard.js';
import { ClerkAuthGuard } from '../auth/clerk-auth.guard.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { PaymentsService } from './payments.service.js';

type PaymentActor = Pick<User, 'id'>;

@Controller('registrations')
@UseGuards(ClerkAuthGuard, AppUserGuard)
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post(':registrationId/payment/confirm')
  confirmSimulatedPayment(
    @Param('registrationId') registrationId: string,
    @CurrentUser() user: PaymentActor,
  ) {
    return this.paymentsService.confirmSimulatedPayment(
      registrationId,
      user.id,
    );
  }
}
