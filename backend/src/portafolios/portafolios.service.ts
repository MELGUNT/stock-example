import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { Stock } from 'src/stocks/stocks.entity';
import { StocksService } from 'src/stocks/stocks.service';
import { TradeSide } from 'src/trades/trade.dto';
import { Portfolio, PortfolioHolding } from './portafolio.entity';
import { calcCost, addMoney, subtractMoney } from '../utils/money';

//this service is responsible for managing the user's portfolio 
// and can be updated to be stateless and handle multiple users 
// by using a database to store the portfolio data
@Injectable()
export class PortfolioService {
  private cash = 100000;
  private myStocks: Record<string, number> = {};

  constructor(private readonly stocksService: StocksService) {}

  getPortfolio(): Portfolio {
    const portfolioStocks = this.getPortfolioHoldings();
    const stocksValue = portfolioStocks.reduce(
      (acc, cur) => addMoney(acc, cur.currentValue), 
      0
    );

    return {
      cash: this.cash,
      holdings: portfolioStocks,
      totalValue: addMoney(this.cash, stocksValue),
    };
  }

  tradeStock(symbol: string, side: TradeSide, quantity: number) {
    const stock = this.stocksService.findOne(symbol);
    if (!stock) {
      throw new BadRequestException('Stock not found.');
    }

    if (side === TradeSide.BUY) {
      return this.buyStock(stock, quantity);
    }

    this.sellStock(stock, quantity);
  }

  private buyStock(stock: Stock, quantity: number) {
    const totalCost = calcCost(stock.price, quantity);

    if (this.cash < totalCost) {
      throw new BadRequestException('Insufficient cash.');
    }

    this.cash = subtractMoney(this.cash, totalCost);
    this.myStocks[stock.symbol] = (this.myStocks[stock.symbol] || 0) + quantity;
  }

  private sellStock(stock: Stock, quantity: number) {
    if (!this.myStocks[stock.symbol] || this.myStocks[stock.symbol] < quantity) {
      throw new BadRequestException('Insufficient shares.');
    }

    const totalValue = calcCost(stock.price, quantity);
    this.cash = addMoney(this.cash, totalValue);
    this.myStocks[stock.symbol] -= quantity;

    if (this.myStocks[stock.symbol] === 0) {
      delete this.myStocks[stock.symbol];
    }
  }

  getPortfolioHoldings(): PortfolioHolding[] {
    return Object.entries(this.myStocks).map(([symbol, quantity]) => {
      const stock = this.stocksService.findOne(symbol);
      if (!stock) {
        throw new InternalServerErrorException('Inconsistent state.');
      }

      return {
        symbol,
        quantity,
        currentValue: calcCost(stock.price, quantity),
      };
    });
  }
}
