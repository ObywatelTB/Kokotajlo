'use client';

import { useState } from 'react';

const CTAForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('CTA Form submitted with email:', email);

    // Track successful form submission
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('Lead', 'Contact Form Submit', 'CTA Form', undefined, {
        event_params: {
          form_type: 'cta_contact',
          email_domain: email?.toString().split('@')[1] || 'unknown'
        }
      });
    }

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset after success message
    setTimeout(() => {
      setIsSubmitted(false);
      e.currentTarget.reset();
    }, 3000);
  };

  return (
    <div className="bg-background rounded-lg shadow-xl p-8 max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-foreground mb-6">
        Demande de Contact
      </h3>

      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-foreground mb-2">Demande envoyée !</h4>
          <p className="text-foreground/70">Nous vous contacterons bientôt pour discuter de votre projet.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email professionnel
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-colors disabled:bg-foreground/5 disabled:text-foreground/50 disabled:cursor-not-allowed"
              placeholder="votre.email@entreprise.fr"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent text-accent-content hover:bg-accent-600 disabled:bg-foreground/30 disabled:text-foreground/70 disabled:cursor-not-allowed font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2 focus:ring-offset-background btn"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Envoi en cours...
              </div>
            ) : (
              'Envoyer Demande'
            )}
          </button>
        </form>
      )}

      <p className="text-sm text-foreground/60 mt-4">
        Nous respectons votre confidentialité et ne partageons jamais vos données.
      </p>
    </div>
  );
};

export default CTAForm;
