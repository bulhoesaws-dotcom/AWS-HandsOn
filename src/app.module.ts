import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { oracleDatabase } from './database';
import { ClientModule } from './modules/client/client.module';
import { ApiKeyMiddleware } from './middlewares/api-key.middleware';

@Module({
  imports: [
    //TypeOrmModule.forRoot(oracleDatabase),
    ClientModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes('*');
  }
}
