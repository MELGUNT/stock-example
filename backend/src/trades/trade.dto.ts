import { IsString, IsNumber, IsIn, Min } from 'class-validator';
export enum TradeSide {
  BUY = 'buy',
  SELL = 'sell',
}
export class TradeDto {
  @IsString()
  symbol: string;

  @IsNumber()
  @Min(1)
  quantity: number;

  @IsString()
  @IsIn(Object.values(TradeSide))
  side: TradeSide;
}
