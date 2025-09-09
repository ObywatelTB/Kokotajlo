import CTAForm from '@/components/CTAForm';
import InlineChat from '@/components/InlineChat';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Agents IA Conformes pour les Entreprises Françaises
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos solutions d&apos;IA locale avec LLMs, RAG et MCP – Prêtes pour l&apos;AI Act et GDPR.
            Automatisez vos processus industriels et IoT avec efficacité.
          </p>

          {/* Inline expanding chat just below hero subheader */}
          <div className="mt-6">
            <InlineChat />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-accent text-accent-content font-semibold rounded-lg hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2 focus:ring-offset-background shadow-md hover:shadow-lg transition-all duration-200 btn"
            >
              Découvrir Nos Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-background text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-content focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200 btn"
            >
              Discuter Partenariat
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            À Propos de Nous
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Tobias */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-black mb-4">Tobias Bajek</h3>
              <p className="text-foreground/70 leading-relaxed">
                Ingénieur logiciel polonais expérimenté, passionné par l&apos;IA scalable.
                Expert en architectures de systèmes distribués et en développement d&apos;agents IA conformes aux réglementations européennes.
              </p>
            </div>

            {/* Right Column - Mengran */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-black mb-4">Mengran Zhao</h3>
              <p className="text-foreground/70 leading-relaxed">
                Développeuse d&apos;affaires chinoise de 33 ans, experte en marchés internationaux.
                Spécialiste en expansion commerciale et en relations avec les entreprises européennes.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Notre Mission</h3>
              <p className="text-lg text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                Duo polono-chinois créant des agents IA pour remplacer les tâches humaines dans les grandes entreprises françaises –
                Premier pilote personnalisé, puis scaling. Nous combinons l&apos;expertise technique européenne avec l&apos;agilité commerciale asiatique
                pour offrir des solutions d&apos;IA véritablement conformes et efficaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-4 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Nos Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Service Card 1 - Local AI Agents */}
            <div className="bg-background p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Agents IA Locaux
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                LLMs hébergés en local pour sécurité et performance. RAG pour données d&apos;entreprise sécurisées.
                Protégez vos informations sensibles tout en bénéficiant d&apos;une IA puissante et personnalisée.
              </p>
            </div>

            {/* Service Card 2 - Industrial Automation */}
            <div className="bg-background p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Automatisation Industrielle
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Extension IoT avec raisonnement IA – Remplacez les tâches humaines dans vending/manufacturing.
                Optimisez vos processus industriels avec des agents intelligents qui apprennent et s&apos;adaptent.
              </p>
            </div>

            {/* Service Card 3 - Compliance Guarantee */}
            <div className="bg-background p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Conformité Garantie
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Prêts AI Act & GDPR dès le départ. Pilotes personnalisés pour grandes firmes françaises (€200k + shares).
                Démarrez votre transformation digitale en toute sérénité réglementaire.
              </p>
            </div>
          </div>

          {/* Services CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-accent text-accent-content hover:bg-accent-600 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl btn"
            >
              Proposer un Pilote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partenariat avec Kokotajlo
          </h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Contactez-nous pour un pilote personnalisé. Ensemble, révolutionnons votre entreprise
            avec des agents IA conformes et performants.
          </p>

          {/* CTA Form */}
          <CTAForm />
        </div>
      </section>
    </div>
  );
}
