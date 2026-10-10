import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { CloudinaryModule } from '../cloudinary/cloudinary.module.js';
import { EventImagesController } from './event-images.controller.js';
import { EventImagesService } from './event-images.service.js';
import { EventsController } from './events.controller.js';
import { EventsService } from './events.service.js';

@Module({
  imports: [AuthModule, CloudinaryModule],
  controllers: [EventsController, EventImagesController],
  providers: [EventsService, EventImagesService],
})
export class EventsModule {}
