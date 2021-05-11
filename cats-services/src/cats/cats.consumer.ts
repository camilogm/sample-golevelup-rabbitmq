import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsConsumer {
  @RabbitRPC({
    exchange: 'exchange2',
    routingKey: 'key1',
    queue: 'cats',
  })
  async getCoffes(message: any) {
    console.log(message);
  }
}
