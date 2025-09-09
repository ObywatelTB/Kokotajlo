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

  const [target, setTarget] = useState<HTMLElement | null>(null);
  const portalHostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isHomePage) return; // Home already has InlineChat in hero

    // Find all sections inside main and pick the last one (bottom of page)
    const sections = Array.from(document.querySelectorAll('main section')) as HTMLElement[];
    const lastSection = sections.length > 0 ? sections[sections.length - 1] : null;
    if (!lastSection) return;

    // Create a host container inside the last section (small vertical margins)
    const host = document.createElement('div');
    host.className = 'px-4 my-6';
    lastSection.appendChild(host);

    portalHostRef.current = host;
    setTarget(lastSection);

    return () => {
      if (portalHostRef.current && portalHostRef.current.parentElement) {
        portalHostRef.current.parentElement.removeChild(portalHostRef.current);
      }
      portalHostRef.current = null;
      setTarget(null);
    };
  }, [isHomePage, pathname]);

  if (isHomePage) return null;
  if (!portalHostRef.current) return null;

  // Render InlineChat into the hero/top section so it inherits that background
  return createPortal(
    <InlineChat locale={locale} context={context} />,
    portalHostRef.current
  );
};

export default ChatbotWrapper;
