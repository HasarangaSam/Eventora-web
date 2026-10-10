import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { TicketTypesController } from './ticket-types.controller.js';
import { TicketTypesService } from './ticket-types.service.js';

@Module({
  imports: [AuthModule],
  controllers: [TicketTypesController],
  providers: [TicketTypesService],
})
export class TicketTypesModule {}
