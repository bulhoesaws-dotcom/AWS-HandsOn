import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { envConfig } from '../config';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const apiKeyHeader = req.header('x-api-key');
    const apiKeyConfig = envConfig.API_KEY;
    if (apiKeyHeader === apiKeyConfig) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  }
}
