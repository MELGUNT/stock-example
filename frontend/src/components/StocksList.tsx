import React from 'react';
import { Button } from '../atoms/Button';
import { useStocks } from '../hooks/useStocks';

type Stock = { symbol: string; name: string; price: number };
type StockListProps = { onSelect: (stock: Stock) => void };

export const StockList = ({ onSelect }: StockListProps) => {
  const { stocks, refresh, loading } = useStocks();

  return (
    <div className="rounded-2xl bg-background p-6 shadow-md border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-heading text-primary">Available Stocks</h2>
        {/* <Button onClick={() => refresh()} disabled={loading}>
          Refresh
        </Button> */}
      </div>

      <table className="w-full text-sm text-gray-800 border-separate [border-spacing:0.5em]">
        <thead>
          <tr className="border-b border-gray-300 text-left">
            <th className="pb-2 font-semibold">Symbol</th>
            <th className="pb-2 font-semibold">Name</th>
            <th className="pb-2 font-semibold">Price</th>
            <th className="pb-2 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {stocks?.map((stock: Stock) => (
            <tr key={stock.symbol} className="border-t border-gray-100">
              <td className="py-2">{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>${stock.price.toFixed(2)}</td>
              <td>
                <Button onClick={() => onSelect(stock)}>Trade</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
