import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Agents IA Conformes pour les Entreprises Françaises
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos solutions d'IA locale avec LLMs, RAG et MCP – Prêtes pour l'AI Act et GDPR.
            Automatisez vos processus industriels et IoT avec efficacité.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-accent-green text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200 group"
            >
              Découvrir Nos Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-primary-blue text-primary-blue font-semibold rounded-lg hover:bg-primary-blue hover:text-white transition-colors duration-200 group"
            >
              Discuter Partenariat
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Placeholder for AI network image */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
              <div className="aspect-video bg-gradient-to-r from-primary-blue/20 to-accent-green/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-blue/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">🤖</span>
                  </div>
                  <p className="text-gray-600 font-medium">Réseau d'agents IA conformes</p>
                  <p className="text-sm text-gray-500 mt-1">Visualisation interactive à venir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            À Propos de Nous
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Tobias */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-primary-blue mb-4">Tobias Bajek</h3>
              <p className="text-gray-700 leading-relaxed">
                Ingénieur logiciel polonais expérimenté, passionné par l'IA scalable.
                Expert en architectures de systèmes distribués et en développement d'agents IA conformes aux réglementations européennes.
              </p>
            </div>

            {/* Right Column - Mengran */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-accent-green mb-4">Mengran Zhao</h3>
              <p className="text-gray-700 leading-relaxed">
                Développeuse d'affaires chinoise de 33 ans, experte en marchés internationaux.
                Spécialiste en expansion commerciale et en relations avec les entreprises européennes.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-blue/10 to-accent-green/10 p-8 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Notre Mission</h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Duo polono-chinois créant des agents IA pour remplacer les tâches humaines dans les grandes entreprises françaises –
                Premier pilote personnalisé, puis scaling. Nous combinons l'expertise technique européenne avec l'agilité commerciale asiatique
                pour offrir des solutions d'IA véritablement conformes et efficaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Nos Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Service Card 1 - Local AI Agents */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Agents IA Locaux
              </h3>
              <p className="text-gray-600 leading-relaxed">
                LLMs hébergés en local pour sécurité et performance. RAG pour données d'entreprise sécurisées.
                Protégez vos informations sensibles tout en bénéficiant d'une IA puissante et personnalisée.
              </p>
            </div>

            {/* Service Card 2 - Industrial Automation */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent-green/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Automatisation Industrielle
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Extension IoT avec raisonnement IA – Remplacez les tâches humaines dans vending/manufacturing.
                Optimisez vos processus industriels avec des agents intelligents qui apprennent et s'adaptent.
              </p>
            </div>

            {/* Service Card 3 - Compliance Guarantee */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Conformité Garantie
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Prêts AI Act & GDPR dès le départ. Pilotes personnalisés pour grandes firmes françaises (€200k + shares).
                Démarrez votre transformation digitale en toute sérénité réglementaire.
              </p>
            </div>
          </div>

          {/* Services CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-accent-green hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Proposer un Pilote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
