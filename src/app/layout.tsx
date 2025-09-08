import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-gray-900`}
      >
        {/* Navigation placeholder - to be implemented */}
        <nav className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-gray-900">Kokotajlo</h1>
                </div>
              </div>
              {/* Language switcher placeholder for next-intl */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">FR</span>
                <span className="text-gray-300">|</span>
                <span className="text-sm text-gray-400">EN</span>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1">
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
      </body>
    </html>
  );
}
