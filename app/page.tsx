"use client";
import { useState, useMemo } from 'react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

export default function BudgetApp() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState<'income' | 'expense'>('expense');

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction: Transaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type: transactionType,
    };

    setTransactions([...transactions, newTransaction]);
    setDescription('');
    setAmount('');
  };

  const { totalIncome, totalExpenses, balance } = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);
    const expenses = transactions
      .filter((t) => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);
    return {
      totalIncome: income,
      totalExpenses: expenses,
      balance: income - expenses,
    };
  }, [transactions]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center">Budgeting App</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Add Transaction Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Add New Transaction</h2>
            <form onSubmit={handleAddTransaction}>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., Groceries"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium mb-1">Amount</label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., 50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Type</label>
                <select
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value as 'income' | 'expense')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Add Transaction
              </button>
            </form>
          </div>

          {/* Budget Summary */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Budget Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">Total Income:</span>
                <span className="text-lg font-semibold text-green-600">${totalIncome.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">Total Expenses:</span>
                <span className="text-lg font-semibold text-red-600">${totalExpenses.toFixed(2)}</span>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Balance:</span>
                <span className={`text-xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${balance.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction List */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
          <ul className="space-y-4">
            {transactions.map((t) => (
              <li key={t.id} className="flex justify-between items-center border-b pb-2">
                <span>{t.description}</span>
                <span className={t.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                  {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}