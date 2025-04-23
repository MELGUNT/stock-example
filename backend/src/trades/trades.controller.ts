import { Controller, Post, Body } from '@nestjs/common';
import { TradeDto } from './trade.dto';
import { PortfolioService } from 'src/portafolios/portafolios.service';


@Controller('trade')
export class TradesController {
  constructor(
    private readonly portfolioService: PortfolioService,
  ) {}

  @Post()
  makeTrade(@Body() tradeDto: TradeDto) {
   
    this.portfolioService.tradeStock(
        tradeDto.symbol,
        tradeDto.side,
        tradeDto.quantity
    );

    return { message: 'Trade successful.' };
  }
}
