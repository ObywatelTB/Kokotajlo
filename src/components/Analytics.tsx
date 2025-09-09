'use client';

import { useEffect } from 'react';
import ReactGA from 'react-ga4';

declare global {
  interface Window {
    trackEvent?: (category: string, action: string, label?: string, value?: number, customParams?: Record<string, unknown>) => void;
  }
}

const Analytics = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
    }
  }, []);

  // Event tracking functions for lead generation
  useEffect(() => {
    const trackEvent = (category: string, action: string, label?: string, value?: number, customParams?: Record<string, unknown>) => {
      if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
        ReactGA.event(action, {
          category,
          label,
          value,
          ...customParams,
        });
      }
    };

    // Expose tracking function globally for components to use
    (window as Window & { trackEvent?: typeof trackEvent }).trackEvent = trackEvent;
  }, []);

  return null;
};

export default Analytics;
