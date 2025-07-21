import { ActivityData } from '@/types';

export default function RecentActivity() {
  const activities: ActivityData[] = [
    { action: 'Bought', asset: 'AAPL', amount: '10 shares', time: '2 hours ago', type: 'buy' },
    { action: 'Sold', asset: 'GOOGL', amount: '5 shares', time: '1 day ago', type: 'sell' },
    { action: 'Dividend', asset: 'MSFT', amount: '$25.50', time: '3 days ago', type: 'dividend' },
    { action: 'Bought', asset: 'BTC', amount: '$500', time: '1 week ago', type: 'buy' },
    { action: 'Rebalanced', asset: 'Portfolio', amount: 'All assets', time: '2 weeks ago', type: 'rebalance' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
        <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              activity.type === 'buy' ? 'bg-green-100' : 
              activity.type === 'sell' ? 'bg-red-100' : 
              activity.type === 'dividend' ? 'bg-blue-100' : 'bg-purple-100'
            }`}>
              <span className="text-sm">
                {activity.type === 'buy' ? '📈' : 
                 activity.type === 'sell' ? '📉' : 
                 activity.type === 'dividend' ? '💰' : '⚖️'}
              </span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">
                {activity.action} {activity.asset}
              </p>
              <p className="text-sm text-gray-600">{activity.amount}</p>
            </div>
            <span className="text-xs text-gray-500">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
