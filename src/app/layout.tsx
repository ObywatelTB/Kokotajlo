import Header from '@/components/Header';
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kokotajlo - Agents IA pour Entreprises Françaises",
  description: "Plateforme d'agents IA conformes pour entreprises françaises. Solutions d'automatisation intelligente et sécurisée.",
  keywords: ["IA", "agents", "automatisation", "entreprises", "France", "intelligence artificielle"],
  authors: [{ name: "ObywatelTB" }],
  creator: "ObywatelTB",
  publisher: "Kokotajlo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Kokotajlo - Agents IA pour Entreprises Françaises",
    description: "Plateforme d'agents IA conformes pour entreprises françaises. Solutions d'automatisation intelligente et sécurisée.",
    url: '/',
    siteName: 'Kokotajlo',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kokotajlo - Agents IA pour Entreprises Françaises",
    description: "Plateforme d'agents IA conformes pour entreprises françaises.",
    creator: '@kokotajlo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang="fr">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-white text-gray-900`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />

          <main className="flex-1 pt-16">
            {children}
          </main>

          {/* Footer placeholder */}
          <footer className="border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center text-sm text-gray-500">
                <p>&copy; 2024 Kokotajlo. Tous droits réservés.</p>
              </div>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
