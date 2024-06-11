import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalConfigModule } from './config/config.module';
import { ConnectionName } from './config/database.config';
import { UserModule } from './applications/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './applications/auth/auth.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    GlobalConfigModule,
    RedisModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          ...configService.get(`database.${ConnectionName.Test}`),
          logging: true,
          logger: 'file',
        };
      },
    }),
    AuthModule,
    UserModule,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
