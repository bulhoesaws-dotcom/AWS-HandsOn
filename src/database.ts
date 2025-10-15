import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { envConfig } from './config';

const user = envConfig.DEV_USER_NAME;
const password = envConfig.DEV_PASSWORD;

export const oracleDatabase: TypeOrmModuleOptions = {
  type: 'oracle',
  connectString: envConfig.DB_URL_NODE,
  username: user,
  password: password,
  extra: {
    poolMax: envConfig.DB_POOL_MAX,
    poolMin: envConfig.DB_POOL_MIN,
    poolTimeout: envConfig.DB_POOL_TIMEOUT,
  },
  autoLoadEntities: true,
  synchronize: false
};