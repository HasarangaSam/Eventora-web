import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { EventSessionsController } from './event-sessions.controller.js';
import { EventSessionsService } from './event-sessions.service.js';

@Module({
  imports: [AuthModule],
  controllers: [EventSessionsController],
  providers: [EventSessionsService],
})
export class EventSessionsModule {}
