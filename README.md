# Kokotajlo

Building enterprise AI agents for France. Site showcases compliant local LLMs for automation/IoT. French UI for market fit.

## Overview

Kokotajlo is a monorepo project consisting of:
- **Frontend**: Next.js (TypeScript) landing page targeting French businesses
- **Backend**: FastAPI (Python) chatbot proxy service
- **Documentation**: English technical documentation (Railway, n8n, styles details)

## Tech Stack

- **Frontend**: Next.js 15+, TypeScript, Tailwind CSS, ESLint, next-intl
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
cd src && npm install

# Install backend dependencies
cd backend && pip install -r requirements.txt
```

### Development

```bash
# Frontend (port 3000)
cd src && npm run dev

# Backend (port 8000)
cd backend && uvicorn main:app --reload
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
│   ├── components/               # Reusable components
│   └── messages/                 # i18n messages
├── backend/                      # FastAPI backend
│   ├── main.py                   # FastAPI application
│   └── pyproject.toml            # Poetry dependencies
├── docs/                         # English documentation
│   ├── README.md                 # Main docs
│   ├── styles.md                 # Design system
│   ├── railway.md                # Deployment guide
│   └── n8n.md                    # Workflow integration
├── .vscode/                      # VSCode configuration
│   ├── tasks.json                # Development tasks
│   ├── launch.json               # Debug configurations
│   └── settings.json             # Workspace settings
└── README.md                     # This file
```

## Development Tasks

Use VSCode tasks for streamlined development:

- `dev:frontend` - Start Next.js development server
- `dev:backend` - Start FastAPI development server
- `lint:frontend` - Run ESLint on frontend code
- `lint:backend` - Format Python code with Black
- `build:frontend` - Build Next.js for production
- `deploy:preview` - Simulate Railway deployment
- `test:seo` - Check SEO meta tags

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
- ✅ UI: French content in app/. Hero/About/Services/CTA: French pitch for compliant AI agents; run dev:frontend to view.
- ✅ Chatbot: Widget + /chat endpoint for witty project Q&A; CTA form for leads.
- ✅ Backend: FastAPI with OpenAI GPT-4o-mini integration, Kokotajlo system prompt, Pydantic models, CORS for localhost:4000, rate limiting.

## Usage

Edit French content in app/. Test chatbot proxy. SEO: French keywords like "agents IA entreprise GDPR".

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
