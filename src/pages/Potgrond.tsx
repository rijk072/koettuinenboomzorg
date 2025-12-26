import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Truck, Shield, Award, ArrowRight, Plus, Minus, ShoppingCart, CheckCircle, Star, Heart } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  volume: string;
  image: string;
  features: string[];
  inStock: boolean;
  popular?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Universele Potgrond",
    description: "Hoogwaardige ecologische potgrond voor alle tuinplanten. Rijk aan organische stoffen en perfect gebalanceerd.",
    price: 12.95,
    originalPrice: 15.95,
    volume: "40L",
    image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: ["100% biologisch", "Rijk aan voedingsstoffen", "Verbetert bodemstructuur", "Geschikt voor alle planten"],
    inStock: true,
    popular: true
  },
  {
    id: 2,
    name: "Groente & Kruiden Potgrond",
    description: "Speciaal samengestelde potgrond voor groenten en kruiden. Extra rijk aan organische mest voor optimale groei.",
    price: 14.95,
    volume: "40L",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: ["Speciaal voor eetbare planten", "Extra voedingsstoffen", "Verbeterde drainage", "Biologisch gecertificeerd"],
    inStock: true
  },
  {
    id: 3,
    name: "Bloembakken & Potten Mix",
    description: "Lichte potgrond speciaal ontwikkeld voor bloembakken en potten. Houdt vocht vast en voorkomt uitdroging.",
    price: 11.95,
    volume: "30L",
    image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: ["Lichtgewicht formule", "Uitstekende vochtretentie", "Langdurige voeding", "Perfect voor containers"],
    inStock: true
  },
  {
    id: 4,
    name: "Compost & Bodemverbeteraar",
    description: "Pure compost voor het verbeteren van uw tuingrond. Verhoogt de vruchtbaarheid en bodemstructuur natuurlijk.",
    price: 9.95,
    volume: "50L",
    image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: ["100% gecomposteerd", "Verbetert bodemstructuur", "Stimuleert bodemleven", "Duurzaam geproduceerd"],
    inStock: false
  }
];

const Potgrond = () => {
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});

  const updateQuantity = (productId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  const getQuantity = (productId: number) => quantities[productId] || 0;

  return (
    <>
      {/* Intro Section */}
      <section className="relative bg-gradient-to-b from-neutral-50 to-white pt-16 pb-24 lg:pb-32">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/0 to-white"></div>
        <div className="container-wide">
          <AnimationObserver>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-stone-900 mb-6 leading-[1.2] tracking-tight">
                Premium <span className="text-primary-900">Ecologische Potgrond</span>
              </h2>
              <div className="w-16 h-px bg-primary-900 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
                Hoogwaardige, biologische potgrond voor optimale plantengroei. 
                Duurzaam geproduceerd en rijk aan natuurlijke voedingsstoffen.
              </p>
            </div>
          </AnimationObserver>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 xl:gap-12 mb-20">
            <AnimationObserver animationType="slide-left" delay={100}>
              <div className="text-center bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-4">100% Biologisch</h3>
                <p className="text-stone-600 leading-relaxed">
                  Geen kunstmest of chemische toevoegingen. Puur natuurlijke ingrediënten voor gezonde plantengroei.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver delay={200}>
              <div className="text-center bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-4">Gratis Bezorging</h3>
                <p className="text-stone-600 leading-relaxed">
                  Gratis thuisbezorging in regio 0251 bij bestelling vanaf 5 zakken. 
                  Wij leveren direct aan huis.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver animationType="slide-right" delay={300}>
              <div className="text-center bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-800 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-4">Kwaliteitsgarantie</h3>
                <p className="text-stone-600 leading-relaxed">
                  35+ jaar ervaring in tuinproducten. Niet tevreden? 
                  Geld terug garantie binnen 30 dagen.
                </p>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container-wide">
          <AnimationObserver>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-stone-900 mb-6 leading-[1.2] tracking-tight">
                Onze <span className="text-primary-900">Producten</span>
              </h2>
              <div className="w-16 h-px bg-primary-900 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-2xl mx-auto">
                Kies uit ons assortiment premium ecologische potgrond
              </p>
            </div>
          </AnimationObserver>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-12">
            {products.map((product, index) => (
              <AnimationObserver key={product.id} delay={index * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-1 relative">
                  {/* Popular Badge */}
                  {product.popular && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-accent-600 to-accent-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-premium">
                      POPULAIR
                    </div>
                  )}
                  
                  {/* Stock Status */}
                  <div className={`absolute top-4 right-4 z-10 px-4 py-2 rounded-xl text-sm font-semibold ${
                    product.inStock 
                      ? 'bg-primary-100 text-primary-900' 
                      : 'bg-stone-100 text-stone-600'
                  }`}>
                    {product.inStock ? 'Op voorraad' : 'Uitverkocht'}
                  </div>

                  {/* Product Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-50">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-stone-900">{product.name}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-900">€{product.price}</div>
                        {product.originalPrice && (
                          <div className="text-sm text-stone-500 line-through">€{product.originalPrice}</div>
                        )}
                        <div className="text-sm text-stone-600 font-medium">{product.volume}</div>
                      </div>
                    </div>

                    <p className="text-stone-600 leading-relaxed mb-6">{product.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-stone-600">
                          <CheckCircle className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Quantity Selector & Add to Cart */}
                    {product.inStock ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-stone-50 rounded-xl p-1">
                          <button
                            onClick={() => updateQuantity(product.id, -1)}
                            className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-primary-900 hover:bg-white rounded-lg transition-all duration-300"
                            disabled={getQuantity(product.id) === 0}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-semibold text-stone-900">
                            {getQuantity(product.id)}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, 1)}
                            className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-primary-900 hover:bg-white rounded-lg transition-all duration-300"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <Link
                          to="/contact"
                          className="bg-gradient-to-r from-primary-900 to-primary-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary-800 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                        >
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          Bestellen
                        </Link>
                      </div>
                    ) : (
                      <div className="text-center">
                        <button
                          disabled
                          className="w-full bg-stone-200 text-stone-500 px-6 py-3 rounded-xl font-semibold cursor-not-allowed"
                        >
                          Tijdelijk uitverkocht
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </AnimationObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Soil */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-wide">
          <AnimationObserver>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-stone-900 mb-6 leading-[1.2] tracking-tight">
                Waarom Onze <span className="text-primary-900">Potgrond</span>?
              </h2>
              <div className="w-16 h-px bg-primary-900 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-2xl mx-auto">
                Met 35+ jaar ervaring weten wij precies wat planten nodig hebben
              </p>
            </div>
          </AnimationObserver>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "100% Natuurlijk",
                description: "Geen kunstmatige toevoegingen, alleen pure natuurlijke ingrediënten"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Vakkundig Samengesteld",
                description: "35+ jaar ervaring in het samenstellen van de perfecte potgrond mix"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Lokaal Geproduceerd",
                description: "Geproduceerd in de regio met respect voor het milieu"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Kwaliteitsgarantie",
                description: "Niet tevreden? Geld terug garantie binnen 30 dagen"
              }
            ].map((benefit, index) => (
              <AnimationObserver key={index} delay={index * 100}>
                <div className="text-center bg-stone-50 rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-3">{benefit.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </AnimationObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <AnimationObserver animationType="slide-left">
              <div>
                <h2 className="text-3xl lg:text-4xl font-light text-stone-900 mb-6 leading-[1.2] tracking-tight">
                  Bezorging & <span className="text-primary-900">Service</span>
                </h2>
                <div className="w-16 h-px bg-primary-900 mb-8"></div>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Gratis Bezorging",
                      description: "Gratis thuisbezorging in regio 0251 bij bestelling vanaf 5 zakken"
                    },
                    {
                      title: "Snelle Levering",
                      description: "Besteld voor 12:00, dezelfde week geleverd (afhankelijk van voorraad)"
                    },
                    {
                      title: "Vakkundig Advies",
                      description: "Onze experts helpen u graag bij het kiezen van de juiste potgrond"
                    },
                    {
                      title: "Kwaliteitsgarantie",
                      description: "30 dagen geld terug garantie als u niet volledig tevreden bent"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-900 to-primary-700 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
                        <p className="text-stone-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver animationType="slide-right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
                  <img 
                    src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Potgrond bezorging"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-premium border border-white/50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-900 mb-2">5+</div>
                    <div className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Zakken = Gratis</div>
                  </div>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-wide">
          <AnimationObserver>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-stone-900 mb-6 leading-[1.2] tracking-tight">
                Tevreden <span className="text-primary-900">Klanten</span>
              </h2>
              <div className="w-16 h-px bg-primary-900 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-2xl mx-auto">
                Lees wat onze klanten zeggen over onze ecologische potgrond
              </p>
            </div>
          </AnimationObserver>

          <div className="grid md:grid-cols-3 gap-8 xl:gap-12">
            {[
              {
                name: "Maria S.",
                location: "Alkmaar",
                review: "Mijn groenten groeien fantastisch in deze potgrond. Echt het verschil merkbaar!",
                rating: 5
              },
              {
                name: "Piet J.",
                location: "Bakkum", 
                review: "Uitstekende kwaliteit en snelle levering. Mijn bloemen hebben nog nooit zo mooi gebloeid.",
                rating: 5
              },
              {
                name: "Linda K.",
                location: "Egmond",
                review: "Biologische potgrond van topkwaliteit. Mijn kruidentuin doet het geweldig!",
                rating: 5
              }
            ].map((review, index) => (
              <AnimationObserver key={index} delay={index * 100}>
                <div className="bg-stone-50 rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-500">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-700 mb-4 italic leading-relaxed">
                    "{review.review}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-medium text-sm">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-stone-900 text-sm">{review.name}</p>
                      <p className="text-stone-500 text-sm">{review.location}</p>
                    </div>
                  </div>
                </div>
              </AnimationObserver>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-wide text-center">
          <AnimationObserver>
            <h2 className="text-3xl lg:text-5xl font-light mb-6 leading-[1.2] tracking-tight">
              Klaar om te <span className="text-primary-900">bestellen</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-stone-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Neem contact op voor uw bestelling of voor advies over de juiste potgrond voor uw project.
            </p>
            
            <div className="flex justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-primary-900 to-primary-800 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:from-primary-800 hover:to-primary-700 transition-all duration-700 shadow-premium-lg hover:shadow-premium-xl transform hover:scale-105 hover:-translate-y-2 inline-flex items-center justify-center"
              >
                NEEM CONTACT OP
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
          </AnimationObserver>
        </div>
      </section>
    </>
  );
};

export default Potgrond;