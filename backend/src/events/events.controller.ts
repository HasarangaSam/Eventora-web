import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import type { User } from '../../generated/prisma/client.js';
import { UserRole } from '../../generated/prisma/client.js';
import { AppUserGuard } from '../auth/app-user.guard.js';
import { ClerkAuthGuard } from '../auth/clerk-auth.guard.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { Roles } from '../auth/roles.decorator.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { CreateEventDto } from './dto/create-event.dto.js';
import { ListEventsDto } from './dto/list-events.dto.js';
import { UpdateEventDto } from './dto/update-event.dto.js';
import { EventsService } from './events.service.js';

type EventActor = Pick<User, 'id' | 'role'>;

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  listPublished(@Query() dto: ListEventsDto) {
    return this.eventsService.listPublished(dto);
  }

  @Get('mine')
  @UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN)
  listManaged(@CurrentUser() user: EventActor) {
    return this.eventsService.listManaged(user);
  }

  @Post()
  @UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN)
  create(@CurrentUser() user: EventActor, @Body() dto: CreateEventDto) {
    return this.eventsService.create(user, dto);
  }

  @Get(':id')
  findPublishedById(@Param('id') id: string) {
    return this.eventsService.findPublishedById(id);
  }

  @Patch(':id')
  @UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN)
  update(
    @Param('id') id: string,
    @CurrentUser() user: EventActor,
    @Body() dto: UpdateEventDto,
  ) {
    return this.eventsService.update(id, user, dto);
  }

  @Patch(':id/publish')
  @UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN)
  publish(@Param('id') id: string, @CurrentUser() user: EventActor) {
    return this.eventsService.publish(id, user);
  }

  @Patch(':id/cancel')
  @UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN)
  cancel(@Param('id') id: string, @CurrentUser() user: EventActor) {
    return this.eventsService.cancel(id, user);
  }
}
