'use client';
import { useEffect, useState } from 'react';
import { NavSection, TimePeriod } from '@/types';

interface HeaderProps {
  activeSection: NavSection;
  setActiveSection: (section: NavSection) => void;
  activePeriod: TimePeriod;
  setActivePeriod: (period: TimePeriod) => void;
}

export default function Header({
  activeSection,
  setActiveSection,
  activePeriod,
  setActivePeriod,
}: HeaderProps) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date: Date) => {
    return {
      date: date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      time: date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };
  };

  const { date: formattedDate, time: formattedTime } = formatDateTime(currentDateTime);

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        {/* Top section with logo and date/time */}
        <div className="flex justify-between items-center mb-4">
          {/* Logo section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">BudgetPro</h1>
              <p className="text-sm text-gray-600">Smart Financial Management</p>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center space-x-4">
            <nav className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveSection('dashboard')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeSection === 'dashboard'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => setActiveSection('portfolio')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeSection === 'portfolio'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>Portfolio</span>
              </button>
            </nav>
          </div>
          
          {/* Date and Time Display */}
          <div className="text-right">
            <div className="text-lg font-semibold text-gray-800">{formattedDate}</div>
            <div className="text-sm text-gray-600 font-mono">
              {isMounted ? formattedTime : '--:--:--'}
            </div>
          </div>
        </div>

        {/* Time Period Navigation - Only show for Dashboard */}
        {activeSection === 'dashboard' && (
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {[
              { key: 'today', label: 'Today', icon: '📅' },
              { key: 'weekly', label: 'Weekly', icon: '📊' },
              { key: 'monthly', label: 'Monthly', icon: '📈' },
              { key: 'yearly', label: 'Yearly', icon: '📉' },
            ].map((period) => (
              <button
                key={period.key}
                onClick={() => setActivePeriod(period.key as TimePeriod)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md font-medium transition-all duration-200 ${
                  activePeriod === period.key
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span>{period.icon}</span>
                <span>{period.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
