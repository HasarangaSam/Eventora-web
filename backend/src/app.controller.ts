import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class AppController {
  @Get()
  getHealth() {
    return {
      status: 'ok',
      application: 'Eventora API',
      timestamp: new Date().toISOString(),
    };
  }
}
