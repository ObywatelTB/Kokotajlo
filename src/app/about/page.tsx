import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À Propos | Kokotajlo – Duo IA pour Entreprises FR',
  description: 'Rencontrez nos fondateurs: Ingénieur polonais et développeur d&apos;affaires chinois. Agents IA conformes RAG/MCP pour automation française.',
  keywords: ['équipe IA France', 'pilotes agents IA GDPR', 'fondateurs Kokotajlo', 'duo polono-chinois IA'],
  openGraph: {
    title: 'À Propos | Kokotajlo – Duo IA pour Entreprises FR',
    description: 'Rencontrez nos fondateurs: Ingénieur polonais et développeur d&apos;affaires chinois. Agents IA conformes RAG/MCP pour automation française.',
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
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
              Créer des agents IA qui transforment les entreprises françaises
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-primary text-primary-content rounded-full text-lg font-medium">
              Notre mission: L&apos;intelligence artificielle au service de l&apos;excellence française
            </div>
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
                <p className="text-primary font-medium mb-4">Ingénieur Fondateur</p>
                <p className="text-foreground/70 mb-4">
                  Expérimenté en software engineering et entrepreneuriat, je mène le développement
                  technique des agents IA scalables avec focus local LLMs et RAG. Architecte
                  principal de nos solutions conformes aux réglementations européennes.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm">Architecture IA</span>
                  <span className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm">RAG/MCP</span>
                  <span className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm">Conformité</span>
                  <span className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm">Python/FastAPI</span>
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
                <p className="text-accent font-medium mb-4">Développeur d&apos;Affaires</p>
                <p className="text-foreground/70 mb-4">
                  33 ans d&apos;expérience en business development international, je cible les grandes
                  firmes françaises pour nos premiers pilotes personnalisés. Expert en stratégies
                  de pénétration de marché européen pour les technologies innovantes.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-accent-100 text-accent px-3 py-1 rounded-full text-sm">Pilotes IA</span>
                  <span className="bg-accent-100 text-accent px-3 py-1 rounded-full text-sm">Business Dev</span>
                  <span className="bg-accent-100 text-accent px-3 py-1 rounded-full text-sm">France</span>
                  <span className="bg-accent-100 text-accent px-3 py-1 rounded-full text-sm">Entreprises</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Notre Vision
              </h2>
              <p className="text-lg text-foreground/70">
                Duo polono-chinois: Premier produit custom pour un géant français (automation IoT,
                remplacement tâches humaines), puis scaling avec investisseurs.
                Conformité AI Act/GDPR intégrée dès le design.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Story */}
              <div className="bg-background border border-border rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Notre Histoire
                </h3>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    Né de l&apos;alliance entre l&apos;expertise technique polonaise et le développement
                    commercial chinois, Kokotajlo apporte une perspective unique sur le marché
                    européen de l&apos;IA.
                  </p>
                  <p>
                    Nous combinons l&apos;innovation technologique avec une compréhension profonde
                    des besoins des grandes entreprises françaises, offrant des solutions qui
                    respectent les plus hauts standards de conformité.
                  </p>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="bg-background border border-border rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Valeur pour nos Clients
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-content font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Efficacité Maximale</h4>
                      <p className="text-foreground/70 text-sm">Agents IA qui apprennent et s&apos;adaptent à vos processus</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-content font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Sécurité Totale</h4>
                      <p className="text-foreground/70 text-sm">Données sensibles protégées, conformité garantie</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-content font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">ROI Mesurable</h4>
                      <p className="text-foreground/70 text-sm">Réduction des coûts opérationnels prouvée</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack & Runway */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-content font-bold text-xl">⚙️</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Notre Tech Stack</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  MCP pour agents communicants, RAG pour données d&apos;entreprise,
                  LLMs locaux pour la souveraineté numérique.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-primary-100 text-primary px-2 py-1 rounded text-xs">MCP</span>
                  <span className="bg-primary-100 text-primary px-2 py-1 rounded text-xs">RAG</span>
                  <span className="bg-primary-100 text-primary px-2 py-1 rounded text-xs">LLMs</span>
                  <span className="bg-primary-100 text-primary px-2 py-1 rounded text-xs">GDPR</span>
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-content font-bold text-xl">📈</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Notre Runway</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Financement via equity deals avec nos premiers clients pilotes.
                  Modèle B2B direct pour une croissance durable.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-accent-100 text-accent px-2 py-1 rounded text-xs">€200k+</span>
                  <span className="bg-accent-100 text-accent px-2 py-1 rounded text-xs">Pilotes</span>
                  <span className="bg-accent-100 text-accent px-2 py-1 rounded text-xs">Equity</span>
                  <span className="bg-accent-100 text-accent px-2 py-1 rounded text-xs">B2B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Intéressé par un pilote personnalisé ?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet d&apos;automation IoT ou de remplacement de tâches humaines.
              Nos premiers pilotes sont disponibles pour les grandes entreprises françaises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-primary-content hover:bg-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
              >
                Discuter Pilote
              </Link>
              <Link
                href="/services"
                className="bg-background text-primary border border-primary hover:bg-primary hover:text-primary-content px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
              >
                Découvrir nos Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



