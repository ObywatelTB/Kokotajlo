# Bilingual Support Documentation

## Overview

Kokotajlo implements internationalization (i18n) using next-intl for French (default) and English support. The bilingual system prioritizes French content for the French enterprise market while providing English as a secondary option for international visitors.

## Technical Implementation

### next-intl Configuration

**Installation:**
```bash
npm install next-intl
```

**Configuration Files:**
- `src/i18n.ts`: Server-side configuration with locale detection
- `next.config.ts`: Plugin integration with default locale settings
- `src/app/layout.tsx`: Client-side provider setup

### File Structure

```
src/
├── i18n.ts                           # Server configuration
├── messages/
│   ├── fr.json                      # French translations (primary)
│   └── en.json                      # English translations (secondary)
└── app/
    ├── layout.tsx                   # NextIntlClientProvider wrapper
    └── [locale]/                    # Locale-based routing (future)
```

### Server Configuration (`src/i18n.ts`)

```typescript
import { getRequestConfig } from 'next-intl/server';

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
```

### Client Configuration (`src/app/layout.tsx`)

```typescript
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function RootLayout({ children }) {
  const messages = await getMessages();

  return (
    <html lang="fr">
      <NextIntlClientProvider messages={messages}>
        {/* App content */}
      </NextIntlClientProvider>
    </html>
  );
}
```

## Message Files Structure

### French Messages (`src/messages/fr.json`)

Primary language with comprehensive content for enterprise audience:

```json
{
  "navigation": {
    "home": "Accueil",
    "about": "À Propos",
    "services": "Services",
    "resources": "Ressources",
    "contact": "Contact"
  },
  "services": {
    "title": "Nos Services d'Agents IA",
    "subtitle": "Solutions sur mesure pour grandes entreprises françaises",
    "local_llms": {
      "title": "Agents IA Locaux",
      "description": "Hébergement sécurisé, RAG pour données sensibles – GDPR-ready",
      "features": [...]
    }
  }
}
```

### English Messages (`src/messages/en.json`)

Secondary language with basic translations:

```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "resources": "Resources",
    "contact": "Contact"
  },
  "services": {
    "title": "Our AI Agent Services",
    "subtitle": "Custom solutions for major French enterprises"
  }
}
```

## Language Switching

### Header Implementation

**Desktop Toggle:**
```typescript
<button
  onClick={toggleLanguage}
  className="hidden sm:inline-flex items-center px-3 py-2 border border-border rounded-md"
  title={`Switch to ${locale === 'fr' ? 'English' : 'Français'}`}
>
  {locale === 'fr' ? 'EN' : 'FR'}
</button>
```

**Mobile Toggle:**
```typescript
<button
  onClick={() => {
    toggleLanguage();
    setIsMenuOpen(false);
  }}
  className="w-full text-left px-3 py-2 text-base font-medium"
>
  {locale === 'fr' ? '🇬🇧 English' : '🇫🇷 Français'}
</button>
```

**Language Switch Logic:**
```typescript
const toggleLanguage = () => {
  const newLocale = locale === 'fr' ? 'en' : 'fr';
  const newPath = pathname.replace(/^\/(fr|en)/, `/${newLocale}`);
  router.push(newPath);
};
```

## Content Strategy

### French-First Approach

**Primary Content Language:**
- All marketing content optimized for French enterprise market
- Technical terminology adapted for French business context
- Compliance messaging tailored to French regulatory requirements
- Cultural references appropriate for French business culture

**Content Categories:**
1. **Enterprise-focused messaging** (pilotes, ROI, conformité)
2. **Technical content** (RAG, MCP, IoT automation)
3. **Compliance information** (GDPR, AI Act, data sovereignty)
4. **Business development** (equity deals, partnerships)

### English Support

**Secondary Content Strategy:**
- Basic translations for international visitors
- Technical documentation remains in English
- Compliance information translated for international compliance teams
- Contact forms and business inquiries handled in French

## SEO Considerations

### French SEO Optimization

**Primary Keywords:**
- `agents IA France`
- `pilotes IA entreprise`
- `RAG MCP automation`
- `conformité AI Act entreprise`

**Meta Tags:**
```typescript
title: 'Services IA | Kokotajlo – RAG MCP pour Entreprises FR'
description: 'Agents IA locaux IoT conformes. Pilotes personnalisés GDPR/AI Act France.'
keywords: ['agents IA locaux IoT', 'pilotes IA GDPR France', 'RAG MCP automation', 'conformité AI Act entreprise']
```

### English SEO (Future)

**Secondary Keywords:**
- `French AI agents`
- `enterprise AI pilots`
- `RAG MCP automation`
- `GDPR compliant AI`

## Development Workflow

### Adding New Content

1. **Add French content first** in `src/messages/fr.json`
2. **Add English translation** in `src/messages/en.json`
3. **Update components** to use translation keys
4. **Test both languages** for layout and functionality
5. **Update SEO metadata** for both languages

### Component Usage

**Using Translations in Components:**
```typescript
'use client';
import { useTranslations } from 'next-intl';

export default function ServicesPage() {
  const t = useTranslations('services');

  return (
    <h1>{t('title')}</h1>
    <p>{t('subtitle')}</p>
  );
}
```

**Server Components:**
```typescript
import { getTranslations } from 'next-intl/server';

export default async function ServicesPage() {
  const t = await getTranslations('services');

  return <h1>{t('title')}</h1>;
}
```

## Testing Strategy

### Language Switching Tests

**Functionality Tests:**
- [ ] Desktop language toggle works correctly
- [ ] Mobile language toggle works correctly
- [ ] URL updates correctly with locale
- [ ] Content switches without page reload
- [ ] Active navigation state maintains in both languages

**Content Tests:**
- [ ] All text elements translate correctly
- [ ] Layout remains consistent in both languages
- [ ] Images and media display properly
- [ ] Forms submit correctly in both languages

### SEO Tests

**Meta Tag Tests:**
- [ ] Title tags update for each language
- [ ] Meta descriptions are appropriate for each language
- [ ] Open Graph tags work for both languages
- [ ] Canonical URLs are correct

**Search Engine Tests:**
- [ ] French content indexed properly
- [ ] English content available for international search
- [ ] Language-specific keywords target appropriate markets
- [ ] hreflang tags implemented correctly (future)

## Performance Optimization

### Bundle Optimization

**next-intl Configuration:**
```typescript
// next.config.ts
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

experimental: {
  optimizePackageImports: ['next-intl'],
}
```

**Dynamic Imports:**
```typescript
const messages = await import(`./messages/${locale}.json`);
```

### Caching Strategy

**Server-Side Caching:**
- Messages cached at build time for static pages
- Runtime caching for dynamic content
- CDN caching for translated content

**Client-Side Caching:**
- Browser localStorage for user language preference
- Service worker caching for offline translation support

## Future Enhancements

### Planned Features

**Advanced i18n Features:**
- [ ] Locale-based routing (`/fr/about`, `/en/about`)
- [ ] Automatic language detection
- [ ] Language-specific content variations
- [ ] Multilingual content management system

**Content Expansion:**
- [ ] Full English content development
- [ ] Technical documentation translation
- [ ] Case studies in multiple languages
- [ ] International market expansion content

**Performance Improvements:**
- [ ] Static generation for all language variants
- [ ] Edge deployment for global performance
- [ ] Translation optimization for large content sets

### International Expansion

**Market-Specific Content:**
- [ ] German translations for DACH market
- [ ] Spanish translations for Iberian market
- [ ] Italian translations for Southern Europe
- [ ] Dutch translations for Benelux market

**Regional Compliance:**
- [ ] GDPR variations for different EU countries
- [ ] Local regulatory requirement translations
- [ ] Region-specific case studies and testimonials

## Maintenance Guidelines

### Content Updates

**Regular Maintenance:**
- Monthly review of translation accuracy
- Quarterly update of technical terminology
- Annual review of SEO keywords for both languages
- Continuous monitoring of user language preferences

### Technical Maintenance

**Dependency Updates:**
- Regular next-intl version updates
- Translation file optimization
- Performance monitoring and optimization
- Security updates for i18n dependencies

### Quality Assurance

**Translation Quality:**
- Native speaker review for all translations
- Technical accuracy verification
- Cultural appropriateness assessment
- SEO keyword optimization per language

**Technical Quality:**
- Bundle size monitoring
- Loading performance optimization
- Cross-browser compatibility testing
- Mobile responsiveness verification

## Support and Troubleshooting

### Common Issues

**Language Not Switching:**
- Check browser localStorage settings
- Verify URL path structure
- Confirm translation files exist

**Missing Translations:**
- Add missing keys to message files
- Update component translation calls
- Test in development environment

**Performance Issues:**
- Optimize translation file loading
- Implement lazy loading for large content
- Use CDN for global distribution

### Getting Help

**Development Support:**
- Check next-intl documentation
- Review GitHub issues and solutions
- Consult translation service providers
- Join i18n developer communities

**Content Support:**
- Work with professional translators
- Consult native speakers for cultural context
- Use translation management tools
- Implement feedback collection systems

This bilingual system provides a solid foundation for Kokotajlo's international expansion while maintaining French as the primary market focus. The next-intl implementation ensures excellent performance and developer experience while supporting enterprise-grade internationalization requirements.
