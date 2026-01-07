import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, TreePine, Flower, Droplets, Sun, Palette, ArrowRight, Leaf, Award, Users, Lightbulb, Wrench, Heart, Phone, Mail, CheckCircle } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';

const Diensten = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Tuinontwerp",
      description: "Unieke ontwerpen die perfect aansluiten bij uw wensen, budget en de natuurlijke omgeving van uw tuin.",
      features: ["3D visualisaties (tegen meerkosten via offerte)", "Plantenschema's", "Materiaaladvies", "Seizoensplanning"],
      gradient: "from-primary-700 to-primary-600"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Tuinaanleg",
      description: "Professionele aanleg van uw droomtuin met hoogwaardige materialen en vakkundige uitvoering.",
      features: ["Grondvoorbereiding", "Beplanting & gazon", "Verharding & paden", "Tuinverlichting"],
      gradient: "from-primary-600 to-primary-500"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Tuinonderhoud",
      description: "Regelmatig onderhoud zorgt ervoor dat uw tuin het hele jaar door op zijn mooist blijft.",
      features: ["Seizoensnoei", "Gazonverzorging", "Onkruidbestrijding", "Bemesting"],
      gradient: "from-primary-600 to-primary-500"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Irrigatiesystemen",
      description: "Slimme bewateringssystemen voor optimale plantverzorging en waterbesparende oplossingen.",
      features: ["Druppelirrigatie", "Sproeisystemen", "Slimme timers", "Regenwateropvang"],
      gradient: "from-primary-800 to-primary-700"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Tuinverlichting",
      description: "Sfeervolle verlichting die uw tuin ook 's avonds tot leven brengt en voor veiligheid zorgt.",
      features: ["LED spotverlichting", "Padverlichting", "Sfeerverlichting", "Slimme bediening"],
      gradient: "from-accent-600 to-accent-500"
    },
    {
      icon: <Flower className="w-8 h-8" />,
      title: "Plantadvies",
      description: "Deskundig advies over plantkeuze, verzorging en seizoensplanning voor een bloeiende tuin.",
      features: ["Bodemanalyse", "Plantselectie", "Verzorgingsschema", "Ziektepreventie"],
      gradient: "from-primary-600 to-primary-500"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src="/images/hero-garden.jpg"
            alt="Professionele Tuinonderhoud Koet Tuin & Boomzorg"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 text-left text-white">
          <AnimationObserver>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
              Premium complete tuinzorg
              <span className="block text-white mt-2">van A tot Z</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              Complete tuinzorg van ontwerp tot onderhoud door vakkundige specialisten
            </p>
          </AnimationObserver>
          
        </div>
      </section>

      {/* Intro Section - Two Column */}
      <section className="pt-16 py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <AnimationObserver animationType="slide-left">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight tracking-tight">
                  Vakkundige diensten voor
                  <span className="block text-primary-900 mt-2">elke tuinwens</span>
                </h2>
                
                <p className="text-lg text-stone-600 leading-relaxed">
                  Wij begeleiden u van het eerste ontwerp tot het dagelijkse onderhoud. 
                  Elke dienst wordt uitgevoerd met vakmanschap en oog voor detail.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Van ontwerp tot realisatie",
                    "Vakkundige uitvoering",
                    "Persoonlijke begeleiding",
                    "30+ jaar ervaring"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-stone-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-primary-900 to-primary-800 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-primary-800 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  GRATIS OFFERTE
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </div>
            </AnimationObserver>

            <AnimationObserver animationType="slide-right">
              <div className="relative">
                <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-stone-900/5">
                  <img
                    src="/images/diensten-vakkundig.jpeg"
                    alt="Professionele tuindiensten Koet Tuin & Boomzorg"
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50 ring-1 ring-stone-900/5">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-900 mb-2">6</div>
                    <div className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Diensten</div>
                  </div>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-24 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {services.map((service, index) => (
              <AnimationObserver 
                key={index} 
                delay={index * 100}
              >
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-4 group-hover:text-primary-900 transition-colors duration-300">{service.title}</h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="text-stone-600 space-y-2 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimationObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Two Column */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <AnimationObserver animationType="slide-left">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight tracking-tight">
                  Ons <span className="text-primary-900">Werkproces</span>
                </h2>
                
                <p className="text-lg text-stone-600 leading-relaxed">
                  Van eerste kennismaking tot oplevering - zo werken wij aan uw droomtuin
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Kennismaking",
                      description: "Vrijblijvend gesprek over uw wensen, budget en mogelijkheden."
                    },
                    {
                      step: "2",
                      title: "Ontwerp",
                      description: "Uitgewerkt tuinontwerp met plantenschema's. 3D visualisaties mogelijk tegen meerkosten."
                    },
                    {
                      step: "3",
                      title: "Uitvoering", 
                      description: "Professionele aanleg door ons ervaren team van specialisten."
                    },
                    {
                      step: "4",
                      title: "Nazorg",
                      description: "Onderhoud en advies om uw tuin in optimale conditie te houden."
                    }
                  ].map((process, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-900 to-primary-700 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                        {process.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-stone-900 mb-2">{process.title}</h3>
                        <p className="text-stone-600 leading-relaxed">{process.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver animationType="slide-right">
              <div className="bg-stone-50 rounded-2xl p-10 shadow-soft">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-stone-900 mb-4">Persoonlijke Aanpak</h3>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    Elk project is uniek. Daarom werken wij altijd op maat, 
                    afgestemd op uw specifieke wensen en budget.
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Gratis adviesgesprek",
                    "Transparante prijsopbouw",
                    "Vaste contactpersoon",
                    "Nazorg en garantie"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Link 
                    to="/contact"
                    className="text-primary-900 hover:text-primary-800 transition-colors font-semibold inline-flex items-center"
                  >
                    Plan een kennismaking
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

    </>
  );
};

export default Diensten;