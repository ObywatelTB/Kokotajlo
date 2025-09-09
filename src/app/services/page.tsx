import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services IA | Kokotajlo Agents IA FR',
  description: 'Services RAG/MCP pour entreprises françaises. Pilotes IA sur mesure, conformité GDPR/AI Act, automatisation industrielle. Solutions locales et sécurisées.',
  keywords: ['services IA entreprise', 'RAG MCP France', 'pilotes IA', 'automatisation industrielle', 'GDPR conformité', 'agents IA locaux'],
  openGraph: {
    title: 'Services IA | Kokotajlo Agents IA FR',
    description: 'Services RAG/MCP pour entreprises françaises avec conformité GDPR et pilotes sur mesure.',
    url: '/services',
    siteName: 'Kokotajlo',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nos Services IA
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Solutions RAG/MCP personnalisées pour la transformation digitale
              de votre entreprise française
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* RAG Implementation */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-content font-bold text-xl">R</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Implémentation RAG
              </h3>
              <p className="text-foreground/70 mb-4">
                Architecture Retrieval-Augmented Generation optimisée pour vos données
                d&apos;entreprise. Intégration transparente avec vos systèmes existants.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>• Indexation intelligente de documents</li>
                <li>• Recherche sémantique avancée</li>
                <li>• Réponses contextuelles précises</li>
                <li>• Conformité GDPR intégrée</li>
              </ul>
            </div>

            {/* MCP Integration */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-accent-content font-bold text-xl">M</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Intégration MCP
              </h3>
              <p className="text-foreground/70 mb-4">
                Protocole Model Context Protocol pour connecter vos agents IA
                à l&apos;écosystème d&apos;outils d&apos;entreprise de manière sécurisée.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>• Connexion multi-outils</li>
                <li>• Orchestration d&apos;agents</li>
                <li>• Sécurité et contrôle d&apos;accès</li>
                <li>• Extensibilité modulaire</li>
              </ul>
            </div>

            {/* Custom Pilots */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-content font-bold text-xl">P</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Pilotes Sur Mesure
              </h3>
              <p className="text-foreground/70 mb-4">
                Développement de pilotes IA personnalisés pour votre secteur d&apos;activité.
                De la conception à la mise en production (€200k+).
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>• Analyse des besoins métier</li>
                <li>• Développement rapide (POC)</li>
                <li>• Tests et validation</li>
                <li>• Déploiement sécurisé</li>
              </ul>
            </div>

            {/* IoT Automation */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-accent-content font-bold text-xl">I</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Automatisation IoT
              </h3>
              <p className="text-foreground/70 mb-4">
                Intégration d&apos;agents IA avec vos équipements industriels.
                Optimisation des processus et maintenance prédictive.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>• Connexion équipements</li>
                <li>• Analyse temps réel</li>
                <li>• Maintenance prédictive</li>
                <li>• Optimisation énergétique</li>
              </ul>
            </div>

            {/* Compliance & Security */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-content font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Conformité & Sécurité
              </h3>
              <p className="text-foreground/70 mb-4">
                Solutions IA 100% conformes aux réglementations européennes.
                Architecture sécurisée et auditabilité complète.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>• Conformité GDPR intégrée</li>
                <li>• Respect AI Act européen</li>
                <li>• Chiffrement end-to-end</li>
                <li>• Traçabilité des décisions</li>
              </ul>
            </div>

            {/* Local AI Deployment */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-accent-content font-bold text-xl">L</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Déploiement Local
              </h3>
              <p className="text-foreground/70 mb-4">
                Modèles IA déployés sur votre infrastructure pour la souveraineté
                des données et la performance optimale.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>• Serveurs locaux sécurisés</li>
                <li>• Modèles open-source</li>
                <li>• Performance garantie</li>
                <li>• Réduction des coûts cloud</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Notre Processus
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Une approche méthodique pour transformer votre entreprise
              avec l&apos;intelligence artificielle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-content font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Audit</h3>
              <p className="text-foreground/70 text-sm">Analyse de vos processus et identification des opportunités IA</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-content font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Conception</h3>
              <p className="text-foreground/70 text-sm">Architecture et développement du pilote sur mesure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-content font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Test</h3>
              <p className="text-foreground/70 text-sm">Validation et optimisation en environnement contrôlé</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-content font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Déploiement</h3>
              <p className="text-foreground/70 text-sm">Mise en production avec accompagnement et support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Prêt à commencer votre transformation IA ?
              </h2>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet et obtenir un devis
                personnalisé pour votre pilote IA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary text-primary-content hover:bg-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
                >
                  Demander un devis
                </Link>
                <Link
                  href="/resources"
                  className="bg-background text-primary border border-primary hover:bg-primary hover:text-primary-content px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



