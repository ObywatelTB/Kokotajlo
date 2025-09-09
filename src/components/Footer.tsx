'use client';

import { Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Ressources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-primary-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Kokotajlo</h3>
            <p className="text-white text-sm">
              Agents IA conformes pour entreprises françaises.
              Solutions RAG/MCP avec conformité GDPR et AI Act.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-primary-200 transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Légal</h4>
            <div className="flex flex-col space-y-2">
              <Link
                href="/privacy"
                className="text-white hover:text-primary-200 transition-colors duration-200 text-sm"
              >
                Avis de Confidentialité (GDPR/AI Act)
              </Link>
              <Link
                href="/terms"
                className="text-white hover:text-primary-200 transition-colors duration-200 text-sm"
              >
                Conditions d&apos;utilisation
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://linkedin.com/company/kokotajlo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-200 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              © 2025 Kokotajlo. Tous droits réservés.
            </p>
            <p className="text-white text-sm mt-2 md:mt-0">
              Agents IA conformes pour entreprises françaises.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



