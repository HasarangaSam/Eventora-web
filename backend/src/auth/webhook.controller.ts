import {
  BadRequestException,
  Controller,
  Headers,
  HttpCode,
  Logger,
  Post,
  Req,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import { Webhook } from 'svix';
import { AuthService } from './auth.service.js';

interface ClerkEmailAddress {
  id: string;
  email_address: string;
}

interface ClerkUserCreatedEvent {
  type: 'user.created' | 'user.updated' | 'user.deleted';
  data: {
    id: string;
    first_name: string | null;
    last_name: string | null;
    username: string | null;
    email_addresses: ClerkEmailAddress[];
    primary_email_address_id: string | null;
  };
}

@Controller('webhooks')
export class WebhookController {
  private readonly logger = new Logger(WebhookController.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  @Post('clerk')
  @HttpCode(200)
  async handleClerkWebhook(
    @Req() req: Request,
    @Headers('svix-id') svixId: string,
    @Headers('svix-timestamp') svixTimestamp: string,
    @Headers('svix-signature') svixSignature: string,
  ) {
    const webhookSecret = this.configService.getOrThrow<string>(
      'CLERK_WEBHOOK_SECRET',
    );

    if (!svixId || !svixTimestamp || !svixSignature) {
      throw new BadRequestException('Missing Svix webhook headers');
    }

    const rawBody = req.body as Buffer;
    if (!Buffer.isBuffer(rawBody) || rawBody.length === 0) {
      throw new BadRequestException('Missing or invalid raw request body');
    }

    const wh = new Webhook(webhookSecret);

    try {
      wh.verify(rawBody, {
        'svix-id': svixId,
        'svix-timestamp': svixTimestamp,
        'svix-signature': svixSignature,
      });
    } catch (err) {
      this.logger.error('Invalid webhook signature', err);
      throw new BadRequestException('Invalid webhook signature');
    }

    let payload: unknown;
    try {
      payload = JSON.parse(rawBody.toString('utf8'));
    } catch {
      throw new BadRequestException('Webhook payload is not valid JSON');
    }

    if (!payload || typeof payload !== 'object') {
      throw new BadRequestException('Webhook payload is not a valid object');
    }

    const event = payload as ClerkUserCreatedEvent;

    if (!('type' in event)) {
      throw new BadRequestException('Webhook payload is missing type field');
    }

    if (event.type === 'user.created' || event.type === 'user.updated') {
      if (!event.data?.id) {
        throw new BadRequestException('Webhook payload missing user id');
      }

      await this.authService.syncApplicationUserFromWebhook({
        clerkId: event.data.id,
        firstName: event.data.first_name ?? null,
        lastName: event.data.last_name ?? null,
        username: event.data.username ?? null,
        emailAddresses: (event.data.email_addresses ?? []).map((address) => ({
          id: address.id,
          emailAddress: address.email_address,
        })),
        primaryEmailAddressId: event.data.primary_email_address_id ?? null,
      });
    }

    return { received: true };
  }
}
