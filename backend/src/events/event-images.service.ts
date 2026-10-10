import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { EventStatus, UserRole } from '../../generated/prisma/client.js';
import type { User } from '../../generated/prisma/client.js';
import { CloudinaryService } from '../cloudinary/cloudinary.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

type EventActor = Pick<User, 'id' | 'role'>;

@Injectable()
export class EventImagesService {
  private readonly logger = new Logger(EventImagesService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async uploadCover(
    eventId: string,
    user: EventActor,
    file: Express.Multer.File,
  ) {
    const event = await this.findManageableEvent(eventId, user);

    if (
      event.status === EventStatus.CANCELLED ||
      event.status === EventStatus.COMPLETED
    ) {
      throw new BadRequestException(
        'Cover images cannot be changed for cancelled or completed events',
      );
    }

    const uploaded = await this.cloudinaryService.uploadEventCover(
      file.buffer,
      event.id,
    );

    let updatedEvent;

    try {
      updatedEvent = await this.prisma.event.update({
        where: { id: event.id },
        data: {
          coverImageUrl: uploaded.secure_url,
          coverImagePublicId: uploaded.public_id,
        },
        select: {
          id: true,
          title: true,
          coverImageUrl: true,
          coverImagePublicId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      try {
        await this.cloudinaryService.deleteAsset(uploaded.public_id);
      } catch {
        this.logger.error(
          `Could not clean up uploaded asset ${uploaded.public_id} after a database update failure`,
        );
      }

      throw error;
    }

    if (event.coverImagePublicId) {
      try {
        await this.cloudinaryService.deleteAsset(event.coverImagePublicId);
      } catch {
        this.logger.error(
          `Old cover asset ${event.coverImagePublicId} needs cleanup`,
        );
      }
    }

    return updatedEvent;
  }

  async removeCover(eventId: string, user: EventActor) {
    const event = await this.findManageableEvent(eventId, user);

    if (
      event.status === EventStatus.CANCELLED ||
      event.status === EventStatus.COMPLETED
    ) {
      throw new BadRequestException(
        'Cover images cannot be changed for cancelled or completed events',
      );
    }

    if (!event.coverImagePublicId) {
      return {
        id: event.id,
        coverImageUrl: null,
        coverImagePublicId: null,
      };
    }

    const updatedEvent = await this.prisma.event.update({
      where: { id: event.id },
      data: {
        coverImageUrl: null,
        coverImagePublicId: null,
      },
      select: {
        id: true,
        title: true,
        coverImageUrl: true,
        coverImagePublicId: true,
        updatedAt: true,
      },
    });

    try {
      await this.cloudinaryService.deleteAsset(event.coverImagePublicId);
    } catch {
      this.logger.error(
        `Removed cover asset ${event.coverImagePublicId} needs cleanup in Cloudinary`,
      );
    }

    return updatedEvent;
  }

  private async findManageableEvent(eventId: string, user: EventActor) {
    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
      select: {
        id: true,
        status: true,
        organizerId: true,
        coverImagePublicId: true,
      },
    });

    if (!event) {
      throw new NotFoundException('Event not found');
    }

    if (user.role !== UserRole.ADMIN && event.organizerId !== user.id) {
      throw new ForbiddenException(
        'You do not have permission to manage this event',
      );
    }

    return event;
  }
}
