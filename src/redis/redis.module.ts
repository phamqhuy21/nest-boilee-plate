import { Global, Logger, Module } from '@nestjs/common';
import { Redis } from 'ioredis';
import { REDIS_CLIENT } from './redis.constants';
import { config } from 'dotenv';
import { RedisService } from './redis.service';
config();

const logger = new Logger('redis');

const redisClientProvider = {
  provide: REDIS_CLIENT,
  useFactory: () => {
    const client = new Redis({
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT) || 6379,
    });

    client.on('error', (err) => logger.error('Redis Client Error', err));
    return client;
  },
};

@Global()
@Module({
  providers: [redisClientProvider, RedisService],
  exports: [redisClientProvider, RedisService],
})
export class RedisModule {}
