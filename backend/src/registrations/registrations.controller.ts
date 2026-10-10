import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import type { User } from '../../generated/prisma/client.js';
import { AppUserGuard } from '../auth/app-user.guard.js';
import { ClerkAuthGuard } from '../auth/clerk-auth.guard.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { CreateRegistrationDto } from './dto/create-registration.dto.js';
import { RegistrationsService } from './registrations.service.js';

type RegistrationActor = Pick<User, 'id'>;

@Controller()
@UseGuards(ClerkAuthGuard, AppUserGuard)
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @Post('events/:eventId/ticket-types/:ticketTypeId/registrations')
  create(
    @Param('eventId') eventId: string,
    @Param('ticketTypeId') ticketTypeId: string,
    @CurrentUser() user: RegistrationActor,
    @Body() dto: CreateRegistrationDto,
  ) {
    return this.registrationsService.create(eventId, ticketTypeId, user, dto);
  }

  @Get('registrations/mine')
  findMine(@CurrentUser() user: RegistrationActor) {
    return this.registrationsService.findMine(user);
  }

  @Patch('registrations/:registrationId/cancel')
  cancel(
    @Param('registrationId') registrationId: string,
    @CurrentUser() user: RegistrationActor,
  ) {
    return this.registrationsService.cancel(registrationId, user);
  }
}
