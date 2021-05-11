import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Get()
  sendCats(): void {
    this.amqpConnection.publish('exchange2', 'coffes', [
      {
        name: 'coffe',
        price: 2.3,
      },
      {
        name: 'musun',
        price: 0.25,
      },
    ]);
  }
}
