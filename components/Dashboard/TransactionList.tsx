import { Transaction, TimePeriod } from '@/types';

interface TransactionListProps {
  transactions: Transaction[];
  activePeriod: TimePeriod;
}

export default function TransactionList({ transactions, activePeriod }: TransactionListProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
        <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </span>
        Transaction History
        <span className="ml-auto text-sm font-normal text-gray-500">
          ({transactions.length} {activePeriod})
        </span>
      </h3>
      {transactions.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-gray-500">No transactions found for this period</p>
          <p className="text-sm text-gray-400 mt-1">Add your first transaction to get started</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {transactions.map((t) => (
            <div key={t.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  t.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <span className="text-lg">
                    {t.type === 'income' ? '💰' : '💸'}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{t.description}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(t.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
              <div className={`text-lg font-semibold ${
                t.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}>
                {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
