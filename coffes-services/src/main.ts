import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  const PORT = Number(config.get<string>('PORT')) || 3000;

  await app.listen(PORT, () =>
    console.log(`The microservice is started in port ${PORT}`),
  );
}
bootstrap();
