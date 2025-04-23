
import { Module } from '@nestjs/common';

import { StocksModule } from '../stocks/stocks.module';
import { PortfolioController } from './portafolios.controller';
import { PortfolioService } from './portafolios.service';

@Module({
  imports: [StocksModule],
  controllers: [PortfolioController],
  providers: [PortfolioService],
  exports: [PortfolioService],
})
export class PortfolioModule {}
