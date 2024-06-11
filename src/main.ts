import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { config } from 'dotenv';
import { VersioningType } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('api', {
    exclude: ['/health'],
  });

  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('API documentation for the NestJS application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
