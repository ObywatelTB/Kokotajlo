# Kokotajlo Documentation

Detailed docs for AI Agents FR. Subdirs: n8n (future workflows), railway (deploy guide), styles (Tailwind config, fonts: Inter, colors: Blue #1E3A8A for trust, Green #10B981 for growth—French enterprise vibe).


```bash
files-to-prompt  . -o llm-data/concat.txt -e .py -e .tsx -e .ts

files-to-prompt  . -o llm-data/concat.txt -e .py -e .tsx -e .ts -e .css
```

## Overview

This documentation covers the technical implementation of Kokotajlo, a French enterprise AI agents platform. Our focus is on GDPR/AI Act compliance while delivering powerful automation solutions for French businesses.

## Business Context

### Target Market
- French enterprises requiring AI automation
- Companies needing GDPR-compliant AI solutions
- Businesses seeking IoT integration with AI agents
- Organizations requiring custom pilots before full deployment

### Value Proposition
- **Compliance**: Full GDPR/AI Act compliance
- **Localization**: French language and cultural fit
- **Enterprise-ready**: Scalable for large French firms
- **Partnership model**: Equity shares for custom pilot runway

## Architecture

### Frontend (Next.js)
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Internationalization**: next-intl for French/English support
- **SEO**: Optimized for French keywords ("agents IA entreprise GDPR")

### Backend (FastAPI)
- **Framework**: FastAPI with Poetry dependency management
- **AI Integration**: OpenAI API with local LLM fallbacks
- **Rate Limiting**: SlowAPI for enterprise-grade protection
- **CORS**: Configured for frontend-backend communication

### Deployment (Railway)
- **Platform**: Railway for seamless deployment
- **CI/CD**: GitHub integration for automatic deployments
- **Environment**: Separate staging/production environments
- **Domain**: Custom .fr domain for SEO benefits

## Development Workflow

### Local Development
1. Clone repository: `git clone https://github.com/ObywatelTB/Kokotajlo.git`
2. Install dependencies: `cd src && npm install`
3. Start development servers
4. Test integrations and deploy to staging

### Production Deployment
1. Push changes to main branch
2. Railway automatically builds and deploys
3. Monitor performance and user feedback
4. Iterate based on enterprise pilot results

## Key Features

### AI Agent Capabilities
- **RAG Integration**: Retrieval-Augmented Generation for accurate responses
- **MCP Support**: Model Context Protocol for multi-model orchestration
- **Local LLMs**: Support for French-hosted AI models
- **Custom Training**: Enterprise-specific model fine-tuning

### Compliance Features
- **GDPR Compliance**: Data protection by design
- **AI Act Ready**: Prepared for EU AI Act requirements
- **Data Sovereignty**: French data hosting options
- **Audit Trail**: Complete logging for compliance verification

### Enterprise Features
- **Multi-tenancy**: Separate instances for different clients
- **Role-based Access**: Admin, manager, and user roles
- **API Integration**: RESTful APIs for system integration
- **Monitoring**: Real-time performance and usage analytics

## Documentation Structure

- [**styles.md**](./styles.md) - Design system and Tailwind configuration
- [**railway.md**](./railway.md) - Deployment and infrastructure guide
- [**n8n.md**](./n8n.md) - Workflow automation integration

## Contributing

When adding new features:
1. Update relevant documentation
2. Include French translations for user-facing content
3. Test compliance implications
4. Update deployment procedures if needed

## Support

For enterprise inquiries and custom pilot discussions, contact the development team.
