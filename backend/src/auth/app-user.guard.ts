import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import type { User } from '../../generated/prisma/client.js';
import { AuthService } from './auth.service.js';
import type { ClerkAuthenticatedRequest } from './clerk-auth.guard.js';

export interface ApplicationUserRequest extends Request {
  auth?: ClerkAuthenticatedRequest['auth'];
  appUser?: Pick<
    User,
    | 'id'
    | 'clerkId'
    | 'name'
    | 'email'
    | 'role'
    | 'isActive'
    | 'createdAt'
    | 'updatedAt'
  >;
}

@Injectable()
export class AppUserGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<ApplicationUserRequest>();

    const clerkId = request.auth?.userId;

    if (!clerkId) {
      throw new UnauthorizedException('Authentication is required');
    }

    request.appUser =
      await this.authService.getOrCreateApplicationUser(clerkId);

    return true;
  }
}
