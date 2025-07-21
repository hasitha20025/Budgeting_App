import { HoldingData } from '@/types';

export default function TopHoldings() {
  const holdings: HoldingData[] = [
    { name: 'Apple Inc. (AAPL)', value: '$4,250.00', change: '+2.5%', color: 'green' },
    { name: 'Tesla Inc. (TSLA)', value: '$3,800.00', change: '+1.8%', color: 'green' },
    { name: 'Microsoft (MSFT)', value: '$3,200.00', change: '-0.5%', color: 'red' },
    { name: 'Amazon (AMZN)', value: '$2,950.00', change: '+3.2%', color: 'green' },
    { name: 'Bitcoin', value: '$2,100.00', change: '+5.7%', color: 'green' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
        <span className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </span>
        Top Holdings
      </h3>
      <div className="space-y-4">
        {holdings.map((holding, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-800">{holding.name}</p>
              <p className="text-sm text-gray-600">{holding.value}</p>
            </div>
            <span className={`text-sm font-semibold ${
              holding.color === 'green' ? 'text-green-600' : 'text-red-600'
            }`}>
              {holding.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
