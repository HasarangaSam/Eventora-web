import {
  BadRequestException,
  CallHandler,
  Controller,
  Delete,
  ExecutionContext,
  Param,
  ParseFilePipe,
  Patch,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import type { User } from '../../generated/prisma/client.js';
import { UserRole } from '../../generated/prisma/client.js';
import { AppUserGuard } from '../auth/app-user.guard.js';
import { ClerkAuthGuard } from '../auth/clerk-auth.guard.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { Roles } from '../auth/roles.decorator.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { EventImagesService } from './event-images.service.js';

type EventActor = Pick<User, 'id' | 'role'>;

const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
const multerInterceptor = FileInterceptor('file', {
  storage: memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 1,
  },
  fileFilter: (_request, file, callback) => {
    if (!allowedImageTypes.includes(file.mimetype)) {
      callback(
        new BadRequestException('Only JPEG, PNG, and WebP images are allowed'),
        false,
      );
      return;
    }

    callback(null, true);
  },
});

class EventCoverFileInterceptor extends multerInterceptor {
  override async intercept(context: ExecutionContext, next: CallHandler) {
    try {
      return await super.intercept(context, next);
    } catch (error) {
      if (!isMulterError(error)) {
        throw error;
      }

      if (error.code === 'LIMIT_FILE_SIZE') {
        throw new BadRequestException('Image files must be 5 MB or smaller');
      }

      throw new BadRequestException('Invalid image upload');
    }
  }
}

function isMulterError(error: unknown): error is Error & { code: string } {
  return (
    error instanceof Error &&
    error.name === 'MulterError' &&
    'code' in error &&
    typeof error.code === 'string'
  );
}

@Controller('events')
@UseGuards(ClerkAuthGuard, AppUserGuard, RolesGuard)
@Roles(UserRole.ORGANIZER, UserRole.ADMIN)
export class EventImagesController {
  constructor(private readonly eventImagesService: EventImagesService) {}

  @Patch(':id/cover')
  @UseInterceptors(EventCoverFileInterceptor)
  uploadCover(
    @Param('id') eventId: string,
    @CurrentUser() user: EventActor,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
          new FileTypeValidator({
            fileType: /^image\/(jpeg|png|webp)$/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.eventImagesService.uploadCover(eventId, user, file);
  }

  @Delete(':id/cover')
  removeCover(@Param('id') eventId: string, @CurrentUser() user: EventActor) {
    return this.eventImagesService.removeCover(eventId, user);
  }
}
