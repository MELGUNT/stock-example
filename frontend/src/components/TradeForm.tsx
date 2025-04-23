import React, { useState, useEffect } from 'react';
import { useTrade } from '../hooks/useTrade';
import { Button } from '../atoms/Button';
import { Modal } from '../atoms/Modal';
import { Stock, TradeSide } from '../models';
import { SelectOption } from '../atoms/Select';
import { Select } from '../atoms/Select';
import { Input } from '../atoms/Input';
import { Label } from '@headlessui/react';
import { Field } from '@headlessui/react';
import { toast } from 'react-hot-toast';

interface TradeFormProps {
  stock: Stock | undefined;
  onClose: () => void;
}

export const TradeForm = ({ stock, onClose }: TradeFormProps) => {
  const [quantity, setQuantity] = useState(1);
  const [side, setSide] = useState<TradeSide>('buy');
  const [error, setError] = useState<string | null>(null);

  const { tradeAsync, loading } = useTrade();

  useEffect(() => {
    setQuantity(1);
    setSide('buy');
    setError(null);
  }, [stock?.symbol]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stock) return;

    try {
      await tradeAsync({ symbol: stock.symbol, quantity, side });
      setError(null);
      onClose();
      toast.success(`Successfully ${side} ${quantity} shares of ${stock.symbol}`);
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
      <form onSubmit={handleSubmit} className="py-4 space-y-4">
        {error && (
          <div className="rounded-xl border border-danger bg-danger/10 px-4 py-3 text-sm text-danger font-medium shadow-sm">
            <span className="font-heading font-semibold">Error:</span> {error}
          </div>
        )}

        <Field>
          <Label className="text-sm/6 font-medium text-primary mb-2">Quantity</Label>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mt-1 block w-full rounded border p-2"
            min={1}
            required
          />
        </Field>

        <Field>
          <Label className="text-sm/6 font-medium text-primary mb-2">Trade Side</Label>
          <Select value={side} onChange={(val) => setSide(val as TradeSide)}>
            <SelectOption value="buy">Buy</SelectOption>
            <SelectOption value="sell">Sell</SelectOption>
          </Select>
        </Field>

        <div className="pt-2">
          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
};
