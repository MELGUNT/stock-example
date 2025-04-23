import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayInit,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
  import { OnEvent } from '@nestjs/event-emitter';
  import { Stock } from './stocks.entity';
  
  @WebSocketGateway({ cors: true })
  export class StocksGateway implements OnGatewayInit {
    @WebSocketServer()
    server: Server;
  
    afterInit() { }
  

    @OnEvent('stocks.updated')
    handleStockUpdate(stocks: Stock[]) {
      this.server.emit('stockUpdate', stocks);
    }
  }
  