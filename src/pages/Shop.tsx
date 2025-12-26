import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Plus, ArrowRight, Leaf, Award, Truck, Shield, CheckCircle } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';
import { db, Product } from '../lib/supabase';

const fallbackProducts: Product[] = [
  {
    id: '1',
    name: 'ECOstyle OpMaat Kalk',
    description: '100% natuurlijke kalk verrijkt met micro-organismen voor verbetering van pH-waarde en bodemstructuur. CO₂ neutraal product.',
    price: 19.50,
    category: 'Kalk & mineralen',
    weight: '20 kg',
    volume: '20 kg',
    in_stock: true,
    popular: true,
    image_url: 'https://placehold.co/600x400/228B22/white?text=OpMaat+Kalk',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'ECOstyle Myco-Gazon 8-3-6',
    description: '100% organische gazonmeststof met micro-organismen voor een sterk en diepgroen gazon. Werkt al vanaf 5°C bodemtemperatuur.',
    price: 59.50,
    category: 'Gazonproducten',
    weight: '25 kg',
    volume: '25 kg',
    in_stock: true,
    popular: true,
    image_url: 'https://placehold.co/600x400/2E7D32/white?text=Myco-Gazon',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'ECOstyle Terra-Actif',
    description: 'Hoogwaardige bodemverbeteraar rijk aan kokosvezels. Verbetert bodemstructuur en lucht-/waterhuishouding. >20% organische stof.',
    price: 17.50,
    category: 'Bodemverbeteraars',
    weight: '70 L',
    volume: '70 L',
    in_stock: true,
    popular: true,
    image_url: 'https://placehold.co/600x400/795548/white?text=Terra-Actif',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'ECOstyle Myco-Siertuin 7-3-6',
    description: '100% organische meststof voor borders en heesters. Met Mycorrhizae en fosfaatvrijmakende bacteriën. Tot 9x meer wortelbereik.',
    price: 59.50,
    category: 'Organische meststoffen',
    weight: '25 kg',
    volume: '25 kg',
    in_stock: true,
    popular: false,
    image_url: 'https://placehold.co/600x400/558B2F/white?text=Myco-Siertuin',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '5',
    name: 'ECOstyle Terra-Fertiel',
    description: 'Organische bodemverbeteraar met schimmels, bacteriën en gisten. Activeert het bodemleven direct en verbetert de bodemstructuur.',
    price: 52.50,
    category: 'Bodemverbeteraars',
    weight: '25 kg',
    volume: '25 kg',
    in_stock: true,
    popular: false,
    image_url: 'https://placehold.co/600x400/6D4C41/white?text=Terra-Fertiel',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Handgemaakte Tuinbankstellen',
    description: 'Op maat gemaakte, duurzame tuinbankstellen van kwaliteitshout. Verschillende afmetingen beschikbaar.',
    price: 0,
    category: 'Tuinmeubelen',
    weight: 'Maatwerk',
    volume: 'Maatwerk',
    in_stock: true,
    popular: false,
    image_url: 'https://placehold.co/600x400/795548/white?text=Tuinbankstellen',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '7',
    name: 'Handgemaakte Bloembakken',
    description: 'Stevige houten bloembakken, handgemaakt op maat. Perfect voor borders en terrassen.',
    price: 0,
    category: 'Tuinmeubelen',
    weight: 'Maatwerk',
    volume: 'Maatwerk',
    in_stock: true,
    popular: false,
    image_url: 'https://placehold.co/600x400/6D4C41/white?text=Bloembakken',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '8',
    name: 'Handgemaakte Plantenbakken',
    description: 'Duurzame houten plantenbakken op maat gemaakt. Verschillende maten en uitvoeringen mogelijk.',
    price: 0,
    category: 'Eigen Maatwerk',
    weight: 'Maatwerk',
    volume: 'Maatwerk',
    in_stock: true,
    popular: false,
    image_url: 'https://placehold.co/600x400/8B7355/white?text=Plantenbakken',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '9',
    name: 'Tuintafels op Maat',
    description: 'Stevige houten tuintafels, handgemaakt volgens uw wensen. Duurzaam en weersbestendig.',
    price: 0,
    category: 'Eigen Maatwerk',
    weight: 'Maatwerk',
    volume: 'Maatwerk',
    in_stock: true,
    popular: false,
    image_url: 'https://placehold.co/600x400/6D5D4B/white?text=Tuintafels',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '10',
    name: 'Overkappingen & Pergola\'s',
    description: 'Op maat gemaakte houten overkappingen en pergola\'s. Compleet geïnstalleerd in uw tuin.',
    price: 0,
    category: 'Eigen Maatwerk',
    weight: 'Maatwerk',
    volume: 'Maatwerk',
    in_stock: true,
    popular: false,
    image_url: 'https://placehold.co/600x400/8B6F47/white?text=Overkappingen',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '11',
    name: 'Schuttingen op Maat',
    description: 'Houten schuttingen in elk gewenst model. Van klassiek tot modern, alles is mogelijk.',
    price: 0,
    category: 'Eigen Maatwerk',
    weight: 'Maatwerk',
    volume: 'Maatwerk',
    in_stock: true,
    popular: false,
    image_url: 'https://placehold.co/600x400/7A5C42/white?text=Schuttingen',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await db.getProducts();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        console.log('Using fallback products data');
        setProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900 mx-auto mb-4"></div>
          <p className="text-stone-600">Producten laden...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src="/images/hero-garden.jpg"
            alt="Premium Tuinproducten Shop"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 text-left text-white">
          <AnimationObserver>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white text-center">
              ECOstyle Premium
              <span className="block text-white mt-2">Tuinproducten</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto text-center">
              Biologische ECOstyle producten direct op voorraad. Koop per stuk of vraag om bulkkorting vanaf 10 stuks.
            </p>
          </AnimationObserver>
        </div>
      </section>

      {/* Uitleg Particulier vs Zakelijk */}
      <section className="py-12 bg-white border-b border-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Voor Particulieren</h3>
              <p className="text-stone-700 mb-4">
                Koop direct online per stuk. De prijzen die u ziet zijn particuliere prijzen.
              </p>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Bestel 1-9 stuks online</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Direct toevoegen aan winkelwagen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Gratis bezorging vanaf 5 zakken</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-2xl p-8 border border-stone-200">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Voor Hoveniers (Zakelijk)</h3>
              <p className="text-stone-700 mb-4">
                Handelsprijzen vanaf 10 stuks. Neem contact op voor een offerte.
              </p>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Scherpe handelsprijzen (10+ stuks)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Levering binnen 48 uur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Persoonlijke begeleiding</span>
                </li>
              </ul>
              <Link
                to="/voor-hoveniers"
                className="inline-flex items-center mt-4 text-primary-900 hover:text-primary-800 font-semibold"
              >
                Bekijk groothandel info →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section id="producten" className="pt-16 pb-20 lg:pb-24 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <AnimationObserver>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6 leading-tight tracking-tight">
                Onze <span className="text-primary-900">Premium Producten</span>
              </h2>
              <div className="w-16 h-px bg-primary-900 mx-auto mb-6"></div>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Ontdek ons assortiment premium tuinproducten
              </p>
            </div>
          </AnimationObserver>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {products.map((product, index) => (
              <AnimationObserver key={product.id} delay={index * 100}>
                <div 
                  className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 relative cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  {/* Popular Badge */}
                  {product.popular && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-accent-600 to-accent-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-soft">
                      POPULAIR
                    </div>
                  )}
                  
                  {/* Stock Status */}
                  <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-lg text-xs font-semibold ${
                    product.in_stock 
                      ? 'bg-primary-100 text-primary-900' 
                      : 'bg-stone-100 text-stone-600'
                  }`}>
                    {product.in_stock ? 'Op voorraad' : 'Uitverkocht'}
                  </div>

                  {/* Large Product Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-50">
                    <img
                      src={product.image_url || 'https://placehold.co/600x400/228B22/white?text=Product'}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* View Product Button */}
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/95 backdrop-blur-sm text-primary-900 py-3 px-4 rounded-xl font-semibold text-center">
                        Bekijk Product Details →
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-primary-900 transition-colors duration-300">
                        {product.name}
                      </h3>
                      {(product.volume || product.weight) && (
                        <p className="text-sm text-stone-500 mb-3">
                          Inhoud: {product.volume || product.weight}
                        </p>
                      )}
                      <p className="text-stone-600 leading-relaxed mb-4 text-sm">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-primary-900">
                            {product.price === 0 ? 'Prijs op aanvraag' : `€${product.price.toFixed(2)}`}
                          </div>
                          {product.price > 0 && (
                            <div className="text-xs text-primary-700 mt-1 font-medium bg-primary-50 px-2 py-1 rounded inline-block">
                              Bulkkorting vanaf 10 stuks
                            </div>
                          )}
                          {product.original_price && product.price !== 0 && (
                            <div className="text-sm text-stone-500 line-through">€{product.original_price.toFixed(2)}</div>
                          )}
                        </div>
                        <div className="text-xs text-stone-500 bg-stone-100 px-3 py-1 rounded-lg font-medium">
                          {product.category}
                        </div>
                      </div>
                    </div>

                    {product.in_stock ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (product.price === 0) {
                            window.location.href = '/contact';
                          } else {
                            onAddToCart({
                              ...product,
                              image: product.image_url || 'https://placehold.co/600x400/228B22/white?text=Product'
                            });
                          }
                        }}
                        className="w-full bg-gradient-to-r from-primary-900 to-primary-800 text-white py-3 rounded-xl font-semibold hover:from-primary-800 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        {product.price === 0 ? 'Offerte aanvragen' : 'In Winkelwagen'}
                      </button>
                    ) : (
                      <button
                        disabled
                        className="w-full bg-stone-200 text-stone-500 py-3 rounded-xl font-semibold cursor-not-allowed"
                      >
                        Tijdelijk uitverkocht
                      </button>
                    )}
                  </div>
                </div>
              </AnimationObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Products Info Section - Now at bottom */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <AnimationObserver animationType="slide-left">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight tracking-tight">
                  Premium producten voor
                  <span className="block text-primary-900 mt-2">uw droomtuin</span>
                </h2>
                
                <p className="text-lg text-stone-600 leading-relaxed">
                  Zorgvuldig geselecteerde tuinproducten van de hoogste kwaliteit. 
                  Van biologische potgrond tot complete tuinsets.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "ECOstyle Dealer",
                      description: "Officiële dealer van ECOstyle biologische tuinproducten. Volledige productlijn direct leverbaar in Bakkum en omgeving Noord-Holland."
                    },
                    {
                      title: "Particulier & Zakelijk",
                      description: "Koop direct online per stuk of vraag om bulkkorting vanaf 10 stuks. Neem contact op voor een offerte."
                    },
                    {
                      title: "Gratis Bezorging",
                      description: "Gratis thuisbezorging in Bakkum en omgeving Noord-Holland bij bestelling vanaf 5 zakken."
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
              </div>
            </AnimationObserver>

            <AnimationObserver animationType="slide-right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                  <img
                    src="https://placehold.co/800x600/2E7D32/white?text=Premium+Tuinproducten"
                    alt="Premium tuinproducten"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-soft-lg border border-white/50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-900 mb-2">100%</div>
                    <div className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Biologisch</div>
                  </div>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;