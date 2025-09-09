# Analytics Implementation Guide

## Overview

Kokotajlo uses Google Analytics 4 (GA4) for comprehensive tracking of user behavior, lead generation, and conversion optimization with GDPR compliance considerations.

## Google Analytics 4 Setup

### Configuration
- **Library**: `react-ga` for React integration
- **Measurement ID**: `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable
- **Initialization**: Client-side component in layout
- **Page Tracking**: Automatic pageview tracking on route changes

### Implementation Details

#### Analytics Component (`src/components/Analytics.tsx`)
```tsx
'use client';

import { useEffect } from 'react';
import ReactGA from 'react-ga';

const Analytics = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  // Global event tracking function
  useEffect(() => {
    const trackEvent = (category: string, action: string, label?: string) => {
      if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
        ReactGA.event({
          category,
          action,
          label,
        });
      }
    };

    (window as any).trackEvent = trackEvent;
  }, []);

  return null;
};
```

#### Integration in Layout
- Added to `src/app/layout.tsx`
- Loads before other components
- Tracks initial page load

## Event Tracking Strategy

### Lead Generation Events

#### Contact Form Submissions
```javascript
// Track when contact form is submitted
window.trackEvent('Lead', 'Contact Form Submit', 'Enterprise Inquiry');

// Track specific form fields
window.trackEvent('Lead', 'Pilot Request', 'AI Agent Pilot');
```

#### Chatbot Interactions
```javascript
// Track chatbot engagement
window.trackEvent('Engagement', 'Chatbot Open', 'Main Chat');

// Track conversation starts
window.trackEvent('Lead', 'Chat Conversation Start', 'Product Inquiry');

// Track form submissions through chat
window.trackEvent('Lead', 'Chat Lead Submit', 'Pilot Request');
```

#### Newsletter Signups
```javascript
// Track newsletter subscriptions
window.trackEvent('Lead', 'Newsletter Signup', 'Footer Form');
```

### User Engagement Events

#### Content Interactions
```javascript
// Track resource downloads
window.trackEvent('Content', 'Resource Download', 'Whitepaper PDF');

// Track blog post reads
window.trackEvent('Content', 'Blog Post Read', 'Complete Article');

// Track service page views
window.trackEvent('Content', 'Service Page View', 'AI Agents Service');
```

#### Navigation Events
```javascript
// Track important page transitions
window.trackEvent('Navigation', 'Language Switch', 'EN to FR');

// Track CTA button clicks
window.trackEvent('Interaction', 'CTA Click', 'Request Pilot');
```

## Conversion Funnels

### Primary Conversion: Pilot Requests
1. **Awareness**: Landing page visits
2. **Interest**: Service page views, resource downloads
3. **Consideration**: Contact form views, chatbot interactions
4. **Decision**: Form submissions, pilot requests
5. **Retention**: Follow-up communications

### Secondary Conversions
- Newsletter subscriptions
- Social media engagement
- Content downloads
- Demo requests

## GDPR Compliance

### Privacy Considerations
- **Consent Management**: Future implementation planned
- **Data Minimization**: Only essential tracking
- **Cookie Policy**: Transparent cookie usage
- **User Rights**: Data deletion and access rights

### Implementation Notes
```javascript
// Check for consent before tracking (future enhancement)
const hasConsent = localStorage.getItem('analytics-consent') === 'true';

if (hasConsent && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
  // Initialize and track
}
```

## Custom Dimensions & Metrics

### Planned Custom Dimensions
- User Type: Enterprise vs Individual
- Lead Source: Organic, Direct, Referral
- Geographic Region: French departments
- Industry Sector: Manufacturing, Finance, Healthcare

### Event Parameters
- Form Type: Contact, Pilot, Newsletter
- Interaction Type: Click, Submit, View
- Content Category: Blog, Resources, Services
- User Journey Stage: Awareness, Consideration, Decision

## Reporting & Analysis

### Key Performance Indicators (KPIs)

#### Traffic Metrics
- **Sessions**: Total site visits
- **Users**: Unique visitors
- **Page Views**: Content engagement
- **Bounce Rate**: User engagement quality
- **Session Duration**: Time on site

#### Conversion Metrics
- **Lead Generation**: Form submissions, chat leads
- **Conversion Rate**: Leads per session
- **Goal Completions**: Pilot requests, newsletter signups
- **Revenue Tracking**: Future implementation for paid pilots

#### User Behavior
- **Top Pages**: Most visited content
- **User Flow**: Navigation patterns
- **Device Types**: Desktop vs Mobile usage
- **Geographic Distribution**: French market penetration

### Custom Reports
- Lead Quality Analysis
- Content Performance
- Conversion Funnel Analysis
- Multi-channel Attribution

## Technical Implementation

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=GA_MEASUREMENT_ID_STUB
```

### Error Handling
```javascript
// Graceful degradation if GA fails
try {
  ReactGA.initialize(measurementId);
  ReactGA.pageview(path);
} catch (error) {
  console.warn('GA initialization failed:', error);
}
```

### Development Mode
```javascript
// Disable tracking in development
if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(measurementId);
}
```

## Testing & Validation

### Analytics Verification
1. **Google Analytics Debug**: Use GA4 Debug extension
2. **Real-time Reports**: Verify events appear in GA dashboard
3. **Event Validation**: Check event parameters and categories
4. **Cross-browser Testing**: Ensure tracking works across browsers

### Testing Checklist
- [ ] GA4 property setup
- [ ] Measurement ID configuration
- [ ] Pageview tracking verification
- [ ] Event tracking validation
- [ ] Form submission tracking
- [ ] Chatbot interaction tracking
- [ ] GDPR compliance review
- [ ] Cross-device testing

## Future Enhancements

### Advanced Features
- **A/B Testing**: Google Optimize integration
- **Enhanced Ecommerce**: Revenue tracking
- **Custom Audiences**: Remarketing setup
- **Attribution Modeling**: Multi-touch attribution

### Privacy Enhancements
- **Consent Management Platform**: Cookie banner integration
- **Data Layer**: Structured data collection
- **Server-side Tracking**: Enhanced privacy controls
- **Anonymization**: IP address masking

## Maintenance Tasks

### Monthly Reviews
- Review conversion funnels
- Analyze traffic sources
- Optimize underperforming pages
- Update tracking for new features

### Quarterly Updates
- Goal completion analysis
- Custom dimension review
- Privacy compliance audit
- Performance optimization

### Annual Planning
- Analytics strategy review
- New feature tracking implementation
- Privacy regulation compliance updates
- Technology stack evaluation
