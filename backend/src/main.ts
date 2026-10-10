import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import express from 'express';
import { AppModule } from './app.module.js';

async function bootstrap() {
  // Disable NestJS's automatic body parser so we can control it per-route
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');

  // For the Clerk webhook route, use raw body (Buffer) so svix can verify the signature.
  // This MUST be registered before the global json() parser below.
  app.use('/api/webhooks/clerk', express.raw({ type: 'application/json' }));

  // For all other routes, parse JSON normally
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: configService.getOrThrow<string>('FRONTEND_URL'),
    credentials: true,
  });

  const port = configService.get<number>('PORT', 3000);

  await app.listen(port);
}

void bootstrap();
