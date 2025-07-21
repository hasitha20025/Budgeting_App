import PortfolioStats from './PortfolioStats';
import TopHoldings from './TopHoldings';
import RecentActivity from './RecentActivity';
import PerformanceChart from './PerformanceChart';

export default function Portfolio() {
  return (
    <div className="space-y-8">
      {/* Portfolio Header */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Investment Portfolio</h2>
          <p className="text-gray-600">Track your investments and financial growth</p>
        </div>
      </div>

      {/* Portfolio Stats */}
      <PortfolioStats />

      {/* Portfolio Holdings */}
      <div className="grid lg:grid-cols-2 gap-8">
        <TopHoldings />
        <RecentActivity />
      </div>

      {/* Performance Chart */}
      <PerformanceChart />
    </div>
  );
}
