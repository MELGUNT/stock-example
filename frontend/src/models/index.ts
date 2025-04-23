export interface Stock {
    symbol: string;
    name: string;
    price: number;
}
  
export interface PortfolioHolding {
    symbol: string;
    quantity: number;
    currentValue: number;
}
  
export interface Portfolio {
    cash: number;
    holdings: PortfolioHolding[];
    totalValue: number;
}

export type TradeSide = 'buy' | 'sell';

export interface TradeRequest {
    symbol: string;
    quantity: number;
    side: TradeSide;
}

