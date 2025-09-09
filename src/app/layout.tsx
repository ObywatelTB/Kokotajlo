import ChatbotWrapper from '@/components/ChatbotWrapper';
import Footer from '@/components/Footer';
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

          {/* Chatbot Wrapper - Available on all pages */}
          <ChatbotWrapper />

          {/* Footer */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
