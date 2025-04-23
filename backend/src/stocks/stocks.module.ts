
import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { StocksService } from './stocks.service';
import { StocksGateway } from './stocks.gateway';
import { StocksController } from './stocks.controller';

@Module({
  imports: [EventEmitterModule.forRoot()],
  providers: [StocksService, StocksGateway],
  controllers: [StocksController],
  exports: [StocksService],
})
export class StocksModule {}
