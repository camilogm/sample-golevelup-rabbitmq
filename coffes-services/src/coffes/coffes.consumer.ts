import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { CoffesDTO } from './dto/coffes.dto';

@Injectable()
export class CoffesConsumer {
  @RabbitRPC({
    exchange: 'exchange2',
    routingKey: 'coffes',
    queue: 'coffes',
  })
  getCoffes(message: CoffesDTO[]) {
    console.log(message);
  }
}
