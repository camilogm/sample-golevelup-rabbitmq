import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
import { RabbitMQModuleConfig } from './config/rabbitmq-config.module';

@Module({
  imports: [ConfigModule.forRoot(), RabbitMQModuleConfig, CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
