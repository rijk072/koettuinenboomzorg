import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowRight, Phone, Mail } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';
import { Product } from '../lib/supabase';

// PARTICULIERE PRODUCTEN (Eigen maatwerk)
const particulierProducts = [
  {
    id: 'p1',
    name: 'Handgemaakte Tuinbankstellen',
    description: 'Op maat gemaakte, duurzame tuinbankstellen van kwaliteitshout. Verschillende afmetingen en uitvoeringen beschikbaar.',
    price: 449.99,
    category: 'Eigen Maatwerk',
    image_url: 'https://placehold.co/600x400/795548/white?text=Tuinbankstellen',
  },
  {
    id: 'p2',
    name: 'Handgemaakte Bloembakken',
    description: 'Stevige houten bloembakken, handgemaakt op maat. Perfect voor borders en terrassen.',
    price: 159.99,
    category: 'Eigen Maatwerk',
    image_url: 'https://placehold.co/600x400/6D4C41/white?text=Bloembakken',
  },
  {
    id: 'p3',
    name: 'Tuintafels op Maat',
    description: 'Stevige houten tuintafels, handgemaakt volgens uw wensen. Duurzaam en weersbestendig.',
    price: 649.99,
    category: 'Eigen Maatwerk',
    image_url: 'https://placehold.co/600x400/8B7355/white?text=Tuintafels',
  },
  {
    id: 'p4',
    name: 'Plantenbakken',
    description: 'Duurzame houten plantenbakken op maat gemaakt. Verschillende maten en uitvoeringen mogelijk.',
    price: 129.99,
    category: 'Eigen Maatwerk',
    image_url: 'https://placehold.co/600x400/6D5D4B/white?text=Plantenbakken',
  },
  {
    id: 'p5',
    name: 'Overkappingen & Pergola\'s',
    description: 'Op maat gemaakte houten overkappingen en pergola\'s. Compleet geïnstalleerd in uw tuin.',
    price: 2499.99,
    category: 'Eigen Maatwerk',
    image_url: 'https://placehold.co/600x400/8B6F47/white?text=Overkappingen',
  },
  {
    id: 'p6',
    name: 'Schuttingen op Maat',
    description: 'Houten schuttingen in elk gewenst model. Van klassiek tot modern, alles is mogelijk.',
    price: 899.99,
    category: 'Eigen Maatwerk',
    image_url: 'https://placehold.co/600x400/7A5C42/white?text=Schuttingen',
  }
];

// ZAKELIJKE PRODUCTEN (ECOstyle - voor hoveniers)
const zakelijkProducts = [
  {
    id: 'z1',
    name: 'ECOstyle OpMaat Kalk',
    description: '100% natuurlijke kalk verrijkt met micro-organismen voor verbetering van pH-waarde en bodemstructuur.',
    volume: '20 kg',
    minOrder: '10 zakken',
    category: 'ECOstyle',
    image_url: 'https://placehold.co/600x400/228B22/white?text=OpMaat+Kalk',
  },
  {
    id: 'z2',
    name: 'ECOstyle Myco-Gazon 8-3-6',
    description: '100% organische gazonmeststof met micro-organismen voor een sterk en diepgroen gazon.',
    volume: '25 kg',
    minOrder: '10 zakken',
    category: 'ECOstyle',
    image_url: 'https://placehold.co/600x400/2E7D32/white?text=Myco-Gazon',
  },
  {
    id: 'z3',
    name: 'ECOstyle Terra-Actif',
    description: 'Hoogwaardige bodemverbeteraar rijk aan kokosvezels. Verbetert bodemstructuur en lucht-/waterhuishouding.',
    volume: '70 L',
    minOrder: '10 zakken',
    category: 'ECOstyle',
    image_url: 'https://placehold.co/600x400/795548/white?text=Terra-Actif',
  },
  {
    id: 'z4',
    name: 'ECOstyle Myco-Siertuin 7-3-6',
    description: '100% organische meststof voor borders en heesters. Met Mycorrhizae en fosfaatvrijmakende bacteriën.',
    volume: '25 kg',
    minOrder: '10 zakken',
    category: 'ECOstyle',
    image_url: 'https://placehold.co/600x400/558B2F/white?text=Myco-Siertuin',
  },
  {
    id: 'z5',
    name: 'ECOstyle Terra-Fertiel',
    description: 'Organische bodemverbeteraar met schimmels, bacteriën en gisten. Activeert het bodemleven direct.',
    volume: '25 kg',
    minOrder: '10 zakken',
    category: 'ECOstyle',
    image_url: 'https://placehold.co/600x400/6D4C41/white?text=Terra-Fertiel',
  }
];

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'particulier' | 'zakelijk'>('particulier');
  const navigate = useNavigate();

  const products = activeTab === 'particulier' ? particulierProducts : zakelijkProducts;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src="/images/hero-garden.jpg"
            alt="Tuinproducten Shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 text-center text-white">
          <AnimationObserver>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              {activeTab === 'particulier' ? 'Eigen Maatwerk' : 'ECOstyle Groothandel'}
              <span className="block mt-2">
                {activeTab === 'particulier' ? 'voor Uw Tuin' : 'voor Professionals'}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              {activeTab === 'particulier'
                ? 'Handgemaakt tuinmeubilair op maat - Direct online bestellen'
                : 'Volledige ECOstyle productlijn - Handelsprijzen vanaf 10 stuks'
              }
            </p>
          </AnimationObserver>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('particulier')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === 'particulier'
                  ? 'bg-primary-900 text-white shadow-lg scale-105'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Voor Particulieren
            </button>
            <button
              onClick={() => setActiveTab('zakelijk')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === 'zakelijk'
                  ? 'bg-primary-900 text-white shadow-lg scale-105'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Voor Hoveniers (Zakelijk)
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pt-16 pb-20 lg:pb-24 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">

          {/* Info Banner */}
          <AnimationObserver>
            <div className={`mb-12 p-6 rounded-2xl ${
              activeTab === 'particulier'
                ? 'bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200'
                : 'bg-gradient-to-r from-accent-50 to-accent-100 border border-accent-200'
            }`}>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-stone-900 mb-2">
                  {activeTab === 'particulier'
                    ? '🛠️ Op Maat Gemaakt Tuinmeubilair'
                    : '📦 ECOstyle Groothandel'
                  }
                </h2>
                <p className="text-stone-700">
                  {activeTab === 'particulier'
                    ? 'Bestel direct online en wij maken elk product speciaal voor u op maat.'
                    : 'Handelsprijzen vanaf 10 stuks per product. Neem contact op voor prijzen en levering.'
                  }
                </p>
              </div>
            </div>
          </AnimationObserver>

          {/* Products */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {products.map((product, index) => (
              <AnimationObserver key={product.id} delay={index * 100}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2">

                  {/* Product Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-50">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-primary-900 transition-colors">
                      {product.name}
                    </h3>

                    {'volume' in product && (
                      <p className="text-sm text-stone-500 mb-3">
                        Inhoud: {product.volume}
                      </p>
                    )}

                    <p className="text-stone-600 leading-relaxed mb-4 text-sm">
                      {product.description}
                    </p>

                    {/* Price/Order Info */}
                    <div className="mb-4">
                      {activeTab === 'particulier' ? (
                        <div className="text-2xl font-bold text-primary-900">
                          €{product.price.toFixed(2)}
                        </div>
                      ) : (
                        <div>
                          <div className="text-lg font-bold text-primary-900">
                            Handelsprijs op aanvraag
                          </div>
                          <div className="text-xs text-stone-500 mt-1">
                            {'minOrder' in product && `Minimaal: ${product.minOrder}`}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    {activeTab === 'particulier' ? (
                      <button
                        onClick={() => onAddToCart({
                          ...product,
                          in_stock: true,
                          popular: false,
                          created_at: new Date().toISOString(),
                          updated_at: new Date().toISOString()
                        } as Product)}
                        className="w-full bg-gradient-to-r from-primary-900 to-primary-800 text-white py-3 rounded-xl font-semibold hover:from-primary-800 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        In Winkelwagen
                      </button>
                    ) : (
                      <Link
                        to="/contact"
                        className="w-full bg-gradient-to-r from-primary-900 to-primary-800 text-white py-3 rounded-xl font-semibold hover:from-primary-800 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                      >
                        Offerte Aanvragen
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    )}
                  </div>
                </div>
              </AnimationObserver>
            ))}
          </div>

          {/* Contact CTA */}
          <AnimationObserver>
            <div className="mt-16 text-center bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                {activeTab === 'particulier'
                  ? 'Vragen over Uw Bestelling?'
                  : 'Interesse in Groothandel Prijzen?'
                }
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {activeTab === 'particulier'
                  ? 'Neem contact op voor advies over uw maatwerk tuinmeubelen.'
                  : 'Bel of mail direct voor handelsprijzen en leveringsvoorwaarden.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0653747696"
                  className="inline-flex items-center justify-center bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold hover:bg-neutral-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0653747696
                </a>
                <a
                  href="mailto:frans@koet.net"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  frans@koet.net
                </a>
              </div>
            </div>
          </AnimationObserver>
        </div>
      </section>
    </>
  );
};

export default Shop;
