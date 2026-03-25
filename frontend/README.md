# Sense Corporation - Frontend

Next.js 15 frontend application for Sense Corporation's corporate website.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Themes**: next-themes (dark/light mode)

## Getting Started

### Install Dependencies

```bash
npm install
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

## Project Structure

```
frontend/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Homepage
│   ├── contact/         # Contact page
│   ├── privacy-policy/  # Privacy policy page
│   └── terms/           # Terms of service page
├── components/          # Reusable UI components
│   ├── navbar.tsx       # Main navigation with theme toggle
│   ├── footer.tsx       # Site footer
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── sections/            # Page sections (Hero, Services, etc.)
├── config/              # Configuration files
├── content/             # Content and copy
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── public/              # Static assets
```

## Theme System

All colors are defined through CSS variables in `app/globals.css` for easy theming:

- `--primary`: Orange accent color
- `--secondary`: Deep slate
- `--tertiary`: Muted blue-gray
- `--background`, `--surface`, `--foreground`
- `--text-primary`, `--text-secondary`, `--text-muted`
- `--border`, `--accent`, status colors, etc.

Both light and dark themes are fully supported via the theme toggle in the navbar.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Notes

- TypeScript strict mode enabled
- All color values use theme tokens (no hardcoded colors)
- Responsive design with mobile-first approach
- Accessibility-conscious component structure
