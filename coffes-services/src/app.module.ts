import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoffesModule } from './coffes/coffes.module';
import { RabbitMQModuleConfig } from './config/rabbitmq-config.module';

@Module({
  imports: [ConfigModule.forRoot(), RabbitMQModuleConfig, CoffesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
