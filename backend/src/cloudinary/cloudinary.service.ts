import {
  Injectable,
  InternalServerErrorException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';
import type { UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.getOrThrow<string>(
        'CLOUDINARY_CLOUD_NAME',
      ),
      api_key: this.configService.getOrThrow<string>('CLOUDINARY_API_KEY'),
      api_secret: this.configService.getOrThrow<string>(
        'CLOUDINARY_API_SECRET',
      ),
      secure: true,
    });
  }

  uploadEventCover(
    buffer: Buffer,
    eventId: string,
  ): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream(
        {
          folder: 'eventora/events',
          resource_type: 'image',
          allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
          format: undefined,
          public_id: `${eventId}-${Date.now()}`,
          overwrite: false,
          transformation: [
            { width: 2000, height: 1200, crop: 'limit' },
            { quality: 'auto' },
            { fetch_format: 'auto' },
          ],
          context: { eventId },
        },
        (error, result) => {
          if (error || !result) {
            reject(
              new ServiceUnavailableException(
                'The cover image could not be uploaded',
              ),
            );
            return;
          }

          resolve(result);
        },
      );

      upload.end(buffer);
    });
  }

  async deleteAsset(publicId: string): Promise<void> {
    try {
      const result = await cloudinary.uploader.destroy(publicId, {
        resource_type: 'image',
        invalidate: true,
      });

      if (result.result !== 'ok' && result.result !== 'not found') {
        throw new Error('Cloudinary did not confirm asset deletion');
      }
    } catch {
      throw new InternalServerErrorException(
        'The image asset could not be deleted from Cloudinary',
      );
    }
  }
}
