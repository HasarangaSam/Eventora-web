import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { User } from '../../generated/prisma/client.js';
import type { ApplicationUserRequest } from './app-user.guard.js';

type CurrentApplicationUser = Pick<
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

export const CurrentUser = createParamDecorator(
  (
    _data: unknown,
    context: ExecutionContext,
  ): CurrentApplicationUser | undefined => {
    const request = context.switchToHttp().getRequest<ApplicationUserRequest>();

    return request.appUser;
  },
);
