import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const origin = process.env.FRONTEND_URL || 'http://localhost:3000';

  app.enableCors({
    origin,
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
