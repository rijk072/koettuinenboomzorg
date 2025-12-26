import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowRight, Phone, Mail } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';
import { Product } from '../lib/supabase';
import { particulierProducts, zakelijkProducts } from '../data/products';

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
              {activeTab === 'particulier' ? 'Eigen Maatwerk' : 'ECOstyle Groothandel'}
              <span className="block mt-2 text-white">
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

                  {/* Product Image - Clickable */}
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] overflow-hidden bg-stone-50">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/95 backdrop-blur-sm text-primary-900 py-2 px-4 rounded-xl font-semibold text-center text-sm">
                        Bekijk Product Details →
                      </div>
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="p-6">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-primary-900 transition-colors cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>

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
                        onClick={(e) => {
                          e.preventDefault();
                          onAddToCart({
                            ...product,
                            in_stock: true,
                            popular: false,
                            created_at: new Date().toISOString(),
                            updated_at: new Date().toISOString()
                          } as Product);
                        }}
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
