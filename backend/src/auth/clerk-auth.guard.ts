import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { verifyToken } from '@clerk/backend';
import type { Request } from 'express';

export interface ClerkAuth {
  userId: string;
  sessionId?: string;
}

export interface ClerkAuthenticatedRequest extends Request {
  auth?: ClerkAuth;
}

interface VerifiedClerkClaims {
  sub?: string;
  sid?: string;
}

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<ClerkAuthenticatedRequest>();

    const authorization = request.headers.authorization;
    const [scheme, token] = authorization?.split(' ') ?? [];

    if (scheme !== 'Bearer' || !token) {
      throw new UnauthorizedException('A bearer token is required');
    }

    try {
      const claims = (await verifyToken(token, {
        secretKey: this.configService.getOrThrow<string>('CLERK_SECRET_KEY'),
        authorizedParties: [
          this.configService.getOrThrow<string>('FRONTEND_URL'),
        ],
      })) as VerifiedClerkClaims;

      if (!claims.sub) {
        throw new UnauthorizedException('The token has no user identity');
      }

      request.auth = {
        userId: claims.sub,
        sessionId: claims.sid,
      };

      return true;
    } catch {
      throw new UnauthorizedException('Invalid or expired Clerk token');
    }
  }
}
