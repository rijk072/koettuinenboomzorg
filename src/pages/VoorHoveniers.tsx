import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, Package, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';

const VoorHoveniers = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src="/images/hero-garden.jpg"
            alt="Betrouwbare leverancier voor professionele hoveniers"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 text-left text-white">
          <AnimationObserver>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
              ECOstyle dealer voor
              <span className="block text-white mt-2">professionele hoveniers</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              Volledige ECOstyle productlijn op voorraad - Scherpe handelsprijzen - Levering binnen 48u
            </p>
          </AnimationObserver>
        </div>
      </section>

      {/* USP Section */}
      <section className="pt-16 py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <AnimationObserver>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6 leading-tight tracking-tight">
                Waarom professionele hoveniers voor <span className="text-primary-900">ons kiezen</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
                Uw betrouwbare partner voor hoogwaardige tuinproducten in regio 0251
              </p>
            </div>
          </AnimationObserver>

          <div className="grid lg:grid-cols-3 gap-8 xl:gap-12">
            <AnimationObserver animationType="slide-left" delay={100}>
              <div className="text-center card-premium p-10 hover-lift group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-premium group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-stone-900 group-hover:text-primary-900 transition-colors duration-300">Professionele Bulkprijzen</h3>
                <p className="text-stone-600 leading-relaxed">
                  Scherpe prijzen vanaf 10 stuks per product. Speciaal tarief voor zakelijke afnemers en vaste relaties.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver delay={200}>
              <div className="text-center card-premium p-10 hover-lift group">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-premium group-hover:scale-110 transition-transform duration-500">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-stone-900 group-hover:text-primary-900 transition-colors duration-300">Snelle Levering</h3>
                <p className="text-stone-600 leading-relaxed">
                  Binnen 48 uur in regio 0251 geleverd. Spoedleveringen mogelijk in overleg voor dringende projecten.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver animationType="slide-right" delay={300}>
              <div className="text-center card-premium p-10 hover-lift group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-800 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-premium group-hover:scale-110 transition-transform duration-500">
                  <Package className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-stone-900 group-hover:text-primary-900 transition-colors duration-300">Eigen Voorraad</h3>
                <p className="text-stone-600 leading-relaxed">
                  Direct leverbaar, geen wachttijden. Ruime voorraad van alle populaire producten direct op locatie.
                </p>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="py-20 lg:py-24 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <AnimationObserver animationType="slide-left">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight tracking-tight">
                  Meer dan alleen een
                  <span className="block text-primary-900 mt-2">leverancier</span>
                </h2>

                <p className="text-lg text-stone-600 leading-relaxed">
                  Als hovenier weet u dat betrouwbaarheid en kwaliteit cruciaal zijn.
                  Wij leveren niet alleen producten, maar ook vakkennis en persoonlijke service.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Persoonlijk Advies",
                      description: "Direct contact met vakspecialisten die uw uitdagingen begrijpen."
                    },
                    {
                      title: "Flexibele Betalingsopties",
                      description: "Zakelijke betalingsvoorwaarden mogelijk voor vaste relaties."
                    },
                    {
                      title: "Vaste Contactpersoon",
                      description: "Eén aanspreekpunt voor al uw vragen en bestellingen."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-900 to-primary-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-stone-900 mb-2">{item.title}</h3>
                        <p className="text-stone-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver animationType="slide-right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                  <img
                    src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Professionele hoveniersdiensten"
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

      {/* Contact Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <AnimationObserver>
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-12 lg:p-16 text-white text-center shadow-premium-xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Plan een kennismakingsgesprek
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Bespreek uw behoeften met onze specialisten en ontdek hoe wij uw bedrijf kunnen ondersteunen
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
                <a
                  href="tel:0653747696"
                  className="flex items-center justify-center bg-white/95 backdrop-blur-sm text-primary-900 px-8 py-5 rounded-xl font-semibold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-premium"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  0653747696
                </a>
                <a
                  href="mailto:frans@koet.net"
                  className="flex items-center justify-center bg-white/95 backdrop-blur-sm text-primary-900 px-8 py-5 rounded-xl font-semibold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-premium"
                >
                  <Mail className="w-6 h-6 mr-3" />
                  frans@koet.net
                </a>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center bg-accent-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-accent-500 transition-all duration-300 transform hover:scale-105 shadow-premium"
              >
                Stuur een bericht
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </AnimationObserver>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="py-20 lg:py-24 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <AnimationObserver>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6 leading-tight tracking-tight">
                Ons <span className="text-primary-900">Productassortiment</span>
              </h2>
              <div className="w-16 h-px bg-primary-900 mx-auto mb-6"></div>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Hoogwaardige producten voor professioneel gebruik
              </p>
            </div>
          </AnimationObserver>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Premium Potgrond',
              'Organische Meststoffen',
              'Bodemverbeteraars',
              'Kalkmineralen'
            ].map((category, index) => (
              <AnimationObserver key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2">
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">{category}</h3>
                  <p className="text-stone-600 text-sm">Direct leverbaar in bulk</p>
                </div>
              </AnimationObserver>
            ))}
          </div>

          <AnimationObserver>
            <div className="text-center mt-12">
              <Link
                to="/shop"
                className="inline-flex items-center text-primary-900 hover:text-primary-800 transition-colors font-semibold text-lg"
              >
                Bekijk ons volledige assortiment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </AnimationObserver>
        </div>
      </section>
    </>
  );
};

export default VoorHoveniers;
