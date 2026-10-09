import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { ClerkAuthGuard } from './clerk-auth.guard.js';

@Module({
  controllers: [AuthController],
  providers: [ClerkAuthGuard],
})
export class AuthModule {}
