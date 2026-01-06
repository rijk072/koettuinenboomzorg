import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Leaf, ArrowRight, TreePine, Heart, Shield, Phone, Mail, CheckCircle, Star } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';

const OverOns = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-24">
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
              Premium vakmanschap in elke
              <span className="block text-white mt-2">vierkante meter tuin</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              Familiebedrijf gespecialiseerd in premium tuinrealisatie en boomverzorging
            </p>
          </AnimationObserver>
          
        </div>
      </section>

      {/* Introductie Sectie - Two Column */}
      <section className="pt-16 py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <AnimationObserver animationType="slide-left">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight tracking-tight">
                  Van intieme stadstuinen tot
                  <span className="block text-primary-900 mt-2">uitgestrekte landschappen</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-xl text-stone-600 leading-relaxed">
                  </p>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Koet Tuin & Boomzorg is een familiebedrijf met meer dan 35 jaar ervaring 
                    in het creëren van prachtige buitenruimtes. Onze passie voor tuinen en 
                    vakmanschap vormt de basis van alles wat we doen.
                  </p>
                  
                  <p className="text-stone-600 leading-relaxed">
                    Wij brengen uw tuinvisie tot leven met oog voor detail en respect voor de natuur.
                    Van concept tot realisatie en onderhoud – wij regelen alles van A tot Z.
                  </p>
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
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                  <img 
                    src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Koet Tuin & Boomzorg vakmanschap"
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

      {/* Missie & Visie - Two Column */}
      <section className="py-20 lg:py-24 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <AnimationObserver animationType="slide-left">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 leading-tight tracking-tight">
                  Onze <span className="text-primary-900">Missie & Visie</span>
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-stone-900 mb-4 flex items-center">
                      <Heart className="w-6 h-6 text-primary-900 mr-3" />
                      Onze Missie
                    </h3>
                    <p className="text-lg text-stone-600 leading-relaxed">
                      Wij geloven dat elke tuin een verhaal vertelt. Ons doel is om samen met u 
                      een buitenruimte te creëren die niet alleen mooi is, maar ook perfect aansluit 
                      bij uw levensstijl en wensen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-stone-900 mb-4 flex items-center">
                      <TreePine className="w-6 h-6 text-primary-900 mr-3" />
                      Onze Visie
                    </h3>
                    <p className="text-lg text-stone-600 leading-relaxed">
                      Wij streven naar tuinen die generaties meegaan. Door gebruik te maken van 
                      duurzame materialen en vakkundige uitvoering creëren wij buitenruimtes 
                      die hun schoonheid behouden.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver animationType="slide-right">
              <div className="bg-white rounded-2xl p-10 shadow-soft">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-stone-900 mb-4">European Tree Worker</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Gecertificeerd volgens de hoogste Europese standaarden voor 
                    boomverzorging en tuinonderhoud.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Vakkundige boomverzorging",
                    "Professionele tuinaanleg", 
                    "Duurzaam onderhoud",
                    "35+ jaar ervaring"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Onze Waarden - Two Column */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <AnimationObserver animationType="slide-left">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 leading-tight tracking-tight">
                  Onze <span className="text-primary-900">Waarden</span>
                </h2>
                
                <p className="text-xl text-stone-600 leading-relaxed">
                  De principes die ons werk en onze relaties met klanten vormgeven sinds 1989.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <Award className="w-6 h-6" />,
                      title: "Vakmanschap",
                      description: "Meer dan drie decennia ervaring in tuinrealisatie. Kwaliteit en precisie in elk detail."
                    },
                    {
                      icon: <Users className="w-6 h-6" />,
                      title: "Samenwerking", 
                      description: "Nauwe samenwerking met onze klanten om hun unieke visie tot leven te brengen."
                    },
                    {
                      icon: <Leaf className="w-6 h-6" />,
                      title: "Duurzaamheid",
                      description: "Respect voor de natuur en gebruik van duurzame materialen voor tuinen die generaties meegaan."
                    }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-900 to-primary-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-stone-900 mb-2">{value.title}</h3>
                        <p className="text-stone-600 leading-relaxed">{value.description}</p>
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
                    src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Duurzame tuinprojecten"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-soft-lg border border-white/50">
                  <div className="flex items-center">
                    <Leaf className="w-8 h-8 text-primary-900 mr-3" />
                    <div>
                      <div className="text-lg font-bold text-stone-900">Duurzaam</div>
                      <div className="text-sm text-stone-600">Sinds 1989</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Team Sectie - Two Column */}
      <section className="py-20 lg:py-24 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-start">
            <AnimationObserver animationType="slide-left">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 leading-tight tracking-tight">
                  Ontmoet ons <span className="text-primary-900">Team</span>
                </h2>
                
                <p className="text-xl text-stone-600 leading-relaxed">
                  De mensen die uw tuindromen werkelijkheid maken met passie en vakmanschap.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      name: "Frans Koet",
                      role: "Oprichter & Eigenaar",
                      initials: "FK",
                      image: null,
                      description: "Meer dan 35 jaar ervaring in de tuinbranche met een scherp oog voor detail."
                    },
                    {
                      name: "Tristan Paap",
                      role: "Co-leider Aanleg & Onderhoud",
                      initials: "TP",
                      image: null,
                      description: "Combineert technische precisie met creatieve visie voor perfecte uitvoering."
                    },
                    {
                      name: "Dian Tan",
                      role: "Allround Aanleg & Onderhoud",
                      initials: "DT",
                      image: "/images/dian-tan.jpeg",
                      description: "Voorliefde voor strakke lijnen en moderne tuinconcepten."
                    }
                  ].map((member, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-32 h-32 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary-900 to-primary-700 flex items-center justify-center text-white font-bold text-2xl">
                            {member.initials}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 h-32 flex flex-col justify-center">
                        <h3 className="text-base font-semibold text-stone-900">{member.name}</h3>
                        <p className="text-primary-900 font-medium text-xs uppercase tracking-wider mb-1">{member.role}</p>
                        <p className="text-stone-600 leading-snug text-sm">{member.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver animationType="slide-right">
              <div className="bg-white rounded-2xl p-10 shadow-soft">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-stone-900 mb-4">Ons Team</h3>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    Een hecht team van ervaren professionals die samen zorgen 
                    voor de hoogste kwaliteit in elk project.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    "European Tree Worker gecertificeerd",
                    "35+ jaar gecombineerde ervaring",
                    "Persoonlijke begeleiding elk project",
                    "Vakmanschap van de hoogste kwaliteit"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-stone-200">
                  <Link 
                    to="/contact"
                    className="text-primary-900 hover:text-primary-800 transition-colors font-semibold inline-flex items-center"
                  >
                    Maak kennis met ons team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Reviews Sectie - Two Column */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <AnimationObserver animationType="slide-left">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 leading-tight tracking-tight">
                  Dit zeggen onze <span className="text-primary-900">klanten</span>
                </h2>
                
                <p className="text-xl text-stone-600 leading-relaxed">
                  Lees wat onze tevreden klanten zeggen over onze premium diensten en vakmanschap.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      name: "Familie Janssen",
                      location: "Alkmaar", 
                      review: "Frans en zijn team hebben onze tuin volledig getransformeerd. Vakmanschap op het hoogste niveau.",
                      initials: "FJ"
                    },
                    {
                      name: "M. van der Berg",
                      location: "Egmond",
                      review: "Al jaren klant van het onderhoud. De tuin ziet er het hele jaar door prachtig uit.",
                      initials: "MB"
                    }
                  ].map((review, index) => (
                    <div key={index} className="bg-stone-50 rounded-2xl p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-stone-700 italic leading-relaxed mb-4">
                        "{review.review}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-medium text-sm">{review.initials}</span>
                        </div>
                        <div>
                          <p className="font-medium text-stone-900 text-sm">{review.name}</p>
                          <p className="text-stone-500 text-sm">{review.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <a 
                  href="https://www.google.com/maps/place/Koet+Tuin+%26+Boomzorg/@52.5167,4.7833,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-900 hover:text-primary-800 transition-colors font-semibold inline-flex items-center"
                >
                  Bekijk alle Google Reviews
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </AnimationObserver>

            <AnimationObserver animationType="slide-right">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-10 text-white shadow-soft-lg">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Uitstekende Reviews</h3>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-accent-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Onze klanten waarderen onze vakmanschap, betrouwbaarheid 
                    en persoonlijke service.
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    "100% tevreden klanten",
                    "Gemiddeld 5 sterren beoordeling", 
                    "Meer dan 500 gerealiseerde projecten",
                    "35+ jaar ervaring"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className="w-full bg-white text-primary-900 py-4 rounded-xl font-semibold text-center hover:bg-neutral-50 transition-all duration-300 transform hover:scale-105 block"
                >
                  Word ook een tevreden klant
                </Link>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

    </>
  );
};

export default OverOns;