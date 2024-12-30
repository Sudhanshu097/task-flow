# TaskFlow Pro

![TaskFlow Pro](https://github.com/yourusername/taskflow-pro/raw/main/public/preview.png)

TaskFlow Pro is a modern, full-stack project management platform built with Next.js 13+ and Supabase. It offers real-time collaboration features, intuitive task management, and powerful team communication tools.

## 🌟 Features

### Core Features
- **Real-time Project Boards** - Drag-and-drop Kanban boards with instant updates
- **Team Collaboration** - Real-time chat, file sharing, and collaborative editing
- **Task Management** - Create, assign, and track tasks with deadlines and priorities
- **File Attachments** - Upload and manage project files using Supabase Storage
- **Analytics Dashboard** - Track project progress and team productivity

### User Management
- **Role-based Access** - Admin, Project Manager, and Team Member roles
- **Authentication** - Secure email/password login with Supabase Auth
- **Team Management** - Invite members, assign roles, and manage permissions

### Premium Features
- **Advanced Analytics** - Detailed project insights and custom reports
- **Unlimited Projects** - No restrictions on the number of projects
- **Priority Support** - Dedicated customer support for premium users
- **API Access** - RESTful API for external integrations

## 🚀 Tech Stack

- **Frontend**: Next.js 13+, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Supabase, PostgreSQL
- **ORM**: Prisma
- **Authentication**: Supabase Auth
- **Real-time**: Supabase Realtime
- **Storage**: Supabase Storage
- **Payments**: Razorpay
- **Testing**: Jest, Cypress
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/taskflow-pro.git
   cd taskflow-pro
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:
   - Copy \`.env.example\` to \`.env.local\`
   - Fill in your Supabase and Razorpay credentials

4. Run database migrations:
   \`\`\`bash
   npm run prisma:generate
   npm run prisma:push
   \`\`\`

5. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## 💻 Environment Variables

Create a \`.env.local\` file with the following variables:

\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Database
DATABASE_URL=your_database_url
\`\`\`

## 🏗️ Project Structure

\`\`\`
taskflow-pro/
├── app/                    # Next.js 13 app directory
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   └── (marketing)/       # Marketing pages
├── components/            # React components
├── lib/                   # Utilities and helpers
├── prisma/               # Database schema and migrations
└── public/               # Static assets
\`\`\`

## 🔒 Security

- Row Level Security (RLS) enabled in Supabase
- Protected API routes with authentication
- Secure payment processing with Razorpay
- Type-safe database queries with Prisma

## 💰 Pricing Plans

- **Basic** (₹999/month)
  - 5 team members
  - 3 active projects
  - 5GB storage

- **Pro** (₹2,499/month)
  - 20 team members
  - Unlimited projects
  - 50GB storage

- **Enterprise** (₹7,499/month)
  - Unlimited team members
  - Unlimited projects
  - Unlimited storage
  - Custom features

## 🧪 Testing

Run tests:
\`\`\`bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e
\`\`\`

## 📚 API Documentation

API documentation is available at \`/api-docs\` when running the development server.

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- Email: support@taskflowpro.com
- Documentation: [docs.taskflowpro.com](https://docs.taskflowpro.com)
- Discord: [Join our community](https://discord.gg/taskflowpro)