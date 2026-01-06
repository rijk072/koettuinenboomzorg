import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, TreePine, Star } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-garden.jpg"
            alt="Koet Tuin & Boomzorg Premium Hovenierswerk"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 text-left text-white">
          <AnimationObserver>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
              Premium tuinrealisatie
              <span className="block text-white mt-2">voor de veeleisende klant</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              Meer dan 35 jaar ervaring in vakkundige tuinaanleg, onderhoud en boomverzorging. 
              European Tree Worker gecertificeerd voor de hoogste kwaliteitsstandaarden.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/contact"
                className="bg-white text-primary-900 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-neutral-100 transition-all duration-300 transform hover:scale-105 shadow-premium-lg inline-flex items-center justify-center uppercase tracking-wider"
              >
                GRATIS OFFERTE
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
              <a 
                href="tel:0653747696"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center uppercase tracking-wider backdrop-blur-sm"
              >
                BEL DIRECT
              </a>
            </div>
          </AnimationObserver>
        </div>
      </section>

      {/* Vakmanschap Section */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="container-wide">
          <AnimationObserver>
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 tracking-tight text-stone-900">
                Waarom Kiezen Voor <span className="text-primary-900">Koet Tuin & Boomzorg</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
                Ontdek waarom klanten al meer dan 35 jaar voor ons kiezen
              </p>
            </div>
          </AnimationObserver>

          <div className="grid lg:grid-cols-3 gap-8 xl:gap-12">
            <AnimationObserver animationType="slide-left" delay={100}>
              <div className="text-center card-premium p-10 hover-lift group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-premium group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-stone-900 group-hover:text-primary-900 transition-colors duration-300">Premium Vakmanschap</h3>
                <p className="text-stone-600 leading-relaxed">
                  Meer dan 35 jaar ervaring in tuinontwerp en -realisatie. 
                  European Tree Worker gecertificeerd voor de hoogste kwaliteitsstandaarden.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver delay={200}>
              <div className="text-center card-premium p-10 hover-lift group">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-premium group-hover:scale-110 transition-transform duration-500">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-stone-900 group-hover:text-primary-900 transition-colors duration-300">Volledig Ontzorgd</h3>
                <p className="text-stone-600 leading-relaxed">
                  Van concept tot realisatie en onderhoud. Wij regelen alles van A tot Z 
                  voor uw droomtuin met persoonlijke begeleiding.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver animationType="slide-right" delay={300}>
              <div className="text-center card-premium p-10 hover-lift group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-800 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-premium group-hover:scale-110 transition-transform duration-500">
                  <TreePine className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-stone-900 group-hover:text-primary-900 transition-colors duration-300">Duurzame Kwaliteit</h3>
                <p className="text-stone-600 leading-relaxed">
                  Wij zijn niet tevreden met gemiddeld. Bij ons gaat het om perfectie 
                  en tuinen die generaties meegaan.
                </p>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* B2B Section - ECOstyle Dealer */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800">
        <div className="container-wide">
          <AnimationObserver>
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ECOstyle dealer voor professionele hoveniers
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Volledige ECOstyle productlijn op voorraad in Bakkum en omgeving Noord-Holland. Scherpe handelsprijzen
                vanaf 10 stuks, levering binnen 48 uur.
              </p>
              <Link
                to="/voor-hoveniers"
                className="bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neutral-100 transition-all duration-300 transform hover:scale-105 shadow-premium-lg inline-flex items-center"
              >
                Bekijk Groothandelsprijzen
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </AnimationObserver>
        </div>
      </section>

      {/* Vakmanschap Section */}
      <section className="py-20 lg:py-24 bg-stone-50 relative">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <AnimationObserver animationType="slide-left">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight tracking-tight">
                  Premium vakmanschap voor
                  <span className="block text-primary-900 mt-2">elke tuinwens</span>
                </h2>
                
                <p className="text-lg text-stone-600 leading-relaxed">
                  Met meer dan 35 jaar ervaring realiseren wij tuinen die perfect aansluiten 
                  bij uw wensen en levensstijl. Van ontwerp tot onderhoud.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Vakkundige Uitvoering",
                      description: "European Tree Worker gecertificeerd voor de hoogste kwaliteitsstandaarden in tuinrealisatie."
                    },
                    {
                      title: "Complete Ontzorging",
                      description: "Van eerste schets tot dagelijks onderhoud - wij regelen alles voor uw droomtuin."
                    },
                    {
                      title: "Duurzame Kwaliteit",
                      description: "Premium materialen en vakmanschap zorgen voor tuinen die generaties meegaan."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-900 to-primary-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-stone-900 mb-2">{item.title}</h3>
                        <p className="text-stone-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/diensten"
                  className="text-primary-900 hover:text-primary-800 transition-colors font-semibold inline-flex items-center"
                >
                  Ontdek onze diensten
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </AnimationObserver>
            
            <AnimationObserver animationType="slide-right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                  <img 
                    src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Premium vakmanschap"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-soft-lg border border-white/50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-900 mb-2">35+</div>
                    <div className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Jaar Ervaring</div>
                  </div>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="container-wide">
          <AnimationObserver>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6 leading-tight tracking-tight">
                Onze <span className="text-primary-900">Realisaties</span>
              </h2>
              <div className="w-16 h-px bg-primary-900 mx-auto mb-6"></div>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Ontdek onze portfolio van vakkundig uitgevoerde tuinprojecten
              </p>
            </div>
          </AnimationObserver>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 mb-16">
            {[
              {
                image: "/images/voortuin-alkmaar.jpeg",
                title: "Strakke Moderne Voortuin",
                location: "Alkmaar",
                size: "65m²",
                description: "Elegante voortuin met strakke lijnen en moderne uitstraling. Vakkundig aangelegde bestrating gecombineerd met groene accenten voor een tijdloze entree"
              },
              {
                image: "/images/johanneshof-restaurant.jpeg",
                title: "Johannashof Restaurant",
                location: "Castricum",
                size: "75m²",
                description: "Zelfgemaakt bankje, bestrating, schutting en plantenbak voor restaurant Johannashof"
              },
              {
                image: "/images/custom-gate.jpeg",
                title: "Maatwerk Tuinpoort",
                location: "Heiloo",
                size: "",
                description: "Op maat gemaakte moderne tuinpoort met strak design in zwart. Volledig handgemaakt met oog voor detail en duurzaamheid"
              }
            ].map((project, index) => (
              <AnimationObserver key={index} delay={index * 100}>
                <div className="card-premium overflow-hidden hover-lift group">
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-t-3xl ${
                    project.title === "Maatwerk Tuinpoort" ? "bg-stone-100" : ""
                  }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full transition-transform duration-700 ${
                        project.title === "Maatwerk Tuinpoort"
                          ? "object-contain p-4 group-hover:scale-105"
                          : "object-cover group-hover:scale-110"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {project.size && (
                      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-heading font-semibold text-stone-800 shadow-premium border border-white/50">
                        {project.size}
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-heading font-semibold mb-3 font-semibold group-hover:text-primary-900 transition-colors duration-300">{project.title}</h3>
                    <p className="text-primary-900 font-heading font-semibold mb-4 text-sm uppercase tracking-wider">{project.location}</p>
                    <p className="text-stone-600 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </AnimationObserver>
            ))}
          </div>

          <AnimationObserver>
            <div className="text-center">
              <Link
                to="/projecten"
                className="btn-primary inline-flex items-center"
              >
                BEKIJK EEN SELECTIE VAN ONZE PROJECTEN
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
          </AnimationObserver>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 lg:py-24 bg-stone-50 relative">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 xl:gap-12 mb-12">
            {[
              {
                name: "Familie Janssen",
                location: "Alkmaar",
                review: "Frans en zijn team hebben onze tuin volledig getransformeerd. Vakmanschap en betrouwbaarheid op het hoogste niveau.",
                initials: "FJ",
                delay: 0
              },
              {
                name: "M. van der Berg", 
                location: "Egmond",
                review: "Al jaren klant van het onderhoud. Altijd netjes op tijd en de tuin ziet er het hele jaar door prachtig uit.",
                initials: "MB",
                delay: 100
              },
              {
                name: "J. de Wit",
                location: "Heiloo",
                review: "Perfecte service en prachtig resultaat. Kunnen het iedereen aanraden!",
                initials: "JW",
                delay: 200
              }
            ].map((review, index) => (
              <AnimationObserver key={index} delay={review.delay}>
                <div className="card-premium p-8 hover-lift">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-900 to-primary-700 rounded-full flex items-center justify-center text-white font-heading font-semibold mr-4">
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-stone-900">{review.name}</h4>
                      <p className="text-sm text-stone-600">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-600 leading-relaxed italic">"{review.review}"</p>
                </div>
              </AnimationObserver>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;