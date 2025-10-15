import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  SERVER_PORT: z.coerce.number().default(3000),

  DB_URL_NODE: z.string(),
  DEV_USER_NAME: z.string(),
  DEV_PASSWORD: z.string(),
  DB_POOL_TIMEOUT: z.coerce.number(),
  DB_POOL_MAX: z.coerce.number(),
  DB_POOL_MIN: z.coerce.number(),

  AMBIENTE: z.enum(["local", "dev", "qa", "pprd", "prd"]),
  API_KEY: z.string(),
});
export const envConfig = envSchema.parse(process.env);
