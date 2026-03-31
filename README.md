# Sense Corporation

Modern technology services company website - professional, enterprise-grade platform for digital transformation and IT consulting.

## Project Structure

```
sense-corporation/
├── frontend/          # Next.js 15 App Router
├── backend/           # NestJS API
└── docs/              # Documentation
```

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on http://localhost:3000

### Backend
```bash
cd backend
npm install
npm run start:dev
```
Runs on http://localhost:3001

## Technology Stack

### Frontend
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form + Zod
- next-themes (dark/light mode)

### Backend
- NestJS
- TypeScript
- class-validator
- class-transformer
- @nestjs/config

## Development

Both frontend and backend run independently. The frontend proxies API requests to the backend during development.

See individual README files in `frontend/` and `backend/` for more details.

## Domain

Production domain: sense-corporation.com

## Contact

Corporate email: info@sense-corporation.com

