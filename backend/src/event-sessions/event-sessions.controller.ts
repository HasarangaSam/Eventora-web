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
import { CreateEventSessionDto } from './dto/create-event-session.dto.js';
import { UpdateEventSessionDto } from './dto/update-event-session.dto.js';
import { EventSessionsService } from './event-sessions.service.js';

type EventActor = Pick<User, 'id' | 'role'>;

@Controller('events/:eventId/sessions')
export class EventSessionsController {
  constructor(private readonly eventSessionsService: EventSessionsService) {}

  @Get()
  listPublishedSessions(@Param('eventId') eventId: string) {
    return this.eventSessionsService.listPublishedSessions(eventId);
  }

  @Get('manage')
  @UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN)
  listManageableSessions(
    @Param('eventId') eventId: string,
    @CurrentUser() user: EventActor,
  ) {
    return this.eventSessionsService.listManageableSessions(eventId, user);
  }

  @Post()
  @UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN)
  create(
    @Param('eventId') eventId: string,
    @CurrentUser() user: EventActor,
    @Body() dto: CreateEventSessionDto,
  ) {
    return this.eventSessionsService.create(eventId, user, dto);
  }

  @Patch(':sessionId')
  @UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN)
  update(
    @Param('eventId') eventId: string,
    @Param('sessionId') sessionId: string,
    @CurrentUser() user: EventActor,
    @Body() dto: UpdateEventSessionDto,
  ) {
    return this.eventSessionsService.update(eventId, sessionId, user, dto);
  }

  @Delete(':sessionId')
  @UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN)
  remove(
    @Param('eventId') eventId: string,
    @Param('sessionId') sessionId: string,
    @CurrentUser() user: EventActor,
  ) {
    return this.eventSessionsService.remove(eventId, sessionId, user);
  }
}
