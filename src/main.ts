import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { config } from 'dotenv';
import { VersioningType } from '@nestjs/common';
// config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('api', {
    exclude: ['/health'],
  });
  await app.listen(process.env.PORT || 3333);
}
bootstrap();
