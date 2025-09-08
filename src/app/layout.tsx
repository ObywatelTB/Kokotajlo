import Header from '@/components/Header';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agents IA Conformes GDPR | Kokotajlo pour Entreprises FR",
  description: "Solutions IA locale RAG MCP pour automation industrielle. Conformité AI Act. Pilotes sur mesure en France.",
  keywords: ["agents IA France", "GDPR AI", "RAG MCP entreprise", "IA conformes", "automatisation industrielle"],
  authors: [{ name: "ObywatelTB" }],
  creator: "ObywatelTB",
  publisher: "Kokotajlo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4000'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Agents IA Conformes GDPR | Kokotajlo pour Entreprises FR",
    description: "Solutions IA locale RAG MCP pour automation industrielle. Conformité AI Act. Pilotes sur mesure en France.",
    url: '/',
    siteName: 'Kokotajlo',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agents IA Conformes GDPR | Kokotajlo pour Entreprises FR",
    description: "Solutions IA locale RAG MCP pour automation industrielle. Conformité AI Act. Pilotes sur mesure en France.",
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
        className={`${inter.variable} font-sans antialiased min-h-screen bg-white text-gray-900`}
      >
        <Header />

        <main className="flex-1 pt-16">
          {children}
        </main>

        {/* Chatbot Widget (disabled in favor of inline chat) */}
        {/* <Chatbot position="top-right" defaultOpen={true} /> */}

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
