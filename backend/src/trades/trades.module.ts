
import { Module } from '@nestjs/common';
import { TradesController } from './trades.controller';


import { StocksModule } from '../stocks/stocks.module';
import { PortfolioModule } from 'src/portafolios/portafolios.module';

@Module({
  imports: [StocksModule, PortfolioModule],
  controllers: [TradesController],
})
export class TradesModule {}
