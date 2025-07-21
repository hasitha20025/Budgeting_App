# 💰 Budgeting App

A modern, intuitive budgeting application built with Next.js and TypeScript to help you take control of your finances. Track expenses, manage income, set budgets, and achieve your financial goals with beautiful visualizations and insights.

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

### Current Features (Frontend)
- 📊 **Dashboard Overview** - Get a quick snapshot of your financial status
- 💳 **Expense Tracking** - Log and categorize your daily expenses
- 💰 **Income Management** - Track multiple income sources
- 🎯 **Budget Planning** - Set and monitor monthly/weekly budgets
- 📈 **Visual Analytics** - Charts and graphs for better insights
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🌙 **Dark/Light Mode** - Choose your preferred theme

### Upcoming Features (With Supabase Integration)
- 🔐 **User Authentication** - Secure login and registration
- ☁️ **Cloud Sync** - Access your data from anywhere
- 👥 **Multi-user Support** - Family/shared budgeting
- 🔔 **Smart Notifications** - Budget alerts and reminders
- 📊 **Advanced Reports** - Detailed financial analytics
- 🎯 **Goal Tracking** - Save for your dreams
- 📤 **Data Export** - Export data to CSV/PDF

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15.3.4](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: Custom components with modern design
- **State Management**: React Hooks & Context API

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

### Environment Setup (For Supabase Integration)

When Supabase backend is integrated, create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 📁 Project Structure

```
Budgeting_App/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── favicon.ico       # App icon
├── components/            # Reusable UI components
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## 🎨 Design Philosophy

- **User-Centric**: Simple, intuitive interface designed for everyday use
- **Mobile-First**: Responsive design that works perfectly on all devices
- **Accessibility**: Built with accessibility best practices
- **Performance**: Optimized for fast loading and smooth interactions
- **Modern**: Clean, contemporary design with thoughtful animations

## 📸 Screenshots

*Screenshots will be added as features are developed*

## 🚦 Development Status

- ✅ **Phase 1**: Frontend Development (Current)
  - Basic UI components
  - Responsive layout
  - Local state management
  - Mock data visualization

- 🔄 **Phase 2**: Supabase Integration (Upcoming)
  - User authentication
  - Database integration
  - Real-time features
  - Cloud synchronization

- 📋 **Phase 3**: Advanced Features (Planned)
  - Advanced analytics
  - Goal tracking
  - Multi-user support
  - Mobile app (React Native)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hasitha** - [hasitha20025](https://github.com/hasitha20025)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Vercel](https://vercel.com/) for deployment platform

## 📞 Support

If you have any questions or need help with the project, please open an issue or contact me directly.

---

⭐ **If you find this project helpful, please give it a star!** ⭐
