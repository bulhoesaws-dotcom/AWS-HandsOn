import { Injectable } from '@nestjs/common';
import { id } from 'zod/v4/locales';

@Injectable()
export class ClientService {
  getHello(): any {
    return { 
      client: {
        id: 1,
        name: 'John Doe'
      }
    };
  }
}
