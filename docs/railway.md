# Railway Deployment Guide

Deploy: Railway dashboard > New Project > GitHub (ObywatelTB/Kokotajlo). Services: Next.js (build: npm run build, start: npm start), FastAPI (requirements.txt, start: uvicorn). Env: LLM keys. Custom domain: .fr for SEO.

## Overview

Railway provides seamless deployment for our monorepo architecture, automatically handling both frontend and backend services. This guide covers deployment, environment management, and production optimization for French enterprise clients.

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
