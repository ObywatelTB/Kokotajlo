'use client';

import { NextIntlClientProvider } from 'next-intl';

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // For now, provide empty messages to avoid the context error
  const messages = {};

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
