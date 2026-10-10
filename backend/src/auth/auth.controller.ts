import { Controller, Get, UseGuards } from '@nestjs/common';
import type { User } from '../../generated/prisma/client.js';
import { AppUserGuard } from './app-user.guard.js';
import { ClerkAuthGuard } from './clerk-auth.guard.js';
import { CurrentUser } from './current-user.decorator.js';

@Controller('auth')
export class AuthController {
  @Get('me')
  @UseGuards(ClerkAuthGuard, AppUserGuard)
  getCurrentUser(@CurrentUser() user: User) {
    return {
      id: user.id,
      clerkId: user.clerkId,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
