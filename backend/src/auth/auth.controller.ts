import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from './clerk-auth.guard.js';
import type { ClerkAuthenticatedRequest } from './clerk-auth.guard.js';

@Controller('auth')
export class AuthController {
  @Get('me')
  @UseGuards(ClerkAuthGuard)
  getCurrentIdentity(@Req() request: ClerkAuthenticatedRequest) {
    return {
      authenticated: true,
      clerkUserId: request.auth!.userId,
      sessionId: request.auth!.sessionId,
    };
  }
}
