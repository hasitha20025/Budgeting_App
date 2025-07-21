export interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  date: Date;
}

export type TimePeriod = 'today' | 'weekly' | 'monthly' | 'yearly';
export type NavSection = 'dashboard' | 'portfolio';

export interface HoldingData {
  name: string;
  value: string;
  change: string;
  color: 'green' | 'red';
}

export interface ActivityData {
  action: string;
  asset: string;
  amount: string;
  time: string;
  type: 'buy' | 'sell' | 'dividend' | 'rebalance';
}
