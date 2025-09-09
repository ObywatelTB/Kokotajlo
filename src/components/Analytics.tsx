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

  // Event tracking functions for lead generation
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

    // Expose tracking function globally for components to use
    (window as Window & { trackEvent?: typeof trackEvent }).trackEvent = trackEvent;
  }, []);

  return null;
};

export default Analytics;
