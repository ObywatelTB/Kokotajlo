'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import InlineChat from './InlineChat';

const ChatbotWrapper = () => {
  const pathname = usePathname();

  // Skip on homepage since it's already embedded under the hero
  const isHomePage = pathname === '/' || pathname === '/fr' || pathname === '/en';

  // Resolve locale from pathname
  const locale = useMemo(() => {
    if (pathname.startsWith('/en')) return 'en';
    if (pathname.startsWith('/fr')) return 'fr';
    return 'fr';
  }, [pathname]);

  // Derive simple page context
  const context = useMemo(() => {
    if (pathname.includes('/resources')) return 'resources';
    if (pathname.includes('/contact')) return 'contact';
    if (pathname.includes('/services')) return 'services';
    if (pathname.includes('/about')) return 'about';
    return 'general';
  }, [pathname]);

  const portalHostRef = useRef<HTMLDivElement | null>(null);
  const [isPortalReady, setIsPortalReady] = useState(false);

  useEffect(() => {
    if (isHomePage) {
      setIsPortalReady(false);
      return;
    }

    // Small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      // Find all sections inside main and pick the last one (bottom of page)
      // Look for sections directly in main or nested deeper
      let sections = Array.from(document.querySelectorAll('main section, main > div > section')) as HTMLElement[];

      // Fallback: if no sections found, look for any section on the page
      if (sections.length === 0) {
        sections = Array.from(document.querySelectorAll('section')) as HTMLElement[];
      }

      const lastSection = sections.length > 0 ? sections[sections.length - 1] : null;
      if (!lastSection) {
        setIsPortalReady(false);
        return;
      }

      // Create a host container inside the last section (small vertical margins)
      const host = document.createElement('div');
      host.className = 'px-4 my-6';
      lastSection.appendChild(host);

      portalHostRef.current = host;
      setIsPortalReady(true);
    }, 100); // 100ms delay

    return () => {
      clearTimeout(timeoutId);
      setIsPortalReady(false);
      if (portalHostRef.current && portalHostRef.current.parentElement) {
        portalHostRef.current.parentElement.removeChild(portalHostRef.current);
      }
      portalHostRef.current = null;
    };
  }, [isHomePage, pathname]);

  if (isHomePage) return null;
  if (!isPortalReady || !portalHostRef.current) return null;

  // Render InlineChat into the hero/top section so it inherits that background
  return createPortal(
    <InlineChat locale={locale} context={context} />,
    portalHostRef.current
  );
};

export default ChatbotWrapper;
