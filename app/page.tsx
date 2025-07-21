"use client";
import { useState, useMemo } from 'react';
import { Transaction, TimePeriod, NavSection } from '@/types';
import Header from '@/components/Layout/Header';
import Dashboard from '@/components/Dashboard/Dashboard';
import Portfolio from '@/components/Portfolio/Portfolio';

export default function BudgetApp() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [activePeriod, setActivePeriod] = useState<TimePeriod>('today');
  const [activeSection, setActiveSection] = useState<NavSection>('dashboard');

  const handleAddTransaction = (transactionData: Omit<Transaction, 'id' | 'date'>) => {
    const newTransaction: Transaction = {
      id: Date.now(),
      ...transactionData,
      date: new Date(),
    };

    setTransactions([...transactions, newTransaction]);
  };

  // Filter transactions based on selected time period
  const filteredTransactions = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      
      switch (activePeriod) {
        case 'today':
          return transactionDate >= today;
        case 'weekly':
          const weekAgo = new Date(today);
          weekAgo.setDate(weekAgo.getDate() - 7);
          return transactionDate >= weekAgo;
        case 'monthly':
          const monthAgo = new Date(today);
          monthAgo.setMonth(monthAgo.getMonth() - 1);
          return transactionDate >= monthAgo;
        case 'yearly':
          const yearAgo = new Date(today);
          yearAgo.setFullYear(yearAgo.getFullYear() - 1);
          return transactionDate >= yearAgo;
        default:
          return true;
      }
    });
  }, [transactions, activePeriod]);

  const { totalIncome, totalExpenses, balance } = useMemo(() => {
    const income = filteredTransactions
      .filter((t) => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);
    const expenses = filteredTransactions
      .filter((t) => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);
    return {
      totalIncome: income,
      totalExpenses: expenses,
      balance: income - expenses,
    };
  }, [filteredTransactions]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        activePeriod={activePeriod}
        setActivePeriod={setActivePeriod}
      />

      <main className="container mx-auto px-6 py-8">
        {activeSection === 'dashboard' ? (
          <Dashboard
            transactions={transactions}
            filteredTransactions={filteredTransactions}
            activePeriod={activePeriod}
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            balance={balance}
            onAddTransaction={handleAddTransaction}
          />
        ) : (
          <Portfolio />
        )}
      </main>
    </div>
  );
}