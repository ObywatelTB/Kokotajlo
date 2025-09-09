import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services IA | Kokotajlo – RAG MCP pour Entreprises FR',
  description: 'Agents IA locaux IoT conformes. Pilotes personnalisés GDPR/AI Act France. Automatisation industrielle sécurisée.',
  keywords: ['agents IA locaux IoT', 'pilotes IA GDPR France', 'RAG MCP automation', 'conformité AI Act entreprise'],
  openGraph: {
    title: 'Services IA | Kokotajlo – RAG MCP pour Entreprises FR',
    description: 'Agents IA locaux IoT conformes. Pilotes personnalisés GDPR/AI Act France.',
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
              Nos Services d&apos;Agents IA
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Solutions sur mesure pour grandes entreprises françaises
            </p>
            <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-primary-200">
              <p className="text-lg text-foreground/80">
                Agents IA conformes pour automatisation industrielle et IoT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Local LLMs */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-content font-bold text-xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Agents IA Locaux
              </h3>
              <p className="text-foreground/70 mb-4">
                Hébergement sécurisé, RAG pour données sensibles – GDPR-ready.
                Infrastructure locale pour souveraineté numérique complète.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>• Serveurs sécurisés en France</li>
                <li>• Modèles IA open-source déployés localement</li>
                <li>• Chiffrement end-to-end des données</li>
                <li>• Auditabilité complète des traitements</li>
                <li>• Conformité RGPD et AI Act</li>
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
                <span className="text-accent-content font-bold text-xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Extension IoT avec Raisonnement
              </h3>
              <p className="text-foreground/70 mb-4">
                Intégrez LLMs dans devices industriels (ex: vending machines) pour tâches autonomes.
                Agents IA embarqués pour décisions temps réel.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>• Intégration LLMs dans équipements IoT</li>
                <li>• Raisonnement autonome temps réel</li>
                <li>• Décisions basées sur données locales</li>
                <li>• Maintenance prédictive intelligente</li>
                <li>• Optimisation énergétique adaptative</li>
                <li>• Conformité industrielle et sécurité</li>
              </ul>
            </div>

            {/* Compliance & Pilots */}
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-content font-bold text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Conformité et Déploiement
              </h3>
              <p className="text-foreground/70 mb-4">
                AI Act intégré; Premier pilote: €200k + 10-15% shares pour 6-12m runway.
                Modèles equity-friendly pour partenariats stratégiques.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>• AI Act compliance intégrée dès le design</li>
                <li>• Pilotes personnalisés (€200k+) avec equity</li>
                <li>• Modèles de financement flexibles</li>
                <li>• Partenariats stratégiques B2B</li>
                <li>• ROI démontré et mesurable</li>
                <li>• Support et accompagnement complet</li>
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

      {/* Tech Diagram Section */}
      <section className="py-16 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Architecture Technique RAG/MCP
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Flux de données et traitement IA pour solutions d&apos;entreprise sécurisées
            </p>
          </div>

          {/* Diagram Placeholder */}
          <div className="bg-white rounded-lg border border-border p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Data Sources */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-content text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Sources de Données</h3>
                <p className="text-sm text-foreground/70">Documents, IoT, bases de données</p>
              </div>

              {/* Arrow */}
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <span className="text-4xl text-primary">→</span>
                </div>
                <p className="text-sm text-foreground/70 mt-2">RAG Processing</p>
              </div>

              {/* AI Agent */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-content text-2xl">🤖</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Agent IA</h3>
                <p className="text-sm text-foreground/70">Décisions autonomes conformes</p>
              </div>
            </div>

            {/* MCP Layer */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-4">Couche MCP (Model Context Protocol)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-primary-50 rounded-lg">
                    <span className="block text-2xl mb-2">🔧</span>
                    <p className="text-sm text-foreground/70">Tools Integration</p>
                  </div>
                  <div className="p-4 bg-accent-50 rounded-lg">
                    <span className="block text-2xl mb-2">🔒</span>
                    <p className="text-sm text-foreground/70">Security Layer</p>
                  </div>
                  <div className="p-4 bg-primary-100 rounded-lg">
                    <span className="block text-2xl mb-2">📈</span>
                    <p className="text-sm text-foreground/70">Performance Monitoring</p>
                  </div>
                  <div className="p-4 bg-accent-100 rounded-lg">
                    <span className="block text-2xl mb-2">✅</span>
                    <p className="text-sm text-foreground/70">Compliance Audit</p>
                  </div>
                </div>
              </div>
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

      {/* Proposal Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Proposition de Pilote
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Contactez-nous pour customisation (automation sectorielle)
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Stub */}
            <div className="bg-background border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Demande de Pilote Personnalisé
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom de l&apos;entreprise *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                    placeholder="Votre entreprise"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Secteur d&apos;activité
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent-300 focus:border-transparent">
                    <option>Manufacture</option>
                    <option>IoT/Industrie 4.0</option>
                    <option>Logistique</option>
                    <option>Énergie</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Besoin spécifique
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                    placeholder="Décrivez votre cas d'usage..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-content hover:bg-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
                >
                  Envoyer la demande
                </button>
              </form>
            </div>

            {/* Pilot Benefits */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Avantages du Pilote
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-content font-bold text-sm">€</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Investissement Accessible</h4>
                      <p className="text-foreground/70 text-sm">€200k + equity pour 6-12 mois de développement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-content font-bold text-sm">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Rapidité d&apos;exécution</h4>
                      <p className="text-foreground/70 text-sm">POC en 3-6 mois avec résultats tangibles</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-content font-bold text-sm">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">ROI Mesuré</h4>
                      <p className="text-foreground/70 text-sm">Métriques claires et objectifs définis</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h4 className="font-medium text-foreground mb-4">Prochaines étapes</h4>
                <ol className="text-sm text-foreground/70 space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">1.</span>
                    <span>Audit technique et définition des besoins</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent font-bold">2.</span>
                    <span>Proposition technique et financière détaillée</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">3.</span>
                    <span>Développement et déploiement du pilote</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-600 font-bold">4.</span>
                    <span>Évaluation et scaling si réussite</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



