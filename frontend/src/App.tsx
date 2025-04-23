import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { StockList } from './components/StocksList';
import { TradeForm } from './components/TradeForm';
import { PortfolioView } from './components/PortfolioView';
import { Stock } from './models';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

export default function App() {
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="max-w-4xl mx-auto space-y-4 py-6">
        <h1 className="text-6xl font-heading text-primary mb-8 text-center">Stock App</h1>
        <PortfolioView />
        <StockList onSelect={setSelectedStock} />
        {selectedStock && (
          <TradeForm stock={selectedStock} onClose={() => setSelectedStock(null)} />
        )}
      </div>
    </QueryClientProvider>
  );
}
