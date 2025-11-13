# 📋 Tender Tasks Board

A modern, dark-themed task management board built with [Next.js 14](https://nextjs.org/), TypeScript, and Tailwind CSS. This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🎯 Project Overview

This project implements a **three-level incremental assessment** for building a production-ready task management system:

### Level 1: Core UI ✅
- Tasks organized by status columns (To-Do, In Progress, Not Started, Done)
- Dark theme with modern UI design
- Complete task cards with title, description, assignee, priority, due date, and status

### Level 2: Animations & Interactivity ✅
- Smooth hover effects and transitions
- Drag & drop functionality between columns
- Real-time status updates
- Scrolling overflow handling

### Level 3: Architecture & Commenting ✅
- Modular component structure
- TypeScript type safety
- Task detail view with comment system
- Well-documented code with inline comments

## 🚀 Features

- 🎨 Modern dark UI with smooth animations
- 🖱️ Drag & drop task management
- 💬 Real-time comment system
- 🏷️ Priority badges (High, Medium, Low)
- 📅 Due date tracking
- 📎 Attachment management
- 👥 Assignee avatars
- 🔍 Search functionality
- 📊 Task counters per column

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Geist](https://vercel.com/font) via `next/font`

## 📁 Project Structure

```
tender-tasks/
├── app/
│   ├── page.tsx                    # Main board page
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
├── components/
│   ├── Header.tsx                  # Navigation header
│   ├── ViewToggle.tsx              # View switcher
│   ├── TaskCard.tsx                # Task card component
│   ├── BoardColumn.tsx             # Column container
│   └── TaskDetailView.tsx          # Task detail modal
├── types/
│   └── task.ts                     # TypeScript interfaces
├── data/
│   └── initialTasks.ts             # Initial task data
├── utils/
│   └── helpers.ts                  # Utility functions
└── public/                         # Static assets
```

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📦 Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 🎨 Key Components

### Header
Navigation, search bar, and user profile section.

### TaskCard
Individual task display with drag & drop functionality, priority badges, and status indicators.

### BoardColumn
Column container that acts as a drop zone for tasks with automatic sorting.

### TaskDetailView
Modal component for detailed task information with comment thread functionality.

## 📝 Type Safety

All components are fully typed with TypeScript interfaces:

- `Task` - Task data structure
- `Column` - Board column configuration
- `Comment` - Comment thread structure



You can check out [the Next.js GitHub repository](https://github.com/JuhiRai007/Tender-Tasks.git) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

