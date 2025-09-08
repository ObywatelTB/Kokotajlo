import Link from 'next/link';

export const metadata = {
  title: 'Agents IA Conformes GDPR | AI pour Entreprises FR',
  description: 'AI agents locaux pour automation industrielle. Conformité AI Act. Pilotes personnalisés pour entreprises françaises.',
  keywords: 'agents IA France, RAG MCP, GDPR AI, automation industrielle, IoT intelligence artificielle',
  openGraph: {
    title: 'Agents IA Conformes pour Entreprises Françaises',
    description: 'Solutions locales avec LLMs, RAG et MCP – Prêts pour l\'AI Act et GDPR',
    url: '/',
    siteName: 'AI Agents FR',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // TODO: Add actual image
        width: 1200,
        height: 630,
        alt: 'Agents IA entreprise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agents IA Conformes GDPR | AI pour Entreprises FR',
    description: 'AI agents locaux pour automation industrielle. Conformité AI Act.',
    images: ['/og-image.jpg'], // TODO: Add actual image
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1E3A8A_0%,_transparent_50%)] bg-[length:100px_100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Agents IA Conformes
                  <span className="block text-primary-blue">pour Entreprises Françaises</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
                  Solutions locales avec LLMs, RAG et MCP – Prêts pour l'AI Act et GDPR.
                  Automatisez vos processus industriels et IoT.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-blue hover:bg-blue-700 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Découvrir Nos Services
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-blue bg-white border-2 border-primary-blue hover:bg-primary-blue hover:text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Discuter Partenariat
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span>RGPD Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                  <span>LLMs Locaux</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span>AI Act Ready</span>
                </div>
              </div>
            </div>

            {/* Visual Placeholder */}
            <div className="relative">
              <div className="relative mx-auto w-full max-w-lg h-96 lg:h-[500px] bg-gradient-to-br from-primary-blue/10 to-accent-green/10 rounded-2xl border border-gray-200 shadow-2xl">
                {/* AI Network Visualization Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-primary-blue/20 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">Réseau IA Intelligent</h3>
                      <p className="text-sm text-gray-600">Visualisation des agents connectés</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-6 w-2 h-2 bg-primary-blue rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-6 left-8 w-4 h-4 bg-accent-green/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-primary-blue/60 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-green rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary-blue rounded-full opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
