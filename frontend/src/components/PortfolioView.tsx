import { usePortfolio } from '../hooks/usePortfolio';

export const PortfolioView = () => {
  const { portfolio } = usePortfolio();

  return (
    <div className="rounded-2xl bg-background p-6 shadow-md border border-gray-200">
      <h2 className="text-xl font-heading text-primary mb-4">My Portfolio</h2>

      <p className="text-gray-700 mb-6">
        <span className="font-semibold">Cash:</span> ${portfolio?.cash.toFixed(2)}
      </p>

      <table className="w-full text-sm text-gray-800">
        <thead>
          <tr className="border-b border-gray-300 text-left">
            <th className="pb-2 font-semibold">Symbol</th>
            <th className="pb-2 font-semibold">Quantity</th>
            <th className="pb-2 font-semibold">Value</th>
          </tr>
        </thead>
        <tbody>
          {portfolio?.holdings.map((h: any) => (
            <tr key={h.symbol} className="border-t border-gray-100">
              <td className="py-2">{h.symbol}</td>
              <td>{h.quantity}</td>
              <td>${h.currentValue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-6 text-gray-900 font-semibold">
        Total Value: ${portfolio?.totalValue.toFixed(2)}
      </p>
    </div>
  );
};
