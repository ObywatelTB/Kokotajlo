import Analytics from '@/components/Analytics';
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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kokotajlo",
    "description": "Agents IA conformes pour entreprises FR. Solutions IA locale RAG MCP pour automation industrielle avec conformité AI Act.",
    "url": process.env.NEXT_PUBLIC_URL || "https://kokotajlo.fr",
    "logo": `${process.env.NEXT_PUBLIC_URL || "https://kokotajlo.fr"}/file.svg`,
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Tobias Bajek",
        "jobTitle": "CTO & Co-Founder"
      },
      {
        "@type": "Person",
        "name": "Mengran Zhao",
        "jobTitle": "CEO & Co-Founder"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-1-23-45-67-89",
      "contactType": "customer service",
      "availableLanguage": ["French", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR",
      "addressLocality": "Paris"
    },
    "sameAs": [
      "https://github.com/ObywatelTB/Kokotajlo"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "GDPR Compliance",
      "AI Act Compliance",
      "RAG (Retrieval-Augmented Generation)",
      "MCP (Model Context Protocol)",
      "Enterprise Automation",
      "French Business Solutions"
    ],
    "serviceType": [
      "AI Agent Development",
      "GDPR Compliant AI Solutions",
      "Enterprise Automation",
      "Pilot Projects",
      "French Market AI Solutions"
    ]
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-white text-gray-900`}
      >
        <NextIntlClientProvider messages={messages}>
          <Analytics />
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
