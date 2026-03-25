import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiInfo() {
    return {
      name: 'Sense Corporation API',
      version: '1.0.0',
      description: 'Enterprise technology services backend',
      endpoints: {
        health: '/api/health',
        contact: '/api/contact',
      },
    };
  }
}
