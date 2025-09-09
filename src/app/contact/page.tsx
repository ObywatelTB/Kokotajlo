import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | Kokotajlo Agents IA FR',
  description: 'Contactez Kokotajlo pour vos projets IA. Partenariats entreprise, pilotes sur mesure, conformité GDPR/AI Act. Réponse sous 24h.',
  keywords: ['contact Kokotajlo', 'pilotes IA entreprise', 'partenariats IA France', 'devis IA conformes', 'support IA entreprise'],
  openGraph: {
    title: 'Contact | Kokotajlo Agents IA FR',
    description: 'Contactez-nous pour vos projets d\'IA conformes et pilotes sur mesure.',
    url: '/contact',
    siteName: 'Kokotajlo',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Discutons de votre projet IA et comment nous pouvons vous aider
              à transformer votre entreprise
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-background border border-border rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Envoyez-nous un message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Entreprise *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-foreground mb-2">
                    Poste
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                    placeholder="Votre poste"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                    Type de projet *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    <option value="pilot">Pilote IA sur mesure</option>
                    <option value="rag">Implémentation RAG</option>
                    <option value="mcp">Intégration MCP</option>
                    <option value="iot">Automatisation IoT</option>
                    <option value="compliance">Audit conformité</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                  >
                    <option value="">Sélectionnez une fourchette</option>
                    <option value="50k-100k">50k - 100k €</option>
                    <option value="100k-200k">100k - 200k €</option>
                    <option value="200k-500k">200k - 500k €</option>
                    <option value="500k+">500k € +</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                    placeholder="Décrivez brièvement votre projet et vos objectifs..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="gdpr"
                    name="gdpr"
                    required
                    className="mt-1 h-4 w-4 text-accent focus:ring-accent-300 border-border rounded"
                  />
                  <label htmlFor="gdpr" className="text-sm text-foreground/70">
                    J&apos;accepte que mes données soient traitées conformément à notre{' '}
                    <Link href="/privacy" className="text-primary hover:text-primary-600 underline">
                      politique de confidentialité
                    </Link>{' '}
                    et au RGPD. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-content hover:bg-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Informations de contact
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-content font-bold text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-foreground/70">contact@kokotajlo.fr</p>
                      <p className="text-sm text-foreground/50 mt-1">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-content font-bold text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Localisation</h3>
                      <p className="text-foreground/70">Paris, France</p>
                      <p className="text-sm text-foreground/50 mt-1">Disponible pour missions sur site</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-content font-bold text-xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                      <p className="text-foreground/70">Lundi - Vendredi</p>
                      <p className="text-sm text-foreground/50 mt-1">9h00 - 18h00 CET</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Contacts */}
              <div className="bg-foreground/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Contactez directement nos experts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-content font-bold text-sm">T</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Tobias Bajek</p>
                      <p className="text-sm text-foreground/70">Ingénieur IA & Architecture</p>
                      <p className="text-sm text-primary">tobias@kokotajlo.fr</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-accent-content font-bold text-sm">M</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Mengran Zhao</p>
                      <p className="text-sm text-foreground/70">Développement Commercial</p>
                      <p className="text-sm text-accent">mengran@kokotajlo.fr</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Pourquoi nous choisir ?
                </h3>
                <ul className="space-y-3 text-sm text-foreground/70">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>100% conformes GDPR et AI Act</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Pilotes sur mesure (€200k+)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Équipe polono-chinoise expérimentée</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-600 mt-1">✓</span>
                    <span>Solutions locales et sécurisées</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Questions fréquentes
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Réponses aux questions les plus courantes sur nos services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Quel est le délai pour un pilote IA ?
              </h3>
              <p className="text-foreground/70 text-sm">
                Selon la complexité, nos pilotes sont généralement déployés
                entre 3 et 6 mois, incluant l&apos;audit, le développement et les tests.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Travaillez-vous avec des PME ?
              </h3>
              <p className="text-foreground/70 text-sm">
                Oui, nous accompagnons aussi bien les grands groupes que les PME.
                Nos solutions sont adaptables à toutes les tailles d&apos;entreprise.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Quels secteurs ciblez-vous ?
              </h3>
              <p className="text-foreground/70 text-sm">
                Industrie manufacturière, logistique, énergie, santé, finance.
                Nous avons une expertise particulière dans l&apos;industrie 4.0.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Proposez-vous du support post-déploiement ?
              </h3>
              <p className="text-foreground/70 text-sm">
                Oui, nous offrons un accompagnement complet incluant formation,
                maintenance et optimisation continue de vos solutions IA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


