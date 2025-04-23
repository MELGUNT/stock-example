import { Injectable } from '@nestjs/common';

import { SAMPLE_STOCKS } from './stocks.data';
import { Stock } from './stocks.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class StocksService {
  private stocksMap: Map<string, Stock>;

  constructor(private eventEmitter: EventEmitter2) {
    this.stocksMap = new Map(SAMPLE_STOCKS.map(s => [s.symbol, s]));
    //this.startPriceFluctuation();
  }

  findAll(): Stock[] {
    return Array.from(this.stocksMap.values());
  }

  findOne(symbol: string): Stock | undefined {
    return this.stocksMap.get(symbol);
  }


  // Simulate price fluctuations
  private startPriceFluctuation() {
    const loop = () => {
      const delay = 15000 + Math.random() * 15000; 
      setTimeout(() => {
        this.simulatePriceChanges();
        loop();
      }, delay);
    };
    loop();
  }

  private simulatePriceChanges() {
    for (const stock of this.stocksMap.values()) {
      const change = (Math.random() * 0.1 - 0.05); 
      stock.price = +(stock.price * (1 + change)).toFixed(2);
    }

    const updatedStocks = this.findAll();
    this.eventEmitter.emit('stocks.updated', updatedStocks);
  }
}
