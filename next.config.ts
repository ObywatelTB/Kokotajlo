import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  // Internationalization settings
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localeDetection: true,
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_DEFAULT_LOCALE: 'fr',
    NEXT_PUBLIC_LOCALES: 'fr,en',
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['next-intl'],
  },

  // Build optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
