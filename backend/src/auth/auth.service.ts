import {
  ForbiddenException,
  Logger,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClerkClient } from '@clerk/backend';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly clerkClient: ReturnType<typeof createClerkClient>;

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    this.clerkClient = createClerkClient({
      secretKey: this.configService.getOrThrow<string>('CLERK_SECRET_KEY'),
    });
  }

  async getOrCreateApplicationUser(clerkId: string) {
    let clerkUser;

    try {
      clerkUser = await this.clerkClient.users.getUser(clerkId);
    } catch (error) {
      this.logger.error(
        `Unable to retrieve Clerk profile for ${clerkId}`,
        error instanceof Error ? error.stack : String(error),
      );
      throw new ServiceUnavailableException(
        'Unable to retrieve your profile from the authentication provider',
      );
    }

    return this.upsertApplicationUser({
      clerkId,
      firstName: clerkUser.firstName,
      lastName: clerkUser.lastName,
      username: clerkUser.username,
      emailAddresses: clerkUser.emailAddresses.map((address) => ({
        id: address.id,
        emailAddress: address.emailAddress,
      })),
      primaryEmailAddressId: clerkUser.primaryEmailAddressId,
    });
  }

  async syncApplicationUserFromWebhook(profile: {
    clerkId: string;
    firstName: string | null;
    lastName: string | null;
    username: string | null;
    emailAddresses: { id: string; emailAddress: string }[];
    primaryEmailAddressId: string | null;
  }) {
    return this.upsertApplicationUser(profile);
  }

  private async upsertApplicationUser(profile: {
    clerkId: string;
    firstName: string | null;
    lastName: string | null;
    username: string | null;
    emailAddresses: { id: string; emailAddress: string }[];
    primaryEmailAddressId: string | null;
  }) {
    const {
      clerkId,
      firstName,
      lastName,
      username,
      emailAddresses,
      primaryEmailAddressId,
    } = profile;
    const email =
      emailAddresses.find((address) => address.id === primaryEmailAddressId)
        ?.emailAddress ?? emailAddresses[0]?.emailAddress;

    if (!email) {
      throw new ForbiddenException(
        'Your account must have an email address to use Eventora',
      );
    }

    const name =
      [firstName, lastName]
        .filter((part): part is string => Boolean(part?.trim()))
        .join(' ')
        .trim() ||
      username?.trim() ||
      email.split('@')[0] ||
      'Eventora Attendee';

    const user = await this.prisma.user.upsert({
      where: { clerkId },
      create: {
        clerkId,
        name,
        email,
      },
      update: {
        name,
        email,
      },
      select: {
        id: true,
        clerkId: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user.isActive) {
      throw new ForbiddenException(
        'Your Eventora account has been deactivated',
      );
    }

    return user;
  }
}
