# BudgetPro - Smart Financial Management System

A modern, responsive budgeting and investment tracking application built with Next.js 15, React 19, and TypeScript. Track your income, expenses, investment portfolio, and financial goals with an intuitive interface and real-time updates.

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

### 📊 Financial Tracking
- **Real-time Transaction Management**: Add, view, and categorize income and expenses
- **Smart Period Filtering**: View transactions by today, weekly, monthly, or yearly periods
- **Budget Summary**: Instant calculations of total income, expenses, and balance
- **Visual Indicators**: Color-coded balance display (positive/negative)

### � Investment Portfolio
- **Portfolio Overview**: Track total portfolio value with performance metrics
- **Asset Categories**: Stocks, cryptocurrencies, bonds, and other investments
- **Top Holdings**: Monitor your best-performing investments
- **Recent Activity**: Track all portfolio transactions and changes
- **Performance Charts**: Visual representation of portfolio growth (coming soon)

### 🎯 User Experience
- **Dual Navigation**: Switch between Dashboard and Portfolio sections
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Live Date & Time**: Real-time clock display in the header
- **Professional UI**: Modern gradient backgrounds and card-based layouts
- **Interactive Navigation**: Easy switching between time periods and sections

### 🔧 Technical Features
- **Component Architecture**: Modular, maintainable component structure
- **Type Safety**: Full TypeScript implementation with centralized interfaces
- **Modern React**: Built with React 19 and Next.js 15 App Router
- **Performance Optimized**: Efficient state management and memoization
- **Hydration Safe**: Server/client rendering compatibility

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15.3.4](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: Heroicons (SVG)
- **State Management**: React Hooks (useState, useMemo, useEffect)
- **Architecture**: Component-based modular design

### Backend (Coming Soon)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Authentication**: Supabase Auth
- **Real-time Features**: Supabase Realtime
- **File Storage**: Supabase Storage

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hasitha20025/Budgeting_App.git
   cd Budgeting_App
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Environment Setup (For Future Supabase Integration)

When Supabase backend is integrated, create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## � Usage

### Dashboard Section
#### Adding Transactions
1. Use the **Add Transaction** form on the left sidebar
2. Enter description, amount, and select type (Income/Expense)
3. Click "Add Transaction" to save

#### Viewing Data
- **Time Periods**: Switch between Today, Weekly, Monthly, and Yearly views
- **Budget Summary**: View your financial overview in the summary cards
- **Transaction History**: Browse all transactions with timestamps and categories

### Portfolio Section
#### Investment Tracking
- **Portfolio Stats**: View total portfolio value and asset breakdown
- **Holdings Management**: Monitor individual stock and crypto positions
- **Activity Feed**: Track all investment transactions and changes
- **Performance Monitoring**: Analyze portfolio growth and changes

### Navigation
- **Dashboard/Portfolio Toggle**: Switch between main sections
- **Real-time Clock**: Current date and time displayed in header
- **Period Filters**: Quick access to different time ranges (Dashboard only)

## 📁 Project Structure

```
Budgeting_App/
├── app/
│   ├── favicon.ico
│   ├── globals.css                 # Global styles
│   ├── layout.tsx                  # Root layout component
│   └── page.tsx                    # Main application orchestrator
├── components/                     # Modular components
│   ├── Layout/
│   │   └── Header.tsx             # Navigation header with clock
│   ├── Dashboard/
│   │   ├── Dashboard.tsx          # Dashboard container
│   │   ├── TransactionForm.tsx    # Add transaction form
│   │   ├── BudgetSummary.tsx      # Income/expense summary
│   │   └── TransactionList.tsx    # Transaction history
│   └── Portfolio/
│       ├── Portfolio.tsx          # Portfolio container
│       ├── PortfolioStats.tsx     # Portfolio statistics
│       ├── TopHoldings.tsx        # Investment holdings
│       ├── RecentActivity.tsx     # Activity feed
│       └── PerformanceChart.tsx   # Chart placeholder
├── types/
│   └── index.ts                   # TypeScript interfaces
├── public/                        # Static assets
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies and scripts
```

## �️ Component Architecture

### **Core Principles**
- **Separation of Concerns**: Each component has a single responsibility
- **Type Safety**: Strong TypeScript interfaces for all props and data
- **Reusability**: Components designed for easy reuse and testing
- **Maintainability**: Modular structure for easy updates and debugging

### **Component Hierarchy**
```
BudgetApp (Main App)
├── Header (Navigation & Clock)
├── Dashboard (Financial Tracking)
│   ├── TransactionForm
│   ├── BudgetSummary
│   └── TransactionList
└── Portfolio (Investment Tracking)
    ├── PortfolioStats
    ├── TopHoldings
    ├── RecentActivity
    └── PerformanceChart
```

## 🎨 Design Features

- **Modern Gradient Backgrounds**: Smooth blue-to-indigo gradients
- **Card-based Layout**: Clean, organized content presentation
- **Color-coded Categories**: Green for income/gains, red for expenses/losses
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Professional Typography**: Clear, readable font hierarchy
- **Interactive Elements**: Hover effects and smooth transitions

## 🔄 State Management

The application uses React's built-in state management with clean architecture:
- **Main App State**: Transaction data and navigation state
- **Component Props**: Typed interfaces for data flow
- **Computed State**: `useMemo` for derived calculations
- **Side Effects**: `useEffect` for real-time clock updates
- **Event Handling**: Callback props for user interactions

## 📊 Data Flow

### Dashboard Flow
1. **Transaction Input**: User enters transaction details
2. **State Update**: Transaction added to main state array
3. **Filtering**: Transactions filtered by selected time period
4. **Calculations**: Income, expenses, and balance computed
5. **Display**: Updated data rendered in UI components

### Portfolio Flow
1. **Portfolio Display**: Static portfolio data rendered
2. **Navigation**: User switches between sections
3. **State Management**: Active section tracked in main app
4. **Component Rendering**: Appropriate section displayed

## � Performance Optimizations

- **Component Separation**: Isolated components reduce unnecessary re-renders
- **Memoized Calculations**: Expensive computations cached with `useMemo`
- **Efficient Filtering**: Smart date-based transaction filtering
- **Minimal Re-renders**: Optimized component updates with proper dependencies
- **Fast Navigation**: Client-side routing with Next.js
- **Type Safety**: Compile-time error prevention with TypeScript

## 🛡️ Error Handling & Quality

- **Form Validation**: Required field validation and type checking
- **Type Safety**: TypeScript prevents runtime errors across all components
- **Graceful Fallbacks**: Default states for empty data and loading states
- **Hydration Safety**: Server/client rendering compatibility with mounted checks
- **Component Isolation**: Errors in one component don't affect others

## 🚦 Development Status

- ✅ **Phase 1**: Frontend Development (Complete)
  - ✅ Modular component architecture
  - ✅ Dashboard with transaction management
  - ✅ Portfolio section with investment tracking
  - ✅ Responsive design and navigation
  - ✅ TypeScript implementation
  - ✅ Real-time clock integration

- 🔄 **Phase 2**: Supabase Integration (Upcoming)
  - User authentication
  - Database integration
  - Real-time features
  - Cloud synchronization

- 📋 **Phase 3**: Advanced Features (Planned)
  - Advanced analytics and charts
  - Goal tracking and budgeting
  - Multi-user support
  - Mobile app (React Native)

## 🔮 Future Enhancements

### **Data & Backend**
- **Data Persistence**: Local storage or database integration
- **API Integration**: Real-time stock prices and portfolio updates
- **User Authentication**: Multi-user support with personal data

### **Features**
- **Export Features**: CSV/PDF report generation
- **Budget Goals**: Set and track spending limits and investment targets
- **Categories**: Custom transaction and investment categories
- **Advanced Charts**: Interactive portfolio performance visualizations
- **Notifications**: Alerts for spending limits and portfolio changes

### **Technical**
- **Testing**: Unit tests for all components
- **PWA**: Progressive Web App capabilities
- **Multi-currency**: Support for different currencies
- **Dark Mode**: Theme switching capability
- **Accessibility**: Enhanced WCAG compliance

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. When contributing:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Follow the existing component architecture
4. Ensure TypeScript compliance
5. Test your changes thoroughly
6. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
7. Push to the branch (`git push origin feature/AmazingFeature`)
8. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hasitha** - [hasitha20025](https://github.com/hasitha20025)

## 🙏 Acknowledgments

- **Next.js Team**: For the excellent React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Heroicons**: For the beautiful SVG icon library
- **TypeScript**: For bringing type safety to JavaScript
- **Supabase**: For the planned backend infrastructure
- **Vercel**: For deployment platform

## 📞 Support

If you have any questions or need help with the project, please open an issue or contact me directly.

---

⭐ **If you find this project helpful, please give it a star!** ⭐

**BudgetPro** - Making financial management and investment tracking simple and effective 💰📈
