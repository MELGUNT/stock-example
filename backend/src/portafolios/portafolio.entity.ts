export class PortfolioHolding {
  symbol: string;
  quantity: number;
  currentValue: number;
}

export class Portfolio {
  cash: number;
  holdings: PortfolioHolding[];
  totalValue: number;
}