# Railway Deployment Guide

Deploy: `./deploy.sh` (automated) or Railway dashboard > New Project > GitHub (ObywatelTB/Kokotajlo). Services: Next.js frontend + FastAPI backend. Env: LLM keys from .env.railway. Custom domain: .fr for SEO.

## Overview

Railway provides seamless deployment for our monorepo architecture, automatically handling both frontend and backend services. This guide covers deployment, environment management, and production optimization for French enterprise clients.

## 🚀 Simple CLI Deployment (Recommended)

For automated, reliable deployments, use our simple bash script that handles the entire Railway deployment process.

### Quick Start

```bash
# Prerequisites: Railway CLI installed and logged in
railway login

# Make executable and deploy
chmod +x deploy.sh
./deploy.sh
```

### Script Features

- **Git Push**: Automatic push to main branch to ensure latest code
- **Project Link**: Connects to Railway project 'kokotajlo'
- **Environment Parsing**: Reads `.env.railway` and sets all variables via CLI
- **Multi-Service Deployment**: Deploys frontend (Next.js) and backend (FastAPI) services
- **Health Checks**: Tests live endpoints with curl commands
- **URL Updates**: Syncs live URLs back to environment variables
- **Error Handling**: Bash `set -e` for immediate failure on errors

### Environment Configuration

Create `.env.railway` in the project root:

```bash
# Frontend Variables
NEXT_PUBLIC_URL=https://kokotajlo.up.railway.app
NEXT_PUBLIC_GA_MEASUREMENT_ID=YOUR_GA4_ID
NEXT_PUBLIC_DEFAULT_LOCALE=fr
NEXT_PUBLIC_LOCALES=fr,en
NEXT_PUBLIC_API_URL=https://kokotajlo-backend.up.railway.app

# Backend Variables
OPENAI_API_KEY=sk-your-openai-key-here
CORS_ORIGINS=https://kokotajlo.up.railway.app http://localhost:4000
PORT=4001
EMAIL_KEY=stub
MAILJET_API_KEY=your-mailjet-key
MAILJET_SECRET_KEY=your-mailjet-secret
LOG_LEVEL=INFO
DEBUG=false
```

### Service Architecture

The script creates two Railway services:

#### Frontend Service (Next.js)
- **Build Command**: `npm ci && npm run build`
- **Start Command**: `npm start`
- **Port**: Auto-assigned by Railway
- **Health Check**: `/` (root path)

#### Backend Service (FastAPI)
- **Build Command**: `cd backend && poetry install --no-dev`
- **Start Command**: `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`
- **Port**: Auto-assigned by Railway
- **Health Check**: `/health` endpoint

### Deployment Flow

1. **Git Push**: Ensures latest code is on main branch
2. **Project Link**: `railway link --project kokotajlo`
3. **Environment Setup**: Parse `.env.railway` and `railway variables set` for each
4. **Service Deployment**: `railway up --service frontend` then backend
5. **URL Retrieval**: `railway url --service frontend/backend`
6. **Health Testing**: `curl -f` on frontend and backend/health
7. **URL Update**: Update `NEXT_PUBLIC_URL` if changed and redeploy

### Monitoring & Troubleshooting

After deployment, monitor your services:

```bash
# View deployment logs
railway logs --service frontend
railway logs --service backend

# Check service URLs
railway url --service frontend
railway url --service backend

# Test endpoints manually
curl -f https://kokotajlo.up.railway.app
curl -f https://kokotajlo-backend.up.railway.app/health

# Check environment variables
railway variables
```

### Cost Optimization

- **Hobby Plan**: Free tier suitable for development ($0/month)
- **Pro Plan**: Production-ready with scaling ($10/service/month)
- **Estimated Total**: <$20/month for full production deployment
- **Auto-scaling**: Handles traffic spikes automatically

## Manual Deployment (Alternative)

## Prerequisites

- GitHub repository: `https://github.com/ObywatelTB/Kokotajlo`
- Railway account with billing enabled
- Domain registrar for `.fr` domain (recommended)

## Initial Setup

### 1. Connect Repository

1. Log into [Railway Dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Search for `ObywatelTB/Kokotajlo`
5. Click **"Connect"**

### 2. Service Configuration

Railway will automatically detect our monorepo structure:

#### Frontend Service (Next.js)
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Root Directory**: `./src`
- **Port**: 3000 (automatically detected)

#### Backend Service (FastAPI)
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- **Root Directory**: `./backend`
- **Port**: 8000 (automatically assigned by Railway)

## Environment Variables

### Required Variables

Set these in Railway dashboard under **"Variables"**:

#### Frontend (.env.local)
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.fr
NEXT_PUBLIC_API_URL=https://your-backend-service.railway.app
NEXTAUTH_SECRET=your-nextauth-secret-here
NEXTAUTH_URL=https://your-domain.fr
NEXT_PUBLIC_DEFAULT_LOCALE=fr
NEXT_PUBLIC_LOCALES=fr,en
```

#### Backend (.env)
```bash
OPENAI_API_KEY=sk-your-openai-api-key
OPENAI_MODEL=gpt-4
API_HOST=0.0.0.0
API_PORT=$PORT
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW=60
CORS_ORIGINS=https://your-domain.fr
LOG_LEVEL=INFO
SECRET_KEY=your-production-secret-key
DEBUG=False
```

### LLM Configuration

For French enterprise compliance, configure these LLM options:

```bash
# Primary LLM (OpenAI)
OPENAI_API_KEY=sk-your-key
OPENAI_MODEL=gpt-4-turbo

# Alternative French-hosted LLMs (optional)
MISTRAL_API_KEY=your-mistral-key
ANTHROPIC_API_KEY=your-anthropic-key

# Local LLM endpoints (for enterprise deployments)
LOCAL_LLM_ENDPOINT=https://your-local-llm.com
LOCAL_LLM_MODEL=mistral-7b-instruct
```

## Custom Domain Setup

### 1. Purchase Domain
- Register a `.fr` domain (recommended for French SEO)
- Popular registrars: OVH, Gandi, Namecheap

### 2. Configure DNS
1. In Railway dashboard, go to **"Settings"** > **"Domains"**
2. Add your custom domain: `kokotajlo.fr`
3. Copy the CNAME record provided by Railway
4. Add CNAME record in your domain registrar:
   ```
   Type: CNAME
   Name: @
   Value: [Railway-provided-value]
   ```

### 3. SSL Certificate
- Railway automatically provisions SSL certificates
- HTTPS enabled by default
- Certificate renewal handled automatically

## Database Configuration

### PostgreSQL Setup
1. Add PostgreSQL database in Railway dashboard
2. Connect to your backend service
3. Set environment variables:

```bash
DATABASE_URL=postgresql://user:password@containers-us-west-1.railway.app:5432/railway
DB_HOST=containers-us-west-1.railway.app
DB_PORT=5432
DB_NAME=railway
DB_USER=postgres
DB_PASSWORD=your-db-password
```

### Redis (Optional)
For session storage and caching:

```bash
REDIS_URL=redis://default:password@containers-us-west-1.railway.app:6379
```

## Monitoring & Analytics

### Railway Built-in Monitoring
- **Logs**: Real-time application logs
- **Metrics**: CPU, memory, and network usage
- **Deployments**: Deployment history and rollback capability

### Third-party Monitoring
```bash
# Sentry for error tracking
SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id

# Analytics (Plausible recommended for privacy)
PLAUSIBLE_DOMAIN=kokotajlo.fr
PLAUSIBLE_API_KEY=your-plausible-key
```

## Scaling Configuration

### Horizontal Scaling
1. Upgrade to Pro plan for multiple instances
2. Configure load balancer settings
3. Set up health checks

### Resource Allocation
- **Frontend**: 1GB RAM, 1 CPU (sufficient for most cases)
- **Backend**: 2GB RAM, 2 CPUs (for AI processing)
- **Database**: 4GB RAM, 2 CPUs (for enterprise data)

## Backup Strategy

### Automatic Backups
- Railway provides automatic daily backups
- Configure backup retention period
- Test restoration procedures regularly

### Manual Backups
```bash
# Export database
pg_dump $DATABASE_URL > backup.sql

# Export application data
# Implement custom backup scripts for user data
```

## Security Considerations

### Environment Security
- Rotate API keys regularly
- Use Railway's secret management
- Never commit secrets to repository

### Network Security
- Railway provides automatic DDoS protection
- Configure CORS properly for production
- Set up proper firewall rules if needed

### Compliance
- Enable audit logging for GDPR compliance
- Configure data retention policies
- Implement proper data encryption at rest

## Deployment Workflow

### Development Workflow
1. **Development**: Push to `develop` branch
2. **Staging**: Merge to `staging` branch (auto-deploy to staging)
3. **Production**: Merge to `main` branch (auto-deploy to production)

### Rollback Procedure
1. Go to Railway dashboard
2. Select the service
3. Go to **"Deployments"** tab
4. Click **"Rollback"** on previous deployment
5. Monitor application recovery

## Performance Optimization

### Frontend Optimization
- Enable Railway's build caching
- Configure proper cache headers
- Use CDN for static assets (optional)

### Backend Optimization
- Configure Gunicorn for production
- Enable connection pooling
- Implement proper caching strategies

## Troubleshooting

### Common Issues

#### Build Failures
- Check build logs in Railway dashboard
- Verify all dependencies are in `requirements.txt`
- Ensure Python version compatibility

#### Runtime Errors
- Check application logs
- Verify environment variables are set correctly
- Test API endpoints using Railway's built-in tools

#### Performance Issues
- Monitor resource usage in dashboard
- Check database connection pooling
- Optimize queries and caching

## Cost Optimization

### Railway Pricing
- **Hobby Plan**: $5/month (suitable for development)
- **Pro Plan**: $10/month per service (recommended for production)
- **Team Plan**: Custom pricing for enterprise

### Cost-saving Tips
- Use Railway's free tier for development
- Scale down resources during off-peak hours
- Optimize database usage and storage

## Enterprise Considerations

### Multi-environment Setup
- **Development**: Hobby plan, shared resources
- **Staging**: Pro plan, separate resources
- **Production**: Pro/Team plan, dedicated resources

### Compliance & Security
- SOC 2 Type II compliance
- GDPR compliance for EU data
- Enterprise-grade security features

This deployment setup ensures Kokotajlo can scale from MVP to enterprise-grade service while maintaining French market compliance and performance requirements.
