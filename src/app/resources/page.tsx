import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ressources IA | Kokotajlo – Guides AI Act GDPR pour Entreprises FR',
  description: 'Blog sur agents IA conformes RAG/MCP. Insights pour pilotes industriels en France.',
  keywords: ['blog IA France', 'AI Act guide', 'GDPR LLMs entreprise', 'pilotes IA français', 'agents IA conformes'],
  openGraph: {
    title: 'Ressources IA | Kokotajlo – Guides AI Act GDPR pour Entreprises FR',
    description: 'Blog sur agents IA conformes RAG/MCP. Insights pour pilotes industriels en France.',
    url: '/resources',
    siteName: 'Kokotajlo',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function BlogPage() {
  const t = useTranslations('blog');
  const posts = t.raw('posts') as Array<{
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    read_time: string;
  }>;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index: number) => (
              <article
                key={index}
                className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                role="article"
                aria-labelledby={`post-title-${index}`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-foreground/60 mb-3">
                    <time dateTime={post.date} className="font-medium">
                      {new Date(post.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>{post.read_time}</span>
                  </div>
                  <h2
                    id={`post-title-${index}`}
                    className="text-xl font-semibold text-foreground mb-3 leading-tight"
                  >
                    <Link
                      href={`/resources/${post.slug}`}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/resources/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary-600 font-medium transition-colors duration-200 group"
                    aria-label={`Lire l'article complet: ${post.title}`}
                  >
                    {t('read_more')}
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button
              className="bg-background text-primary border border-primary hover:bg-primary hover:text-primary-content px-6 py-3 rounded-lg font-medium transition-colors duration-200 btn"
              aria-label="Charger plus d'articles"
            >
              {t('load_more')}
            </button>
          </div>
        </div>
      </section>

      {/* Chatbot Teaser Section */}
      <section className="py-16 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-accent-content font-bold text-xl">💬</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t('chatbot_teaser.title')}
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              {t('chatbot_teaser.subtitle')}
            </p>
            <Link
              href="/#chat"
              className="bg-accent text-accent-content hover:bg-accent-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
              aria-label="Ouvrir le chatbot pour poser des questions"
            >
              Commencer la discussion
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Intéressé par nos solutions IA ?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Découvrez comment nos agents IA peuvent transformer vos processus industriels
              tout en respectant les normes européennes les plus strictes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-primary-content hover:bg-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
              >
                Discuter un projet
              </Link>
              <Link
                href="/services"
                className="bg-background text-primary border border-primary hover:bg-primary hover:text-primary-content px-8 py-3 rounded-lg font-medium transition-colors duration-200 btn"
              >
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



