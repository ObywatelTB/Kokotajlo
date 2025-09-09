# Kokotajlo

🚀 **Enterprise AI Agents for France** - Compliant local LLMs for automation/IoT. Bilingual French/English site driving enterprise leads through GDPR-compliant AI pilots.

```bash
# Quick setup for development
npm install && npm run dev:all

# Build for production with SEO
npm run build && npm start
```

## Overview

Kokotajlo is a comprehensive monorepo project for French enterprise AI solutions:

- **Frontend**: Next.js 15+ bilingual landing page (FR primary) with advanced SEO
- **Backend**: FastAPI chatbot proxy with OpenAI GPT-4o-mini integration
- **SEO**: Automated sitemap, schema markup, Google Analytics GA4
- **Compliance**: GDPR/AI Act ready for French enterprise deployments
- **Deployment**: Railway-optimized with environment variable handling

### Key Features

✅ **Advanced SEO**: Sitemap auto-generation, schema markup, French keywords
✅ **Analytics**: GA4 event tracking for lead generation and conversions
✅ **Bilingual**: next-intl French/English with hreflang tags
✅ **GDPR Compliant**: Privacy-first approach with consent management ready
✅ **Enterprise Focus**: AI agents for French industrial automation
✅ **Lead Generation**: Multi-step forms, chatbot integration, pilot requests

## Tech Stack

### Frontend
- **Next.js 15+**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom color system
- **next-intl**: Bilingual internationalization (FR/EN)
- **next-sitemap**: Automated SEO sitemap generation
- **react-ga**: Google Analytics 4 integration

### Backend
- **FastAPI**: High-performance Python web framework
- **Poetry**: Dependency management
- **OpenAI GPT-4o-mini**: AI chatbot integration
- **Pydantic**: Data validation
- **SlowAPI**: Rate limiting

### DevOps & SEO
- **Railway**: Cloud deployment platform
- **Google Analytics 4**: Advanced tracking and analytics
- **Schema.org markup**: Rich snippets for search engines
- **ESLint + Prettier**: Code quality and formatting

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.9+ and Poetry
- Git for version control

### Installation

```bash
# Clone repository
git clone https://github.com/ObywatelTB/Kokotajlo.git
cd kokotajlo

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend && poetry install
```

### Development

```bash
# Full development environment (recommended)
npm run dev:all

# Or run services separately:
npm run dev:frontend  # Frontend on port 4000
npm run dev:backend   # Backend on port 8000
```

### Environment Setup

1. **Frontend Configuration**:
   ```bash
   cp env.local.example .env.local
   ```

   Configure these variables in `.env.local`:
   ```bash
   NEXT_PUBLIC_URL=https://kokotajlo.fr
   NEXT_PUBLIC_GA_MEASUREMENT_ID=GA_MEASUREMENT_ID_STUB
   OPENAI_API_KEY=sk-your-openai-key-here
   ```

2. **Backend Configuration**:
   ```bash
   cd backend && cp env.example .env
   ```

   Configure OpenAI API key in `backend/.env`

### Build & Deploy

```bash
# Build with SEO optimization
npm run build  # Automatically generates sitemap.xml

# Start production server
npm start
```

### SEO & Analytics Setup

The build process automatically:
- ✅ Generates `sitemap.xml` for search engines
- ✅ Creates `robots.txt` for crawler instructions
- ✅ Validates schema markup
- ✅ Initializes Google Analytics tracking

## SEO Implementation

### Automated Features
- **Sitemap**: Auto-generated with `next-sitemap`
- **Robots.txt**: SEO-friendly crawler instructions
- **Schema Markup**: Organization schema for rich snippets
- **Meta Tags**: Optimized French keywords for enterprise AI

### French SEO Keywords
- Primary: "agents IA France", "pilotes IA entreprise"
- Technical: "RAG MCP entreprise", "IA conformes GDPR"
- Long-tail: "solutions IA conformes AI Act France"

### Analytics Integration
- **GA4 Events**: Lead generation tracking
- **Conversion Funnels**: Pilot request optimization
- **User Behavior**: Content engagement analysis
- **GDPR Ready**: Privacy-first implementation

## Project Structure

```
/kokotajlo/
├── src/                          # Next.js frontend
│   ├── app/                      # App router pages
│   │   ├── api/                  # API routes (chat, contact)
│   │   ├── about/                # About page (FR/EN)
│   │   ├── contact/              # Enhanced contact forms
│   │   ├── resources/            # Resources & blog posts
│   │   ├── services/             # Services overview
│   │   ├── layout.tsx            # Root layout with SEO/analytics
│   │   └── page.tsx              # Home page with hero/CTA
│   ├── components/               # Reusable components
│   │   ├── Analytics.tsx         # GA4 tracking component
│   │   ├── Chatbot.tsx           # AI chatbot widget
│   │   ├── Header.tsx            # Navigation with i18n
│   │   ├── Footer.tsx            # Footer with GDPR links
│   │   └── CTAForm.tsx           # Lead generation forms
│   └── messages/                 # i18n translations (FR/EN)
├── backend/                      # FastAPI backend
│   ├── main.py                   # FastAPI application
│   ├── src/messages/             # Backend message handling
│   └── pyproject.toml            # Poetry dependencies
├── docs/                         # Technical documentation
│   ├── seo.md                    # SEO implementation guide
│   ├── analytics.md              # Analytics setup guide
│   ├── railway.md                # Railway deployment
│   ├── styles.md                 # Design system
│   └── README.md                 # Documentation index
├── public/                       # Static assets
│   ├── robots.txt                # SEO crawler instructions
│   ├── sitemap.xml               # Auto-generated sitemap
│   └── [images]                  # Static images
├── env.local.example             # Environment variables template
├── next.config.ts                # Next.js config with next-sitemap
└── package.json                  # Dependencies & build scripts
```

## Development Workflow

### Available Scripts

```bash
# Development
npm run dev:all          # Full dev environment (frontend + backend)
npm run dev              # Frontend only (port 4000)
npm run dev:backend      # Backend only (port 8000)

# Build & SEO
npm run build            # Production build with sitemap generation
npm run postbuild        # Auto-run after build (sitemap creation)
npm start                # Start production server

# Quality
npm run lint             # ESLint code quality checks
```

### Development Tasks (VSCode)

Enhanced VSCode integration for streamlined development:

- `dev:all` - Complete development environment
- `build:production` - Production build with SEO
- `test:seo` - SEO meta tags validation
- `lint:full` - Complete code quality checks
- `deploy:preview` - Local Railway deployment simulation

## API Endpoints

### Frontend API Routes
- `POST /api/chat` - Chatbot message handling
- `POST /api/contact` - Contact form processing

### Backend API (FastAPI)
- `GET /health` - Health check endpoint
- `GET /api/v1/status` - API status information
- `POST /api/v1/chat` - Chat message processing (rate limited)

## Deployment

### 🚀 Simple Railway CLI Deployment (Recommended)

One-command deployment with our bash script for fast, reliable production deploys.

#### Quick Deploy
```bash
# Make script executable and run
chmod +x deploy.sh
./deploy.sh
```

#### What the Script Does
- ✅ **Git Push**: Ensures latest code is on main branch
- ✅ **Project Link**: Connects to Railway project 'kokotajlo'
- ✅ **Environment**: Parses `.env.railway` and sets all variables
- ✅ **Multi-Service**: Deploys frontend (Next.js) + backend (FastAPI)
- ✅ **Health Checks**: Tests live URLs and backend `/health` endpoint
- ✅ **URL Updates**: Syncs live URLs back to environment variables

#### Environment Setup
Create `.env.railway` in project root:
```bash
# Frontend variables
NEXT_PUBLIC_URL=https://kokotajlo.up.railway.app
NEXT_PUBLIC_GA_MEASUREMENT_ID=GA_MEASUREMENT_ID_STUB
NEXT_PUBLIC_DEFAULT_LOCALE=fr
NEXT_PUBLIC_LOCALES=fr,en

# Backend variables
OPENAI_API_KEY=sk-your-openai-key-here
CORS_ORIGINS=https://kokotajlo.up.railway.app
PORT=4001
EMAIL_KEY=stub
LOG_LEVEL=INFO
DEBUG=false
```

#### Live URLs After Deployment
- **Frontend**: `https://kokotajlo.up.railway.app`
- **Backend**: `https://kokotajlo-backend.up.railway.app`
- **Health Check**: `/health` endpoint for backend monitoring

### Manual Railway Setup (Alternative)

1. **Connect Repository**:
   ```bash
   # Railway automatically detects Next.js projects
   # Connect https://github.com/ObywatelTB/Kokotajlo
   ```

2. **Environment Variables** (set in Railway dashboard):
   ```bash
   NEXT_PUBLIC_URL=https://kokotajlo.fr
   NEXT_PUBLIC_GA_MEASUREMENT_ID=YOUR_GA4_ID
   OPENAI_API_KEY=sk-your-openai-key-here
   NEXT_PUBLIC_DEFAULT_LOCALE=fr
   NEXT_PUBLIC_LOCALES=fr,en
   ```

3. **Build Configuration**:
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Node Version: 18+

### SEO-Optimized Build Process

```bash
# Production build with SEO
npm run build    # Generates sitemap.xml automatically
npm start        # Serves optimized production build
```

The build process automatically:
- ✅ Generates SEO-optimized sitemap
- ✅ Creates robots.txt for crawlers
- ✅ Validates schema markup
- ✅ Prepares analytics tracking

### Cost & Performance
- **Estimated Cost**: <$20/month for production demos
- **Performance**: Sub-5min deployment with health checks
- **Monitoring**: Built-in Railway logs, metrics, and curl health tests
- **Services**: 2 (frontend static + backend API)

## Features Overview

### ✅ Core Features (Implemented)
- **Bilingual Site**: next-intl FR/EN with hreflang tags
- **Advanced SEO**: Sitemap, schema markup, French keywords
- **Analytics**: GA4 event tracking for lead generation
- **GDPR Compliance**: Privacy-first approach with consent ready
- **Enterprise Focus**: AI agents for French industrial automation
- **Lead Generation**: Multi-step forms, chatbot integration
- **TypeScript**: Full type safety throughout
- **Performance**: Next.js 15+ with Turbopack optimization

### 🚀 SEO & Analytics Features
- **Automated Sitemap**: Post-build generation with next-sitemap
- **Schema Markup**: Organization schema for Google rich snippets
- **GA4 Integration**: Event tracking for conversions and engagement
- **French Keywords**: Optimized for "agents IA France", "pilotes IA entreprise"
- **Robots.txt**: SEO-friendly crawler instructions
- **Meta Optimization**: Dynamic meta tags with French content

### 🔧 Technical Features
- **Rate Limiting**: SlowAPI protection on backend
- **CORS**: Configured for localhost development
- **ESLint**: Code quality and consistency
- **Poetry**: Python dependency management
- **Railway Ready**: Optimized for cloud deployment

## Usage Examples

### Development Workflow
```bash
# Start full development environment
npm run dev:all

# Test build with SEO validation
npm run build && npm start

# Check SEO implementation
curl https://kokotajlo.fr/sitemap.xml
curl https://kokotajlo.fr/robots.txt
```

### Event Tracking Usage
```javascript
// Track lead generation events
window.trackEvent('Lead', 'Pilot Request', 'AI Agent Pilot');
window.trackEvent('Engagement', 'Chatbot Interaction', 'Product Inquiry');
```

## Documentation

### 📚 Technical Guides
- **[SEO Guide](docs/seo.md)**: Complete SEO implementation details
- **[Analytics Guide](docs/analytics.md)**: GA4 setup and event tracking
- **[Railway Deployment](docs/railway.md)**: Production deployment guide
- **[Design System](docs/styles.md)**: Color system and component guidelines

### 🔍 SEO Resources
- Sitemap: `https://kokotajlo.fr/sitemap.xml`
- Robots: `https://kokotajlo.fr/robots.txt`
- Schema Validation: Google Rich Results Test
- Analytics: Google Analytics 4 dashboard

## Roadmap

### ✅ Completed (Current Release)
- Advanced SEO implementation with sitemap/schema
- Google Analytics 4 integration
- Bilingual French/English content
- Enterprise-focused lead generation
- Railway production deployment ready

### 🔄 In Progress
- Cookie consent management for GDPR
- A/B testing for conversion optimization
- Enhanced chatbot with lead qualification
- Multi-language content expansion

### 🚀 Future Enhancements
- User dashboard for enterprise clients
- Advanced analytics with custom dimensions
- n8n workflow automation integration
- Database integration for lead management

## Contributing

### Development Guidelines
1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/seo-enhancement`
3. **Implement** changes with proper TypeScript types
4. **Test** SEO and analytics functionality
5. **Commit** with descriptive messages
6. **Submit** a pull request

### Code Quality
- Follow ESLint configuration
- Maintain TypeScript strict mode
- Test SEO features after changes
- Update documentation for new features

## License & Credits

**License**: Copyright © 2024 Kokotajlo. All rights reserved.

**Authors**:
- Tobias Bajek (CTO & Co-Founder) - @ObywatelTB
- Mengran Zhao (CEO & Co-Founder)

**Repository**: [https://github.com/ObywatelTB/Kokotajlo](https://github.com/ObywatelTB/Kokotajlo)

---

**🚀 Production Ready**: This implementation is optimized for French enterprise AI market with advanced SEO, analytics, and lead generation capabilities. Deploy to Railway for immediate production use.
