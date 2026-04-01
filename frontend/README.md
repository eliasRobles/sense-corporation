# Sense Corporation - Frontend

Next.js 15 frontend application for Sense Corporation's corporate website with modern animations, dark/light themes, and comprehensive form handling.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: v19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with CSS Variables
- **Animations**: 
  - Framer Motion (scroll-triggered, page transitions)
  - Custom Canvas animations (particles, floating code)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React + Custom SVG
- **Themes**: next-themes (persistent dark/light mode)
- **Deployment**: Vercel

## 🏃 Getting Started

### Install Dependencies

```bash
npm install
```

### Environment Setup

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

For production:
```env
NEXT_PUBLIC_API_URL=https://your-api.vercel.app/api
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
frontend/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with theme provider
│   ├── page.tsx                  # Homepage (8 sections)
│   ├── contact/
│   │   └── page.tsx              # Contact form page
│   ├── privacy/
│   │   └── page.tsx              # Privacy policy
│   ├── terms/
│   │   └── page.tsx              # Terms of service
│   ├── cookies/
│   │   └── page.tsx              # Cookie policy
│   └── globals.css               # Global styles + CSS variables
│
├── components/                   # Reusable UI components
│   ├── navbar.tsx                # Navigation with active section tracking
│   ├── footer.tsx                # Footer with contact info, social media
│   ├── contact-form.tsx          # Contact form with validation
│   ├── theme-provider.tsx        # Theme context provider
│   ├── theme-toggle.tsx          # Dark/light mode toggle
│   └── ui/                       # Design system components
│       ├── animations.tsx        # Framer Motion wrappers
│       ├── button.tsx
│       ├── card.tsx              # Card with hover effects
│       ├── input.tsx
│       ├── floating-particles.tsx # Canvas particle animation
│       ├── floating-code.tsx     # Animated code snippets
│       ├── animated-grid.tsx     # Pulsating dot grid
│       └── ...                   # 15+ components total
│
├── sections/                     # Page sections
│   ├── hero-section.tsx          # Hero with tech animations
│   ├── about-section.tsx
│   ├── services-section.tsx
│   ├── how-we-work-section.tsx
│   ├── technologies-section.tsx
│   ├── why-sense-section.tsx
│   ├── engagement-models-section.tsx
│   └── contact-cta-section.tsx
│
├── hooks/                        # Custom React hooks
│   └── use-scroll.ts             # Scroll detection + active section
│
├── lib/                          # Utilities
│   └── utils.ts                  # cn() for className merging
│
└── public/                       # Static assets
```

## 🎨 Design System

### Theme Architecture

All colors are defined as CSS variables in `app/globals.css`:

**Light Mode:**
```css
--primary: 24 96% 49%        /* Orange #ea580c */
--background: 0 0% 100%       /* White */
--foreground: 222 47% 11%     /* Dark text */
--surface: 220 14% 96%        /* Light surface */
```

**Dark Mode:**
```css
--primary: 24 96% 49%        /* Orange (same) */
--background: 222 47% 11%     /* Dark background */
--foreground: 210 40% 98%     /* Light text */
--surface: 217 33% 17%        /* Dark surface */
```

### Component Variants

Components use `class-variance-authority` (CVA) for variant management:
- Buttons: default, outline, ghost, destructive
- Cards: default, elevated, outline, ghost
- Typography: responsive text scaling
- Spacing: consistent padding/margin scale

### Animation System

**Framer Motion:**
- `SlideUp`: Entrance animations with stagger
- `FadeIn`: Opacity transitions
- `ScrollReveal`: Trigger on viewport intersection

**Canvas Animations:**
- `FloatingParticles`: 60 connected particles with physics
- `FloatingCode`: Code snippets with parallax
- `AnimatedGrid`: Pulsating dot matrix

## 🎯 Key Features

### Navigation
- **Active Section Tracking**: Highlights current section while scrolling
- **Smooth Scrolling**: Anchor links with smooth behavior
- **Sticky Header**: Backdrop blur effect on scroll
- **Mobile Responsive**: Hamburger menu (when implemented)

### Contact Form
- **Validation**: Zod schema with custom error messages
- **API Integration**: Submits to NestJS backend
- **Success/Error States**: Visual feedback
- **Required Fields**: Name, email, company, phone, service, message

### Card Interactions
- **Homepage**: Subtle scale on hover (1.02x)
- **Contact/Legal Pages**: Shadow-only hover for professionalism
- **Shine Effect**: Gradient shimmer on hover (homepage only)

### Legal Pages
- **Privacy Policy**: Costa Rica Law 8968 compliant
- **Terms of Service**: Detailed service agreements
- **Cookie Policy**: Tracking transparency

## 🔧 Scripts

```bash
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues
```

## 📱 Responsive Design

Breakpoints (Tailwind defaults):
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

All sections are mobile-first with progressive enhancement.

## 🎭 Animation Performance

- Canvas animations use `requestAnimationFrame` for 60fps
- Framer Motion uses hardware acceleration (transform, opacity)
- Images lazy-loaded with Next.js Image component
- Code-splitting via Next.js App Router

## 🌐 SEO & Metadata

Each page includes:
- Dynamic `<title>` tags
- Meta descriptions
- OpenGraph tags (ready for configuration)

## 📝 Notes

- TypeScript strict mode enforced
- No hardcoded colors (all use theme tokens)
- Accessibility: semantic HTML, ARIA labels
- Forms handle loading/error states gracefully
- Dark mode persists via localStorage

## 🔗 External Dependencies

Key packages:
- `next`: 15.x
- `react`: 19.x
- `framer-motion`: Animations
- `react-hook-form`: Form management
- `zod`: Schema validation
- `lucide-react`: Icon library
- `next-themes`: Theme switching
- `tailwindcss`: Utility-first CSS
- `class-variance-authority`: Variant management

## 🐛 Common Issues

**Theme flashing on load**: 
- Ensure `suppressHydrationWarning` on `<html>` tag
- Theme provider wraps entire app

**Canvas animations not showing**:
- Check if `FloatingParticles`/`FloatingCode` are client components (`"use client"`)
- Verify mounted state to prevent hydration mismatch

**Form submission errors**:
- Verify `NEXT_PUBLIC_API_URL` in `.env.local`
- Check backend is running on correct port
- Inspect network tab for CORS issues
