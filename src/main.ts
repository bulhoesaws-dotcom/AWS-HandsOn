import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ZodFilter } from './errors/zod.filter';
import { envConfig } from './config';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new ZodFilter());
  app.use(bodyParser.json({ limit: '1mb' }));
  app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.timeout = 60000;

  console.log(`Server is running on port ${envConfig.SERVER_PORT}`)
  await app.listen(envConfig.SERVER_PORT);
}
bootstrap();
