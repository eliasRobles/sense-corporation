# Sense Corporation - Backend

NestJS backend API for Sense Corporation's corporate website.

## Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript (strict mode)
- **Validation**: class-validator, class-transformer
- **Configuration**: @nestjs/config

## Getting Started

### Install Dependencies

```bash
npm install
```

### Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` with your configuration.

### Development Server

```bash
npm run start:dev
```

API runs on [http://localhost:3001/api](http://localhost:3001/api)

### Build for Production

```bash
npm run build
npm run start:prod
```

## Project Structure

```
backend/
├── src/
│   ├── modules/
│   │   ├── health/         # Health check endpoint
│   │   ├── contact/        # Contact form handling
│   │   └── email/          # Email service (Microsoft 365 ready)
│   ├── config/             # Configuration files
│   ├── app.module.ts       # Root application module
│   ├── app.controller.ts   # Root API info endpoint
│   ├── app.service.ts
│   └── main.ts             # Application entry point
└── test/                   # E2E tests
```

## API Endpoints

### Root
- `GET /api` - API information

### Health
- `GET /api/health` - Health check

### Contact
- `POST /api/contact` - Submit contact form
  - Body: `{ name, email, company, message }`

## Features

- Global validation with class-validator
- CORS enabled for frontend development
- Modular architecture
- TypeScript strict mode
- Environment-based configuration
- Email service ready for Microsoft 365 integration

## Email Integration (Future)

The email service is structured to support Microsoft 365 integration. When ready, add these credentials to `.env`:

```
MICROSOFT_TENANT_ID=your-tenant-id
MICROSOFT_CLIENT_ID=your-client-id
MICROSOFT_CLIENT_SECRET=your-client-secret
MICROSOFT_EMAIL_FROM=info@sense-corporation.com
```

## Scripts

- `npm run start` - Start in production mode
- `npm run start:dev` - Start in watch mode
- `npm run start:debug` - Start in debug mode
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run E2E tests

## Notes

- API prefix: `/api`
- Default port: `3001`
- CORS configured for `http://localhost:3000`
- All DTOs validated automatically
