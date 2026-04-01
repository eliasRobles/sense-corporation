# Sense Corporation - Backend

NestJS backend API for Sense Corporation's corporate website featuring contact form processing and Microsoft 365 email integration.

## 🚀 Tech Stack

- **Framework**: NestJS 10.x
- **Language**: TypeScript (strict mode)
- **Email Service**: Microsoft Graph API
  - `@azure/identity` - Azure authentication
  - `@microsoft/microsoft-graph-client` - Graph API client
- **Validation**: class-validator, class-transformer
- **Configuration**: @nestjs/config (environment variables)
- **Security**: CORS enabled, helmet ready
- **Deployment**: Vercel

## 🏃 Getting Started

### Install Dependencies

```bash
npm install
```

### Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Configure your `.env` file:

```env
# Server
PORT=3001
NODE_ENV=development

# Microsoft 365 Email Integration
MICROSOFT_TENANT_ID=your-tenant-id-here
MICROSOFT_CLIENT_ID=your-client-id-here
MICROSOFT_CLIENT_SECRET=your-client-secret-here
MICROSOFT_EMAIL_FROM=info@sense.cr

# Frontend CORS (for local development)
FRONTEND_URL=http://localhost:3000
```

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

## 📁 Project Structure

```
backend/
├── src/
│   ├── modules/
│   │   ├── health/              # Health check endpoint
│   │   │   ├── health.controller.ts
│   │   │   └── health.module.ts
│   │   ├── contact/             # Contact form handling
│   │   │   ├── contact.controller.ts
│   │   │   ├── contact.service.ts
│   │   │   ├── contact.module.ts
│   │   │   └── dto/
│   │   │       └── create-contact.dto.ts
│   │   └── email/               # Email service (Microsoft 365)
│   │       ├── email.service.ts
│   │       └── email.module.ts
│   │
│   ├── config/                  # Configuration
│   │   └── configuration.ts
│   ├── app.module.ts            # Root application module
│   ├── app.controller.ts        # Root API info
│   ├── app.service.ts
│   └── main.ts                  # Application entry point
│
├── test/                        # E2E tests
└── vercel.json                  # Vercel deployment config
```

## 🔌 API Endpoints

### Root
```
GET /api
```
Returns API information and version.

**Response:**
```json
{
  "name": "Sense Corporation API",
  "version": "1.0.0",
  "description": "Backend API for Sense Corporation website"
}
```

### Health Check
```
GET /api/health
```
Health status of the API.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Contact Form
```
POST /api/contact
```
Submit a contact form inquiry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "phone": "+1234567890",
  "service": "Custom Software Development",
  "message": "We're interested in building a new platform..."
}
```

**Validation:**
- `name`: 2-100 characters
- `email`: Valid email format
- `company`: 2-100 characters
- `phone`: 10+ characters
- `service`: Non-empty string
- `message`: 10-2000 characters

**Success Response (200):**
```json
{
  "message": "Contact form submitted successfully",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Corp"
  }
}
```

**Error Response (400):**
```json
{
  "statusCode": 400,
  "message": ["email must be a valid email"],
  "error": "Bad Request"
}
```

## 📧 Email Service

### Microsoft 365 Integration

The email service uses Microsoft Graph API to send emails through Microsoft 365.

**Setup Steps:**

1. **Azure AD App Registration**
   - Go to [Azure Portal](https://portal.azure.com)
   - Register a new application
   - Add API permissions: `Mail.Send`
   - Create a client secret
   - Note: Tenant ID, Client ID, Client Secret

2. **Environment Variables**
   ```env
   MICROSOFT_TENANT_ID=your-tenant-id
   MICROSOFT_CLIENT_ID=your-app-client-id
   MICROSOFT_CLIENT_SECRET=your-client-secret
   MICROSOFT_EMAIL_FROM=info@sense.cr
   ```

3. **Email Templates**

   The service sends two HTML emails:
   - **Company Notification**: Sent to `info@sense.cr` with inquiry details
   - **User Confirmation**: Sent to the user confirming receipt

**Features:**
- Professional HTML email templates with inline CSS
- Responsive design (mobile-friendly)
- Brand colors (orange accent)
- Error handling and logging
- Fallback to console logging if credentials not configured

### Email Template Structure

**Company Email:**
- Contact details (name, email, company, phone)
- Selected service
- Full message content
- Call-to-action buttons

**Confirmation Email:**
- Personalized greeting
- Thank you message
- 24-hour response time commitment
- Next steps information
- Contact information

## 🔒 Security Features

### CORS Configuration
```typescript
app.enableCors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
});
```

### Validation Pipes
Global validation enabled with detailed error messages:
```typescript
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
}));
```

### Environment Validation
Uses `@nestjs/config` for type-safe environment variables.

## 🛠️ Scripts

```bash
npm run start         # Start in production mode
npm run start:dev     # Start with watch mode (development)
npm run start:debug   # Start in debug mode
npm run build         # Build for production
npm run format        # Format code with Prettier
npm run lint          # Run ESLint
npm run lint:fix      # Fix linting issues
npm run test          # Run unit tests
npm run test:watch    # Run tests in watch mode
npm run test:cov      # Run tests with coverage
npm run test:e2e      # Run end-to-end tests
```

## 🌐 Deployment

### Vercel Configuration

The project includes `vercel.json` for seamless deployment:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/main.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/main.js"
    }
  ]
}
```

**Deploy Command:**
```bash
npm run build
```

### Environment Variables on Vercel

Add these in Vercel dashboard:
- `MICROSOFT_TENANT_ID`
- `MICROSOFT_CLIENT_ID`
- `MICROSOFT_CLIENT_SECRET`
- `MICROSOFT_EMAIL_FROM`
- `FRONTEND_URL` (production frontend URL)

## 📝 Development Notes

### Adding New Endpoints

1. Create module: `nest g module feature`
2. Create controller: `nest g controller feature`
3. Create service: `nest g service feature`
4. Create DTOs in `dto/` folder
5. Import module in `app.module.ts`

### Email Service Development

Without Microsoft credentials, emails will log to console:
```
[EmailService] Would send email to: user@example.com
[EmailService] Subject: Confirmation...
```

This allows frontend testing without email setup.

### Debugging

Run in debug mode:
```bash
npm run start:debug
```

Attach debugger to port 9229 in VS Code.

## 🐛 Common Issues

**Port already in use:**
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

**Email not sending:**
- Verify Microsoft 365 credentials in `.env`
- Check Azure AD app permissions
- Ensure `Mail.Send` permission is granted
- Review application logs for Graph API errors

**CORS errors:**
- Verify `FRONTEND_URL` matches your frontend URL
- Check that frontend is using correct `NEXT_PUBLIC_API_URL`

## 📚 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Microsoft Graph API](https://docs.microsoft.com/graph)
- [Azure AD App Registration](https://docs.microsoft.com/azure/active-directory)

## 📞 Support

For issues or questions, contact the development team at info@sense.cr
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run E2E tests

## Notes

- API prefix: `/api`
- Default port: `3001`
- CORS configured for `http://localhost:3000`
- All DTOs validated automatically
