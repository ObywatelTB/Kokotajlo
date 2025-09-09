'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import InlineChat from './InlineChat';

const ChatbotWrapper = () => {
  const pathname = usePathname();
  const t = useTranslations();

  // Get current locale from pathname
  const getLocale = () => {
    if (pathname.startsWith('/en')) return 'en';
    if (pathname.startsWith('/fr')) return 'fr';
    return 'fr'; // Default to French
  };

  const currentLocale = getLocale();

  // Determine context based on current page
  const getPageContext = () => {
    if (pathname === '/' || pathname === '/fr' || pathname === '/en') {
      return 'home';
    }
    if (pathname.includes('/resources')) {
      return 'resources';
    }
    if (pathname.includes('/contact')) {
      return 'contact';
    }
    if (pathname.includes('/services')) {
      return 'services';
    }
    if (pathname.includes('/about')) {
      return 'about';
    }
    return 'general';
  };

  const pageContext = getPageContext();

  return (
    <InlineChat
      locale={currentLocale}
      context={pageContext}
    />
  );
};

export default ChatbotWrapper;
