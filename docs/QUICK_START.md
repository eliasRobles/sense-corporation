# Quick Start Guide - Phase 1

## Current Status: Both Apps Running ✓

### Backend
**Status**: Running on http://localhost:3001/api  
**Process ID**: Check terminal for current process

### Frontend  
**Status**: Running on http://localhost:3000  
**Process ID**: Check terminal for current process

---

## Starting from Scratch

If you need to restart the applications:

### 1. Backend API

```bash
cd backend
npm install          # Only needed first time
npm run start:dev
```

Expected output:
```
Sense Corporation API running on http://localhost:3001/api
```

### 2. Frontend Website

Open a new terminal:

```bash
cd frontend
npm install          # Only needed first time
npm run dev
```

Expected output:
```
▲ Next.js 16.2.1
- Local: http://localhost:3000
✓ Ready in 674ms
```

---

## Quick Tests

### Test Backend
```bash
# API Info
curl http://localhost:3001/api

# Health Check
curl http://localhost:3001/api/health

# Contact Form (POST)
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "message": "This is a test message"
  }'
```

### Test Frontend
Open in browser:
- Homepage: http://localhost:3000
- Contact: http://localhost:3000/contact
- Privacy: http://localhost:3000/privacy-policy
- Terms: http://localhost:3000/terms

Test dark mode: Click the sun/moon icon in the top-right navbar.

---

## Troubleshooting

### Port Already in Use

**Backend (3001)**:
```bash
lsof -ti:3001 | xargs kill -9
```

**Frontend (3000)**:
```bash
lsof -ti:3000 | xargs kill -9
```

### Clean Install

**Backend**:
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

**Frontend**:
```bash
cd frontend
rm -rf node_modules package-lock.json .next
npm install
```

---

## What's Working

✓ Backend API with health and contact endpoints  
✓ Frontend with dark/light mode toggle  
✓ Theme system with CSS variables  
✓ All routes scaffolded  
✓ CORS configured  
✓ TypeScript strict mode  
✓ Validation enabled  

---

## Ready for Phase 2

Phase 1 is complete and commit-ready. Both applications are running successfully with no errors.
