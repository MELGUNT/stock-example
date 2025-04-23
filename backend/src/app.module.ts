import { Module } from '@nestjs/common';
import { StocksModule } from './stocks/stocks.module';
import { TradesModule } from './trades/trades.module';
import { PortfolioModule } from './portafolios/portafolios.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    StocksModule,
    PortfolioModule,
    TradesModule,
  ],
})
export class AppModule {}
