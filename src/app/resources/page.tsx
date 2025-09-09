import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ressources IA | Kokotajlo Agents IA FR',
  description: 'Ressources sur l\'IA conforme pour entreprises françaises. Guides GDPR, AI Act, RAG/MCP, cas d\'usage industriels et études de cas.',
  keywords: ['ressources IA entreprise', 'guide GDPR France', 'AI Act européen', 'RAG MCP documentation', 'cas d\'usage IA industrielle'],
  openGraph: {
    title: 'Ressources IA | Kokotajlo Agents IA FR',
    description: 'Ressources complètes sur l\'IA conforme pour entreprises françaises.',
    url: '/resources',
    siteName: 'Kokotajlo',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ressources IA
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Guides, études de cas et documentation pour maîtriser
              l&apos;intelligence artificielle en entreprise
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GDPR & Compliance */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-content font-bold text-xl">G</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                GDPR & Conformité
              </h3>
              <div className="space-y-3">
                <Link href="#" className="block text-primary hover:text-primary-600 transition-colors">
                  Guide complet GDPR pour l&apos;IA
                </Link>
                <Link href="#" className="block text-primary hover:text-primary-600 transition-colors">
                  RGPD et données d&apos;entraînement
                </Link>
                <Link href="#" className="block text-primary hover:text-primary-600 transition-colors">
                  Droit à l&apos;explication IA
                </Link>
                <Link href="#" className="block text-primary hover:text-primary-600 transition-colors">
                  Checklist conformité entreprise
                </Link>
              </div>
            </div>

            {/* AI Act */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-accent-content font-bold text-xl">A</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                AI Act Européen
              </h3>
              <div className="space-y-3">
                <Link href="#" className="block text-accent hover:text-accent-600 transition-colors">
                  Comprendre l&apos;AI Act
                </Link>
                <Link href="#" className="block text-accent hover:text-accent-600 transition-colors">
                  Classification des systèmes IA
                </Link>
                <Link href="#" className="block text-accent hover:text-accent-600 transition-colors">
                  Obligations des fournisseurs
                </Link>
                <Link href="#" className="block text-accent hover:text-accent-600 transition-colors">
                  Sanctions et contrôles
                </Link>
              </div>
            </div>

            {/* Technical Guides */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-content font-bold text-xl">T</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Guides Techniques
              </h3>
              <div className="space-y-3">
                <Link href="#" className="block text-primary-600 hover:text-primary-800 transition-colors">
                  Architecture RAG expliquée
                </Link>
                <Link href="#" className="block text-primary-600 hover:text-primary-800 transition-colors">
                  Implémentation MCP
                </Link>
                <Link href="#" className="block text-primary-600 hover:text-primary-800 transition-colors">
                  Modèles IA locaux vs cloud
                </Link>
                <Link href="#" className="block text-primary-600 hover:text-primary-800 transition-colors">
                  Sécurisation des agents IA
                </Link>
              </div>
            </div>

            {/* Industry Cases */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-accent-content font-bold text-xl">I</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Cas d&apos;Usage Industriels
              </h3>
              <div className="space-y-3">
                <Link href="#" className="block text-accent-600 hover:text-accent-800 transition-colors">
                  Maintenance prédictive IA
                </Link>
                <Link href="#" className="block text-accent-600 hover:text-accent-800 transition-colors">
                  Automatisation logistique
                </Link>
                <Link href="#" className="block text-accent-600 hover:text-accent-800 transition-colors">
                  Contrôle qualité intelligent
                </Link>
                <Link href="#" className="block text-accent-600 hover:text-accent-800 transition-colors">
                  Optimisation énergétique
                </Link>
              </div>
            </div>

            {/* Case Studies */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-content font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Études de Cas
              </h3>
              <div className="space-y-3">
                <Link href="#" className="block text-primary-700 hover:text-primary-900 transition-colors">
                  Pilote Renault - Maintenance IA
                </Link>
                <Link href="#" className="block text-primary-700 hover:text-primary-900 transition-colors">
                  Saint-Gobain - Qualité prédictive
                </Link>
                <Link href="#" className="block text-primary-700 hover:text-primary-900 transition-colors">
                  Airbus - Automatisation chaîne
                </Link>
                <Link href="#" className="block text-primary-700 hover:text-primary-900 transition-colors">
                  EDF - Optimisation réseau
                </Link>
              </div>
            </div>

            {/* Tools & Templates */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-accent-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-accent-content font-bold text-xl">O</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Outils & Templates
              </h3>
              <div className="space-y-3">
                <Link href="#" className="block text-accent-700 hover:text-accent-900 transition-colors">
                  Template cahier des charges IA
                </Link>
                <Link href="#" className="block text-accent-700 hover:text-accent-900 transition-colors">
                  Checklist pilote IA
                </Link>
                <Link href="#" className="block text-accent-700 hover:text-accent-900 transition-colors">
                  Modèle contrat fournisseur IA
                </Link>
                <Link href="#" className="block text-accent-700 hover:text-accent-900 transition-colors">
                  Calculateur ROI IA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Restez informé
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Recevez nos dernières ressources et insights sur l&apos;IA en entreprise
              directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-accent-300 focus:border-transparent"
              />
              <button className="bg-accent text-accent-content hover:bg-accent-600 px-6 py-3 rounded-lg font-medium transition-colors duration-200 btn">
                S&apos;inscrire
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Derniers Articles
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Insights et analyses sur les tendances de l&apos;IA en entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">GDPR & IA</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  <Link href="#" className="hover:text-primary transition-colors">
                    L&apos;impact du RGPD sur les modèles d&apos;IA générative
                  </Link>
                </h3>
                <p className="text-foreground/70 mb-4">
                  Analyse des implications du RGPD sur l&apos;utilisation des données
                  personnelles dans l&apos;entraînement des modèles d&apos;IA.
                </p>
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <span>15 déc. 2024</span>
                  <span>5 min de lecture</span>
                </div>
              </div>
            </article>

            <article className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="text-sm text-accent font-medium mb-2">AI Act</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  <Link href="#" className="hover:text-accent transition-colors">
                    Préparer votre entreprise à l&apos;AI Act européen
                  </Link>
                </h3>
                <p className="text-foreground/70 mb-4">
                  Guide pratique pour anticiper les exigences de l&apos;AI Act
                  et adapter votre stratégie IA.
                </p>
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <span>10 déc. 2024</span>
                  <span>8 min de lecture</span>
                </div>
              </div>
            </article>

            <article className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="text-sm text-primary-600 font-medium mb-2">Technique</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  <Link href="#" className="hover:text-primary-600 transition-colors">
                    RAG vs Fine-tuning : quel approche choisir ?
                  </Link>
                </h3>
                <p className="text-foreground/70 mb-4">
                  Comparaison des techniques d&apos;adaptation des modèles IA
                  pour les cas d&apos;usage entreprise.
                </p>
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <span>5 déc. 2024</span>
                  <span>6 min de lecture</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Besoin d&apos;aide pour votre projet IA ?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Nos experts sont là pour vous accompagner dans votre transformation digitale
              avec des solutions IA conformes et performantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-primary-content hover:bg-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
              >
                Contactez nos experts
              </Link>
              <Link
                href="/services"
                className="bg-background text-primary border border-primary hover:bg-primary hover:text-primary-content px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


