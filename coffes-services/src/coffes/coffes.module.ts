import { Module } from '@nestjs/common';
import { RabbitMQModuleConfig } from '../config/rabbitmq-config.module';
import { CoffesConsumer } from './coffes.consumer';

@Module({
  imports: [RabbitMQModuleConfig],
  controllers: [],
  providers: [CoffesConsumer],
})
export class CoffesModule {}
