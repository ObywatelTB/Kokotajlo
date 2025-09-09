'use client';

import { Menu, X } from 'lucide-react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Ressources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const toggleLanguage = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    const newPath = pathname.replace(/^\/(fr|en)/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <header className="bg-background shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
              AI Agents FR
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:inline-flex items-center px-3 py-2 border border-border rounded-md text-sm font-medium text-foreground bg-background hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors btn"
              title={`Switch to ${locale === 'fr' ? 'English' : 'Français'}`}
            >
              {locale === 'fr' ? 'EN' : 'FR'}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-foreground/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary btn"
                aria-expanded="false"
              >
                <span className="sr-only">Ouvrir le menu principal</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary-50 border-r-4 border-primary'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Language Toggle */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left text-foreground/80 hover:text-primary px-3 py-2 text-base font-medium transition-colors duration-200 btn"
                title={`Switch to ${locale === 'fr' ? 'English' : 'Français'}`}
              >
                {locale === 'fr' ? '🇬🇧 English' : '🇫🇷 Français'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
