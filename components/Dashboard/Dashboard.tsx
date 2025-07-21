import { Transaction, TimePeriod } from '@/types';
import TransactionForm from './TransactionForm';
import BudgetSummary from './BudgetSummary';
import TransactionList from './TransactionList';

interface DashboardProps {
  transactions: Transaction[];
  filteredTransactions: Transaction[];
  activePeriod: TimePeriod;
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  onAddTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
}

export default function Dashboard({
  filteredTransactions,
  activePeriod,
  totalIncome,
  totalExpenses,
  balance,
  onAddTransaction,
}: DashboardProps) {
  return (
    <>
      {/* Period Summary Banner */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {activePeriod.charAt(0).toUpperCase() + activePeriod.slice(1)} Overview
          </h2>
          <p className="text-gray-600">
            {filteredTransactions.length} transactions in this period
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Add Transaction Form */}
        <div className="lg:col-span-1">
          <TransactionForm onAddTransaction={onAddTransaction} />
        </div>

        {/* Budget Summary and Transaction List */}
        <div className="lg:col-span-2">
          <BudgetSummary 
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            balance={balance}
          />
          <TransactionList 
            transactions={filteredTransactions}
            activePeriod={activePeriod}
          />
        </div>
      </div>
    </>
  );
}
