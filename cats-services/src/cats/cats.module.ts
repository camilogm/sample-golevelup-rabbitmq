import { Module } from '@nestjs/common';
import { RabbitMQModuleConfig } from '../config/rabbitmq-config.module';
import { CatsConsumer } from './cats.consumer';
import { CatsController } from './cats.controller';

@Module({
  imports: [RabbitMQModuleConfig],
  providers: [CatsConsumer],
  controllers: [CatsController],
})
export class CatsModule {}
