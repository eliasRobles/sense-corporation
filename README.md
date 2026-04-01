# Sense Corporation

Modern technology services company website - professional, enterprise-grade platform for digital transformation and IT consulting services.

## 🌟 Live Site

**Production**: Deployed on Vercel
- Frontend: [sense-corporation.vercel.app](https://sense-corporation.vercel.app)
- Backend API: [sense-api.vercel.app](https://sense-api.vercel.app)

## 📋 Project Overview

Full-stack monorepo featuring a modern, animated corporate website with integrated contact form and email services. Built with cutting-edge technologies and designed for professional enterprise presentation.

## 🏗️ Project Structure

```
sense-corporation/
├── frontend/          # Next.js 15 App Router
├── backend/           # NestJS API
└── docs/              # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```
**Local URL**: http://localhost:3000

### Backend Development
```bash
cd backend
npm install
npm run start:dev
```
**Local URL**: http://localhost:3001/api

## 💻 Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router, React 19)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with CSS Variables theming
- **Animations**: Framer Motion + Custom Canvas animations
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Themes**: next-themes (dark/light mode)
- **Deployment**: Vercel

### Backend
- **Framework**: NestJS
- **Language**: TypeScript (strict mode)
- **Email**: Microsoft Graph API (@azure/identity)
- **Validation**: class-validator, class-transformer
- **Config**: @nestjs/config (environment variables)
- **Deployment**: Vercel

## ✨ Key Features

### Frontend
- 🎨 **Modern Design System**: Complete component library with 15+ reusable components
- 🌓 **Dark/Light Mode**: Seamless theme switching with persistent preferences
- ✨ **Advanced Animations**: 
  - Floating particles and code snippets (Canvas-based)
  - Scroll-triggered reveals and fade-ins
  - 3D card hover effects with shimmer
  - Smooth section transitions
- 📱 **Fully Responsive**: Mobile-first design approach
- 🧭 **Smart Navigation**: Active section tracking with smooth scrolling
- 📧 **Integrated Contact Form**: Full validation and error handling
- ⚖️ **Legal Pages**: Privacy Policy, Terms of Service, Cookie Policy (Costa Rica compliant)

### Backend
- 📬 **Contact Form API**: Validated endpoint with DTO validation
- 📧 **Email Service**: Microsoft 365 integration ready
- 🏥 **Health Checks**: System status monitoring
- 🔒 **CORS Configured**: Production-ready security settings
- 🌐 **Environment Config**: Secure credential management

## 📄 Pages & Sections

### Main Pages
- **Homepage** (`/`)
  - Hero with tech animations
  - About section
  - Services showcase
  - How We Work (methodology)
  - Technologies stack
  - Why Choose Us
  - Engagement models
  - Contact CTA
- **Contact** (`/contact`) - Form + company info
- **Privacy Policy** (`/privacy`) - GDPR & Costa Rica Law 8968 compliant
- **Terms of Service** (`/terms`) - Legal terms and conditions
- **Cookie Policy** (`/cookies`) - Tracking transparency

## 🎨 Design System

### Color Scheme
- **Primary**: Orange (#ea580c / orange-600) - Brand accent
- **Secondary**: Deep slate - Professional depth
- **Tertiary**: Muted blue-gray - Subtle accents
- **Backgrounds**: Layered surfaces with gradients
- **Text**: Hierarchical contrast (primary, secondary, muted)

### Theme Implementation
All colors use CSS variables (`--primary`, `--background`, etc.) for instant theme switching without component re-renders.

## 🔧 Development Workflow

### Environment Variables

**Frontend** (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

**Backend** (`.env`):
```env
PORT=3001
MICROSOFT_TENANT_ID=your-tenant-id
MICROSOFT_CLIENT_ID=your-client-id
MICROSOFT_CLIENT_SECRET=your-client-secret
MICROSOFT_EMAIL_FROM=info@sense.cr
```

### Running Both Services
```bash
# Terminal 1 - Backend
cd backend && npm run start:dev

# Terminal 2 - Frontend  
cd frontend && npm run dev
```

## 📦 Deployment

Both frontend and backend are deployed on **Vercel** with automatic deployments from the main branch.

### Deploy Commands
- **Frontend**: `npm run build` (handled by Vercel)
- **Backend**: `npm run build` → `npm run start:prod`

## 📞 Contact Information

- **Email**: info@sense.cr
- **Location**: San José, Costa Rica
- **Support**: 24/7 Available

## 📚 Documentation

See individual README files for detailed module documentation:
- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)

## 🤝 Contributing

This is a private corporate website. For inquiries, contact the development team.

## 📄 License

Proprietary - All rights reserved by Sense Corporation

