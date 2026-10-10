import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import type { User } from '../../generated/prisma/client.js';
import { UserRole } from '../../generated/prisma/client.js';
import { AppUserGuard } from '../auth/app-user.guard.js';
import { ClerkAuthGuard } from '../auth/clerk-auth.guard.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { Roles } from '../auth/roles.decorator.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { CreateTicketTypeDto } from './dto/create-ticket-type.dto.js';
import { UpdateTicketTypeDto } from './dto/update-ticket-type.dto.js';
import { TicketTypesService } from './ticket-types.service.js';

type EventActor = Pick<User, 'id' | 'role'>;

@Controller('events/:eventId/ticket-types')
export class TicketTypesController {
  constructor(private readonly ticketTypesService: TicketTypesService) {}

  @Get()
  listPublicTicketTypes(@Param('eventId') eventId: string) {
    return this.ticketTypesService.listPublicTicketTypes(eventId);
  }

  @Get('manage')
  @UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN)
  listManageableTicketTypes(
    @Param('eventId') eventId: string,
    @CurrentUser() user: EventActor,
  ) {
    return this.ticketTypesService.listManageableTicketTypes(eventId, user);
  }

  @Post()
  @UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN)
  create(
    @Param('eventId') eventId: string,
    @CurrentUser() user: EventActor,
    @Body() dto: CreateTicketTypeDto,
  ) {
    return this.ticketTypesService.create(eventId, user, dto);
  }

  @Patch(':ticketTypeId')
  @UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN)
  update(
    @Param('eventId') eventId: string,
    @Param('ticketTypeId') ticketTypeId: string,
    @CurrentUser() user: EventActor,
    @Body() dto: UpdateTicketTypeDto,
  ) {
    return this.ticketTypesService.update(eventId, ticketTypeId, user, dto);
  }

  @Delete(':ticketTypeId')
  @UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN)
  deactivate(
    @Param('eventId') eventId: string,
    @Param('ticketTypeId') ticketTypeId: string,
    @CurrentUser() user: EventActor,
  ) {
    return this.ticketTypesService.deactivate(eventId, ticketTypeId, user);
  }
}
