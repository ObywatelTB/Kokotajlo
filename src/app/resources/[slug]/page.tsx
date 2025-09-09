import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock post data - in production, this would come from a CMS/database
const getPostBySlug = (slug: string, locale: string) => {
  const posts: Record<string, Record<string, {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    content: string;
  }>> = {
    'ai-act-guide': {
      fr: {
        title: 'Naviguer l\'AI Act pour Agents IA Industriels',
        excerpt: 'Comment nos solutions RAG/MCP assurent conformité dès le design. Découvrez les implications pratiques pour votre déploiement d\'agents IA en entreprise.',
        date: '2025-09-01',
        readTime: '8 min de lecture',
        content: `
          <h2>Introduction à l'AI Act Européen</h2>
          <p>L'AI Act européen représente le cadre réglementaire le plus complet au monde pour l'intelligence artificielle. Adopté en mars 2024, ce règlement vise à garantir que les systèmes d'IA respectent les droits fondamentaux et la sécurité des citoyens européens.</p>

          <h2>Classification des Systèmes IA</h2>
          <p>L'AI Act classe les systèmes d'IA selon leur niveau de risque :</p>
          <ul>
            <li><strong>Risque minimal</strong> : Jeux, spam filters</li>
            <li><strong>Risque limité</strong> : Chatbots, deepfakes</li>
            <li><strong>Risque élevé</strong> : Infrastructures critiques, éducation, emploi</li>
            <li><strong>Risque inacceptable</strong> : Systèmes de notation sociale, manipulation subliminale</li>
          </ul>

          <h2>Comment nos Solutions Assurent la Conformité</h2>
          <p>Nos agents IA industriels sont conçus avec la conformité AI Act en tête :</p>
          <ul>
            <li><strong>Transparence</strong> : Documentation complète des décisions</li>
            <li><strong>Traçabilité</strong> : Audit logs détaillés</li>
            <li><strong>Sécurité</strong> : Protection des données sensibles</li>
            <li><strong>Contrôle humain</strong> : Possibilité d'intervention manuelle</li>
          </ul>

          <h2>Implications pour Votre Déploiement</h2>
          <p>La conformité AI Act n'est pas seulement une obligation légale, c'est aussi un avantage concurrentiel. Les entreprises qui adoptent ces standards dès maintenant seront mieux positionnées pour :</p>
          <ul>
            <li>Réduire les risques juridiques</li>
            <li>Renforcer la confiance des clients</li>
            <li>Accélérer l'adoption de l'IA</li>
            <li>Préparer les évolutions futures du cadre réglementaire</li>
          </ul>

          <h2>Prochaines Étapes</h2>
          <p>Notre équipe d'experts peut vous accompagner dans l'évaluation de vos systèmes d'IA et la mise en place des mesures de conformité nécessaires.</p>
        `
      },
      en: {
        title: 'Navigating AI Act for Industrial AI Agents',
        excerpt: 'How our RAG/MCP solutions ensure compliance from design. Discover practical implications for your enterprise AI agent deployment.',
        date: '2025-09-01',
        readTime: '8 min read',
        content: `
          <h2>Introduction to the European AI Act</h2>
          <p>The European AI Act represents the world's most comprehensive regulatory framework for artificial intelligence. Adopted in March 2024, this regulation aims to ensure that AI systems respect fundamental rights and European citizens' safety.</p>

          <h2>AI Systems Classification</h2>
          <p>The AI Act classifies AI systems according to their risk level:</p>
          <ul>
            <li><strong>Minimal risk</strong>: Games, spam filters</li>
            <li><strong>Limited risk</strong>: Chatbots, deepfakes</li>
            <li><strong>High risk</strong>: Critical infrastructure, education, employment</li>
            <li><strong>Unacceptable risk</strong>: Social scoring systems, subliminal manipulation</li>
          </ul>

          <h2>How Our Solutions Ensure Compliance</h2>
          <p>Our industrial AI agents are designed with AI Act compliance in mind:</p>
          <ul>
            <li><strong>Transparency</strong>: Complete decision documentation</li>
            <li><strong>Traceability</strong>: Detailed audit logs</li>
            <li><strong>Security</strong>: Protection of sensitive data</li>
            <li><strong>Human control</strong>: Possibility of manual intervention</li>
          </ul>

          <h2>Implications for Your Deployment</h2>
          <p>AI Act compliance is not just a legal obligation, it's also a competitive advantage. Companies that adopt these standards now will be better positioned to:</p>
          <ul>
            <li>Reduce legal risks</li>
            <li>Strengthen customer trust</li>
            <li>Accelerate AI adoption</li>
            <li>Prepare for future regulatory developments</li>
          </ul>

          <h2>Next Steps</h2>
          <p>Our expert team can guide you through the evaluation of your AI systems and the implementation of necessary compliance measures.</p>
        `
      }
    },
    'gdpr-llms-locaux': {
      fr: {
        title: 'GDPR et LLMs Locaux : Sécuriser Vos Données d\'Entreprise',
        excerpt: 'Intégration IoT avec raisonnement IA – Exemples pour manufacturing/vending. Pilotes personnalisés pour protection des données sensibles.',
        date: '2025-09-05',
        readTime: '6 min de lecture',
        content: `
          <h2>Le Défi des Données Sensibles en IA</h2>
          <p>Les grands modèles de langage (LLMs) offrent des capacités extraordinaires, mais leur utilisation soulève des questions cruciales de protection des données personnelles et sensibles.</p>

          <h2>Pourquoi les LLMs Locaux ?</h2>
          <p>L'hébergement local des LLMs présente plusieurs avantages :</p>
          <ul>
            <li><strong>Souveraineté des données</strong> : Les informations restent sur vos serveurs</li>
            <li><strong>Confidentialité garantie</strong> : Pas de transmission vers des services tiers</li>
            <li><strong>Performance optimale</strong> : Latence réduite pour les cas d'usage temps réel</li>
            <li><strong>Contrôle total</strong> : Gestion complète des mises à jour et optimisations</li>
          </ul>

          <h2>Intégration IoT et Raisonnement IA</h2>
          <p>Nos solutions combinent LLMs locaux avec l'intégration IoT :</p>
          <h3>Cas d'usage Manufacturing</h3>
          <ul>
            <li>Maintenance prédictive basée sur les données des capteurs</li>
            <li>Optimisation des chaînes de production</li>
            <li>Détection d'anomalies en temps réel</li>
            <li>Contrôle qualité automatisé</li>
          </ul>

          <h3>Cas d'usage Vending Machines</h3>
          <ul>
            <li>Gestion intelligente des stocks</li>
            <li>Maintenance prédictive des équipements</li>
            <li>Optimisation des trajets de réapprovisionnement</li>
            <li>Analyse comportementale des utilisateurs</li>
          </ul>

          <h2>Conformité RGPD Intégrée</h2>
          <p>Nos solutions respectent les principes RGPD :</p>
          <ul>
            <li><strong>Minimisation des données</strong> : Traitement uniquement des données nécessaires</li>
            <li><strong>Consentement éclairé</strong> : Transparence sur l'utilisation des données</li>
            <li><strong>Droit à l'effacement</strong> : Possibilité de supprimer les données utilisateur</li>
            <li><strong>Auditabilité</strong> : Traçabilité complète des traitements</li>
          </ul>

          <h2>ROI et Avantages Concurrentiels</h2>
          <p>L'investissement dans des LLMs locaux génère un retour sur investissement rapide :</p>
          <ul>
            <li>Réduction des coûts de maintenance (jusqu'à 30%)</li>
            <li>Amélioration de la productivité opérationnelle</li>
            <li>Avantage concurrentiel sur le marché européen</li>
            <li>Préparation aux futures réglementations</li>
          </ul>
        `
      },
      en: {
        title: 'GDPR and Local LLMs: Securing Your Enterprise Data',
        excerpt: 'IoT integration with AI reasoning – Examples for manufacturing/vending. Custom pilots for sensitive data protection.',
        date: '2025-09-05',
        readTime: '6 min read',
        content: `
          <h2>The Challenge of Sensitive Data in AI</h2>
          <p>Large Language Models (LLMs) offer extraordinary capabilities, but their use raises crucial questions about the protection of personal and sensitive data.</p>

          <h2>Why Local LLMs?</h2>
          <p>Local hosting of LLMs offers several advantages:</p>
          <ul>
            <li><strong>Data sovereignty</strong>: Information stays on your servers</li>
            <li><strong>Guaranteed privacy</strong>: No transmission to third-party services</li>
            <li><strong>Optimal performance</strong>: Reduced latency for real-time use cases</li>
            <li><strong>Full control</strong>: Complete management of updates and optimizations</li>
          </ul>

          <h2>IoT Integration and AI Reasoning</h2>
          <p>Our solutions combine local LLMs with IoT integration:</p>
          <h3>Manufacturing Use Cases</h3>
          <ul>
            <li>Sensor data-based predictive maintenance</li>
            <li>Production line optimization</li>
            <li>Real-time anomaly detection</li>
            <li>Automated quality control</li>
          </ul>

          <h3>Vending Machine Use Cases</h3>
          <ul>
            <li>Intelligent inventory management</li>
            <li>Equipment predictive maintenance</li>
            <li>Restocking route optimization</li>
            <li>User behavioral analysis</li>
          </ul>

          <h2>Integrated GDPR Compliance</h2>
          <p>Our solutions respect GDPR principles:</p>
          <ul>
            <li><strong>Data minimization</strong>: Processing only necessary data</li>
            <li><strong>Informed consent</strong>: Transparency about data usage</li>
            <li><strong>Right to erasure</strong>: Ability to delete user data</li>
            <li><strong>Auditability</strong>: Complete traceability of processing</li>
          </ul>

          <h2>ROI and Competitive Advantages</h2>
          <p>Investment in local LLMs generates rapid return on investment:</p>
          <ul>
            <li>Reduction in maintenance costs (up to 30%)</li>
            <li>Improvement in operational productivity</li>
            <li>Competitive advantage in the European market</li>
            <li>Preparation for future regulations</li>
          </ul>
        `
      }
    },
    'pilote-geant-francais': {
      fr: {
        title: 'Cas d\'Étude : Pilote IA pour Géant Français (€200k + Shares)',
        excerpt: 'Remplacement tâches humaines via MCP – Notre approche duo polono-chinois pour scaling. Premier déploiement réussi avec retour sur investissement.',
        date: '2025-09-09',
        readTime: '10 min de lecture',
        content: `
          <h2>Contexte du Projet</h2>
          <p>Un leader français de la distribution, présent dans plus de 15 pays européens, cherchait à optimiser ses processus logistiques et à réduire ses coûts opérationnels.</p>

          <h2>Le Défi</h2>
          <p>Le client faisait face à plusieurs challenges :</p>
          <ul>
            <li>Coûts de main-d'œuvre croissants</li>
            <li>Erreurs dans les processus de picking et d'inventaire</li>
            <li>Difficulté à analyser les données de vente en temps réel</li>
            <li>Besoin d'optimisation des chaînes d'approvisionnement</li>
          </ul>

          <h2>Notre Approche Duo Polono-Chinois</h2>
          <p>Nous avons combiné nos expertises complémentaires :</p>
          <h3>Expertise Technique Polonaise</h3>
          <ul>
            <li>Architecture robuste des systèmes IA</li>
            <li>Implémentation RAG pour traitement documentaire</li>
            <li>Développement MCP pour orchestration d'agents</li>
            <li>Intégration avec systèmes legacy existants</li>
          </ul>

          <h3>Expertise Commerciale Chinoise</h3>
          <ul>
            <li>Compréhension profonde du marché européen</li>
            <li>Négociation et gestion des partenariats</li>
            <li>Stratégie de déploiement et adoption</li>
            <li>Optimisation des relations client</li>
          </ul>

          <h2>Le Pilote : Phase 1 (€200k + 10% Equity)</h2>
          <p>Nous avons commencé par un pilote ciblé :</p>
          <h3>Objectifs</h3>
          <ul>
            <li>Automatisation du processus de réapprovisionnement</li>
            <li>Optimisation des inventaires par magasin</li>
            <li>Prédiction des pics de demande saisonniers</li>
            <li>Réduction des pertes dues aux invendus</li>
          </ul>

          <h3>Résultats Après 6 Mois</h3>
          <ul>
            <li><strong>Réduction des coûts</strong> : -25% sur les processus automatisés</li>
            <li><strong>Précision inventaire</strong> : Amélioration de 40%</li>
            <li><strong>Temps de traitement</strong> : Réduction de 60%</li>
            <li><strong>Satisfaction client</strong> : Amélioration de 15%</li>
          </ul>

          <h2>Technologies Déployées</h2>
          <h3>MCP (Model Context Protocol)</h3>
          <p>Orchestration d'agents spécialisés pour :</p>
          <ul>
            <li>Analyse des données de vente</li>
            <li>Gestion des commandes fournisseurs</li>
            <li>Optimisation des livraisons</li>
            <li>Maintenance prédictive des équipements</li>
          </ul>

          <h3>RAG (Retrieval-Augmented Generation)</h3>
          <p>Traitement intelligent des documents :</p>
          <ul>
            <li>Extraction d'informations des factures</li>
            <li>Analyse des contrats fournisseurs</li>
            <li>Génération de rapports automatisés</li>
            <li>Recherche sémantique dans la base de connaissances</li>
          </ul>

          <h2>Le Modèle Économique</h2>
          <p>Notre approche equity-friendly :</p>
          <ul>
            <li><strong>Pilote payant</strong> : €200k pour la phase initiale</li>
            <li><strong>Partage des risques</strong> : 10% equity dans le projet</li>
            <li><strong>ROI partagé</strong> : Récompense basée sur les résultats</li>
            <li><strong>Scalabilité garantie</strong> : Modèle reproductible</li>
          </ul>

          <h2>Impact et Perspectives</h2>
          <h3>Résultats Quantitatifs</h3>
          <ul>
            <li>ROI de 300% sur la première année</li>
            <li>Économies de €2.4M sur les coûts opérationnels</li>
            <li>Augmentation de 18% du chiffre d'affaires par magasin</li>
            <li>Réduction de 35% des erreurs de picking</li>
          </ul>

          <h3>Impact Qualitatif</h3>
          <ul>
            <li>Amélioration de la satisfaction employé</li>
            <li>Meilleure expérience client</li>
            <li>Positionnement innovant sur le marché</li>
            <li>Préparation aux défis futurs de la supply chain</li>
          </ul>

          <h2>Leçons Apprises et Recommandations</h2>
          <h3>Points Clés de Réussite</h3>
          <ul>
            <li>Approche itérative avec feedback continu</li>
            <li>Formation approfondie des équipes</li>
            <li>Communication transparente sur les objectifs</li>
            <li>Mesure régulière des KPIs</li>
          </ul>

          <h3>Recommandations pour d'Autres Entreprises</h3>
          <ul>
            <li>Commencer par un pilote limité en scope</li>
            <li>Impliquer toutes les parties prenantes</li>
            <li>Prévoir un accompagnement post-déploiement</li>
            <li>Mesurer l'impact sur tous les niveaux de l'organisation</li>
          </ul>

          <h2>Prochaines Étapes</h2>
          <p>Ce pilote réussi ouvre la voie à :</p>
          <ul>
            <li>Déploiement à l'échelle nationale</li>
            <li>Extension à d'autres processus métier</li>
            <li>Intégration avec d'autres systèmes d'IA</li>
            <li>Partenariats avec d'autres grands comptes français</li>
          </ul>
        `
      },
      en: {
        title: 'Case Study: AI Pilot for French Giant (€200k + Shares)',
        excerpt: 'Human task replacement via MCP – Our Polish-Chinese duo approach for scaling. First successful deployment with ROI.',
        date: '2025-09-09',
        readTime: '10 min read',
        content: `
          <h2>Project Context</h2>
          <p>A French distribution leader, present in more than 15 European countries, sought to optimize its logistics processes and reduce operational costs.</p>

          <h2>The Challenge</h2>
          <p>The client faced several challenges:</p>
          <ul>
            <li>Increasing labor costs</li>
            <li>Errors in picking and inventory processes</li>
            <li>Difficulty analyzing sales data in real-time</li>
            <li>Need to optimize supply chains</li>
          </ul>

          <h2>Our Polish-Chinese Duo Approach</h2>
          <p>We combined our complementary expertise:</p>
          <h3>Polish Technical Expertise</h3>
          <ul>
            <li>Robust AI system architecture</li>
            <li>RAG implementation for document processing</li>
            <li>MCP development for agent orchestration</li>
            <li>Integration with existing legacy systems</li>
          </ul>

          <h3>Chinese Business Expertise</h3>
          <ul>
            <li>Deep understanding of the European market</li>
            <li>Partnership negotiation and management</li>
            <li>Deployment strategy and adoption</li>
            <li>Client relationship optimization</li>
          </ul>

          <h2>The Pilot: Phase 1 (€200k + 10% Equity)</h2>
          <p>We started with a targeted pilot:</p>
          <h3>Objectives</h3>
          <ul>
            <li>Replenishment process automation</li>
            <li>Store-by-store inventory optimization</li>
            <li>Seasonal demand peak prediction</li>
            <li>Reduction of losses due to unsold goods</li>
          </ul>

          <h3>Results After 6 Months</h3>
          <ul>
            <li><strong>Cost reduction</strong>: -25% on automated processes</li>
            <li><strong>Inventory accuracy</strong>: 40% improvement</li>
            <li><strong>Processing time</strong>: 60% reduction</li>
            <li><strong>Customer satisfaction</strong>: 15% improvement</li>
          </ul>

          <h2>Deployed Technologies</h2>
          <h3>MCP (Model Context Protocol)</h3>
          <p>Orchestration of specialized agents for:</p>
          <ul>
            <li>Sales data analysis</li>
            <li>Supplier order management</li>
            <li>Delivery optimization</li>
            <li>Equipment predictive maintenance</li>
          </ul>

          <h3>RAG (Retrieval-Augmented Generation)</h3>
          <p>Intelligent document processing:</p>
          <ul>
            <li>Information extraction from invoices</li>
            <li>Supplier contract analysis</li>
            <li>Automated report generation</li>
            <li>Semantic search in knowledge base</li>
          </ul>

          <h2>The Economic Model</h2>
          <p>Our equity-friendly approach:</p>
          <ul>
            <li><strong>Paid pilot</strong>: €200k for the initial phase</li>
            <li><strong>Risk sharing</strong>: 10% equity in the project</li>
            <li><strong>Shared ROI</strong>: Reward based on results</li>
            <li><strong>Guaranteed scalability</strong>: Reproducible model</li>
          </ul>

          <h2>Impact and Perspectives</h2>
          <h3>Quantitative Results</h3>
          <ul>
            <li>300% ROI in the first year</li>
            <li>€2.4M savings on operational costs</li>
            <li>18% increase in store revenue</li>
            <li>35% reduction in picking errors</li>
          </ul>

          <h3>Qualitative Impact</h3>
          <ul>
            <li>Improved employee satisfaction</li>
            <li>Better customer experience</li>
            <li>Innovative market positioning</li>
            <li>Preparation for future supply chain challenges</li>
          </ul>

          <h2>Lessons Learned and Recommendations</h2>
          <h3>Key Success Factors</h3>
          <ul>
            <li>Iterative approach with continuous feedback</li>
            <li>Comprehensive team training</li>
            <li>Transparent communication on objectives</li>
            <li>Regular KPI measurement</li>
          </ul>

          <h3>Recommendations for Other Companies</h3>
          <ul>
            <li>Start with a limited scope pilot</li>
            <li>Involve all stakeholders</li>
            <li>Plan post-deployment support</li>
            <li>Measure impact at all organizational levels</li>
          </ul>

          <h2>Next Steps</h2>
          <p>This successful pilot opens the way to:</p>
          <ul>
            <li>National scale deployment</li>
            <li>Extension to other business processes</li>
            <li>Integration with other AI systems</li>
            <li>Partnerships with other major French accounts</li>
          </ul>
        `
      }
    }
  };

  return posts[slug]?.[locale] || null;
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = 'fr'; // Default to French, could be dynamic based on URL
  const post = getPostBySlug(params.slug, locale);

  if (!post) {
    return {
      title: 'Article non trouvé | Kokotajlo',
    };
  }

  return {
    title: `${post.title} | Kokotajlo Blog`,
    description: post.excerpt,
    keywords: ['blog IA', 'agents IA', 'RAG MCP', 'AI Act', 'GDPR', 'entreprise française'],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/resources/${params.slug}`,
      siteName: 'Kokotajlo',
      locale: 'fr_FR',
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const locale = 'fr'; // Default to French, could be dynamic
  const post = getPostBySlug(params.slug, locale);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-foreground/60 mb-6">
              <time dateTime={post.date} className="font-medium">
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Navigation */}
      <section className="py-16 bg-foreground/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/resources"
              className="flex items-center gap-2 text-primary hover:text-primary-600 font-medium transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux ressources
            </Link>
            <div className="flex gap-4">
              <button className="text-foreground/60 hover:text-primary transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="text-foreground/60 hover:text-primary transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles / CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Intéressé par nos solutions IA ?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Découvrez comment nous pouvons transformer vos processus industriels
            avec des agents IA conformes et performants.
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
      </section>
    </div>
  );
}
