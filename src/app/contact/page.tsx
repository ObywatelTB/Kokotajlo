'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contactez Kokotajlo pour un Partenariat
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Discutons de votre pilote IA personnalisé (automation IoT, RAG/MCP)
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-background border border-border rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Demande de Pilote Personnalisé
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Merci pour votre demande !
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    Nous analysons votre projet et nous vous contacterons sous 24h pour discuter de votre pilote personnalisé.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary text-primary-content hover:bg-primary-600 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Nouvelle demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
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
                    <label htmlFor="sector" className="block text-sm font-medium text-foreground mb-2">
                      Secteur d&apos;activité *
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                    >
                      <option value="">Sélectionnez votre secteur</option>
                      <option value="industriel">Industriel / Manufacturing</option>
                      <option value="manufacturing">Manufacturing / Production</option>
                      <option value="vending">Vending Machines / IoT</option>
                      <option value="automotive">Automotive</option>
                      <option value="logistics">Logistics / Supply Chain</option>
                      <option value="energy">Energy / Utilities</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Détails du projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                      placeholder="Décrivez votre projet, vos besoins en IA, et vos objectifs..."
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
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-content hover:bg-accent-600 disabled:bg-foreground/30 disabled:text-foreground/70 disabled:cursor-not-allowed px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      'Envoyer Demande de Pilote'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Direct
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
                      <span className="text-accent-content font-bold text-xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                      <p className="text-foreground/70">+33 1 XX XX XX XX</p>
                      <p className="text-sm text-foreground/50 mt-1">Sur rendez-vous</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-foreground/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Nos Experts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-content font-bold text-sm">T</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Tobias Bajek</p>
                      <p className="text-sm text-foreground/70">Ingénieur IA & Architecture</p>
                      <p className="text-sm text-primary">tobias@kokotajlo.fr</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


