import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AuthModule } from './auth/auth.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { CategoriesModule } from './categories/categories.module.js';
import { EventsModule } from './events/events.module.js';
import { EventSessionsModule } from './event-sessions/event-sessions.module.js';
import { TicketTypesModule } from './ticket-types/ticket-types.module.js';
import { RegistrationsModule } from './registrations/registrations.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    AuthModule,
    CategoriesModule,
    EventsModule,
    EventSessionsModule,
    TicketTypesModule,
    RegistrationsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
