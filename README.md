# Kokotajlo

AI Agents FR Landing - French site for compliant enterprise AI.

## Overview

Kokotajlo is a monorepo project consisting of:
- **Frontend**: Next.js (TypeScript) landing page targeting French businesses
- **Backend**: FastAPI (Python) chatbot proxy service
- **Documentation**: English technical documentation (Railway, n8n, styles details)

## Tech Stack

- **Frontend**: Next.js 15+, TypeScript, Tailwind CSS, ESLint
- **Backend**: FastAPI, Python 3.9+, Poetry, OpenAI API
- **Deployment**: Railway (recommended)
- **Version Control**: Git, GitHub

## Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- Poetry (Python dependency manager)

### Installation

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
poetry install
```

### Development

```bash
# Frontend (port 3000)
npm run dev

# Backend (port 8000)
cd backend && poetry run uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Environment Setup

1. Copy environment files:
   ```bash
   cp env.local.example .env.local  # Frontend
   cp backend/env.example backend/.env  # Backend
   ```

2. Configure API keys in respective `.env` files:
   - OpenAI API key
   - Other service credentials

## Project Structure

```
/kokotajlo/
├── src/                          # Next.js frontend
│   ├── app/                      # App router pages
│   └── components/               # Reusable components
├── backend/                      # FastAPI backend
│   ├── main.py                   # FastAPI application
│   └── pyproject.toml            # Poetry dependencies
├── docs/                         # English documentation
├── .vscode/                      # VSCode configuration
│   ├── tasks.json                # Development tasks
│   └── launch.json               # Debug configurations
└── README.md                     # This file
```

## Development Tasks

Use VSCode tasks for streamlined development:

- `dev:frontend` - Start Next.js development server
- `dev:backend` - Start FastAPI development server
- `lint:frontend` - Run ESLint on frontend code
- `lint:backend` - Format Python code with Black
- `build:frontend` - Build Next.js for production

## API Endpoints

- `GET /health` - Health check
- `GET /api/v1/status` - API status
- `POST /api/v1/chat` - Chat endpoint (rate limited)

## Deployment

### Railway (Recommended)

1. Connect GitHub repository to Railway
2. Configure environment variables
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Frontend
npm run build
npm start

# Backend
cd backend && poetry run uvicorn main:app --host 0.0.0.0 --port $PORT
```

## Features

- ✅ French primary language with English docs
- ✅ Bilingual toggle preparation (next-intl ready)
- ✅ Rate limiting with SlowAPI
- ✅ CORS configuration
- ✅ SEO optimized metadata
- ✅ TypeScript throughout
- ✅ ESLint + Prettier configuration
- ✅ Poetry dependency management

## Roadmap

- [ ] Complete landing page content (French)
- [ ] OpenAI integration for chatbot
- [ ] User authentication
- [ ] Dashboard for enterprise clients
- [ ] n8n workflow integration
- [ ] Database integration
- [ ] Production deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Test thoroughly
5. Submit a pull request

## License

Copyright © 2024 Kokotajlo. All rights reserved.

---

**Note**: This is a scaffold project. Frontend content and full AI integration to be implemented.
