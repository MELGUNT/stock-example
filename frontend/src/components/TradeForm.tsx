import React, { useState, useEffect } from 'react';

import { useTrade } from '../hooks/useTrade';
import { Button } from '../atoms/Button';
import { Modal } from '../atoms/Modal';
import { Stock } from '../models';

interface TradeFormProps {
  stock: Stock | undefined;
  onClose: () => void;
}

export const TradeForm = ({ stock, onClose }: TradeFormProps) => {
  const [quantity, setQuantity] = useState(1);
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [error, setError] = useState<string | null>(null);

  const { tradeAsync, loading } = useTrade();


  useEffect(() => {
    setQuantity(1);
    setSide('buy');
  }, [stock?.symbol]);

  const submitTrade = async () => {
    if (!stock) return;

    try {
      await tradeAsync({ symbol: stock.symbol, quantity, side });
      setError(null);
      onClose();
    } catch (err: any) {
      const message = err?.response?.data?.message || 'Trade failed.';
      setError(message);
    }
  };

  return (
    <Modal 
        open={!!stock}
        title={`${side.toUpperCase()} ${stock?.symbol}`}
        onClose={onClose}>
      <div className="py-4">
        {error && (
          <div className="mb-4 rounded-xl border border-danger bg-danger/10 px-4 py-3 text-sm text-danger font-medium shadow-sm">
            <span className="font-heading font-semibold">Error:</span> {error}
          </div>
        )}

        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded p-2 mb-2 w-full"
          min={1}
        />

        <select
          value={side}
          onChange={(e) => setSide(e.target.value as any)}
          className="border rounded p-2 mb-2 w-full"
        >
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>

        <Button onClick={submitTrade} disabled={loading}>
          Submit
        </Button>

 
      </div>
    </Modal>
  );
};
