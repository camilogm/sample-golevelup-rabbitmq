import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const RabbitMQModuleConfig = RabbitMQModule.forRootAsync(
  RabbitMQModule,
  {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      const uri = configService.get<string>('RABBITMQ_URI');
      return {
        uri,
        connectionInitOptions: { wait: true, reject: true, timeout: 2000 },
        exchanges: [
          {
            name: 'exchange2',
            type: 'direct',
          },
        ],
      };
    },
  },
);
