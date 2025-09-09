import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À Propos | Kokotajlo Agents IA FR',
  description: 'Découvrez notre équipe polono-chinoise spécialisée dans les agents IA conformes GDPR. Solutions RAG/MCP pour entreprises françaises avec pilotes sur mesure.',
  keywords: ['à propos Kokotajlo', 'agents IA France', 'équipe IA', 'GDPR conformité', 'pilotes IA entreprise'],
  openGraph: {
    title: 'À Propos | Kokotajlo Agents IA FR',
    description: 'Découvrez notre équipe polono-chinoise spécialisée dans les agents IA conformes GDPR.',
    url: '/about',
    siteName: 'Kokotajlo',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              À Propos de Kokotajlo
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Une équipe polono-chinoise passionnée par l&apos;intelligence artificielle
              pour les entreprises françaises
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Tobias (Polish) */}
            <div className="bg-background border border-border rounded-lg p-8 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-content">T</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Tobias Bajek</h3>
                <p className="text-primary font-medium mb-4">Co-fondateur & Ingénieur IA</p>
                <p className="text-foreground/70 mb-4">
                  Ingénieur logiciel polonais expérimenté spécialisé dans les architectures
                  d&apos;intelligence artificielle. Expert en RAG, MCP et conformité technique
                  pour les solutions d&apos;entreprise.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm">FastAPI</span>
                  <span className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm">RAG/MCP</span>
                </div>
              </div>
            </div>

            {/* Mengran (Chinese) */}
            <div className="bg-background border border-border rounded-lg p-8 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-accent-content">M</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Mengran Zhao</h3>
                <p className="text-accent font-medium mb-4">Co-fondateur & Développement Commercial</p>
                <p className="text-foreground/70 mb-4">
                  Experte chinoise en développement commercial et stratégie d&apos;entreprise.
                  Spécialisée dans les partenariats technologiques et le développement
                  de marchés européens pour les solutions IA.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-accent-100 text-accent px-3 py-1 rounded-full text-sm">Business Dev</span>
                  <span className="bg-accent-100 text-accent px-3 py-1 rounded-full text-sm">Stratégie</span>
                  <span className="bg-accent-100 text-accent px-3 py-1 rounded-full text-sm">Partenariats</span>
                  <span className="bg-accent-100 text-accent px-3 py-1 rounded-full text-sm">Europe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Notre Mission
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Démocratiser l&apos;intelligence artificielle pour les entreprises françaises
              tout en garantissant la conformité GDPR et AI Act. Nous proposons des
              pilotes personnalisés (€200k+) pour transformer vos processus métier
              avec des agents IA locaux et sécurisés.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-content font-bold text-xl">🇵🇱</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Expertise Technique</h3>
                <p className="text-foreground/70 text-sm">Architecture IA avancée et conformité technique</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-content font-bold text-xl">🇨🇳</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Développement Commercial</h3>
                <p className="text-foreground/70 text-sm">Stratégie et partenariats pour la croissance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-content font-bold text-xl">🇫🇷</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Focus France</h3>
                <p className="text-foreground/70 text-sm">Solutions adaptées au marché français</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Découvrez nos services et demandez un pilote personnalisé
              pour votre entreprise française.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-primary text-primary-content hover:bg-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
              >
                Nos Services
              </Link>
              <Link
                href="/contact"
                className="bg-background text-primary border border-primary hover:bg-primary hover:text-primary-content px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



