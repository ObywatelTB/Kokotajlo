# Subpages Documentation

## Overview

The Kokotajlo landing page includes a complete navigation structure with subpages for comprehensive user experience. All subpages are built with French content targeting French enterprises interested in compliant AI solutions.

## Page Structure

### Shared Layout
All pages use the shared layout (`src/app/layout.tsx`) which includes:
- **Header**: Navigation with active state highlighting
- **Footer**: French links, GDPR compliance notice, LinkedIn social link
- **SEO Metadata**: Optimized French keywords for enterprise AI
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Navigation Flow
```
Home (/) → About (/about) → Services (/services) → Resources (/resources) → Contact (/contact)
```

## Subpages Details

### 1. About Page (`/about`)

**Purpose**: Introduce the Kokotajlo team and mission
**Target**: French enterprises seeking trustworthy AI partners

**Content Sections**:
- Hero section with mission statement
- Team profiles (Tobias Bajek & Mengran Zhao)
- Mission and values
- Call-to-action for services

**SEO Keywords**:
- `à propos Kokotajlo`
- `agents IA France`
- `équipe IA`
- `GDPR conformité`
- `pilotes IA entreprise`

### 2. Services Page (`/services`)

**Purpose**: Showcase AI services and pilot offerings
**Target**: Enterprise decision-makers exploring AI solutions

**Content Sections**:
- Hero section with value proposition
- Services grid (6 key services)
- Process workflow (4-step methodology)
- Call-to-action for contact

**Services Covered**:
1. **RAG Implementation**: Document indexing and semantic search
2. **MCP Integration**: Multi-tool orchestration
3. **Custom Pilots**: €200k+ tailored solutions
4. **IoT Automation**: Industrial process optimization
5. **Compliance & Security**: GDPR/AI Act adherence
6. **Local Deployment**: On-premise AI solutions

**SEO Keywords**:
- `services IA entreprise`
- `RAG MCP France`
- `pilotes IA`
- `automatisation industrielle`
- `GDPR conformité`
- `agents IA locaux`

### 3. Resources Page (`/resources`)

**Purpose**: Provide educational content and thought leadership
**Target**: Enterprise teams researching AI adoption

**Content Sections**:
- Hero section with resource overview
- Resource categories grid (6 categories)
- Newsletter signup section
- Blog preview section

**Resource Categories**:
1. **GDPR & Compliance**: Privacy regulations and data protection
2. **AI Act**: European AI regulatory framework
3. **Technical Guides**: RAG, MCP, deployment strategies
4. **Industry Cases**: Manufacturing, logistics, energy use cases
5. **Case Studies**: Renault, Saint-Gobain, Airbus examples
6. **Tools & Templates**: Checklists, contracts, ROI calculators

**SEO Keywords**:
- `ressources IA entreprise`
- `guide GDPR France`
- `AI Act européen`
- `RAG MCP documentation`
- `cas d'usage IA industrielle`

### 4. Contact Page (`/contact`)

**Purpose**: Capture enterprise leads and provide contact information
**Target**: Decision-makers ready to engage with AI pilots

**Content Sections**:
- Hero section with contact proposition
- Contact form with validation
- Contact information cards
- FAQ section

**Form Fields**:
- Personal information (name, email, company, position)
- Project details (type, budget, requirements)
- GDPR consent checkbox
- Message textarea

**Contact Methods**:
- Direct email contacts for Tobias and Mengran
- Business hours and response time commitment
- Physical location (Paris, France)
- LinkedIn business development focus

**SEO Keywords**:
- `contact Kokotajlo`
- `pilotes IA entreprise`
- `partenariats IA France`
- `devis IA conformes`
- `support IA entreprise`

## Technical Implementation

### File Structure
```
src/app/
├── about/page.tsx          # About page component
├── services/page.tsx       # Services page component
├── resources/page.tsx      # Resources page component
├── contact/page.tsx        # Contact page component
└── layout.tsx             # Shared layout with Header/Footer

src/components/
├── Header.tsx             # Navigation with active states
└── Footer.tsx             # Site footer component
```

### SEO Optimization

Each page includes:
- **Page-specific title**: "Page Name | Kokotajlo Agents IA FR"
- **Meta description**: French keywords targeting enterprise AI
- **Open Graph tags**: Social media optimization
- **Structured data**: Schema.org markup ready

### Navigation Features

**Active State Highlighting**:
- Desktop: Bottom border and color change
- Mobile: Background color and right border
- Uses `usePathname()` hook for current route detection

**Responsive Design**:
- Mobile-first approach
- Collapsible navigation menu
- Touch-friendly interactions

## Future Enhancements

### Planned Features
- [ ] Dynamic content from CMS
- [ ] Blog integration with RSS feed
- [ ] Case study detail pages
- [ ] Resource download tracking
- [ ] Contact form submission to CRM
- [ ] Multilingual support (English versions)

### Performance Optimizations
- [ ] Static generation for subpages
- [ ] Image optimization for team photos
- [ ] Lazy loading for resource sections
- [ ] CDN integration for assets

## Testing Checklist

### Functional Testing
- [ ] All navigation links work correctly
- [ ] Active states display properly
- [ ] Contact form validation functions
- [ ] Responsive design on all devices
- [ ] SEO meta tags render correctly

### Content Testing
- [ ] French text is grammatically correct
- [ ] All links point to correct destinations
- [ ] Call-to-action buttons are prominent
- [ ] Contact information is up-to-date

### Performance Testing
- [ ] Page load times under 3 seconds
- [ ] Mobile Lighthouse score > 90
- [ ] SEO Lighthouse score > 90
- [ ] No console errors or warnings

## Deployment Notes

### Build Process
1. Static generation for all subpages
2. Image optimization during build
3. SEO metadata generation
4. Sitemap.xml automatic generation

### CDN Integration
- Static assets served from CDN
- Image optimization via Next.js Image component
- Font loading optimization

## Support and Maintenance

### Content Updates
- Regular blog post additions
- Case study updates
- Contact information maintenance
- SEO keyword optimization

### Technical Maintenance
- Dependency updates
- Security patches
- Performance monitoring
- Analytics integration


