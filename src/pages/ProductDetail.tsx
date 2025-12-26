import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Plus, Minus, Star, Shield, Truck, Leaf, CheckCircle, Heart, Share2 } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';
import { db, Product } from '../lib/supabase';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  inStock: boolean;
  popular?: boolean;
  specifications: {
    volume: string;
    weight: string;
    composition: string;
    ph: string;
    nutrients: string;
  };
  benefits: string[];
  usage: string[];
  detailedDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ecologische Potgrond Premium",
    description: "Hoogwaardige biologische potgrond voor alle tuinplanten. Rijk aan organische stoffen en perfect gebalanceerd voor optimale plantengroei.",
    detailedDescription: "Onze Premium Ecologische Potgrond is zorgvuldig samengesteld uit de beste natuurlijke ingrediënten. Deze potgrond bevat geen kunstmatige toevoegingen en is rijk aan organische stoffen die essentieel zijn voor gezonde plantengroei. De perfecte balans van voedingsstoffen zorgt ervoor dat uw planten optimaal kunnen groeien en bloeien.",
    price: 12.95,
    originalPrice: 15.95,
    image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    images: [
      "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    category: "Potgrond",
    inStock: true,
    popular: true,
    specifications: {
      volume: "40 liter",
      weight: "15 kg",
      composition: "Tuincompost, kokosvezel, perliet",
      ph: "6.0 - 7.0",
      nutrients: "NPK 14-16-18 + sporenelementen"
    },
    benefits: [
      "100% biologisch en natuurlijk",
      "Verbetert bodemstructuur",
      "Stimuleert wortelgroei",
      "Langdurige voeding",
      "Uitstekende drainage",
      "Geschikt voor alle planten"
    ],
    usage: [
      "Tuinborders en bloembedden",
      "Groentemoestuin",
      "Bloembakken en potten",
      "Gazonherstel",
      "Boomgaard en fruitbomen"
    ]
  },
  {
    id: 2,
    name: "Groente & Kruiden Potgrond",
    description: "Speciaal samengestelde potgrond voor groenten en kruiden. Extra rijk aan organische mest voor optimale oogst.",
    detailedDescription: "Deze speciale potgrond is ontwikkeld voor het kweken van groenten en kruiden. De samenstelling is geoptimaliseerd voor eetbare planten met extra organische mest voor een rijke oogst. Perfect voor moestuinen, kweekbakken en potten.",
    price: 14.95,
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    images: [
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    category: "Potgrond",
    inStock: true,
    specifications: {
      volume: "40 liter",
      weight: "16 kg",
      composition: "Compost, kokosvezel, vermiculiet, organische mest",
      ph: "6.5 - 7.2",
      nutrients: "NPK 12-14-16 + calcium en magnesium"
    },
    benefits: [
      "Speciaal voor eetbare planten",
      "Extra voedingsstoffen",
      "Verbeterde smaak van groenten",
      "Stimuleert gezonde groei",
      "Biologisch gecertificeerd",
      "Veilig voor consumptie"
    ],
    usage: [
      "Groentemoestuin",
      "Kruidenplanten",
      "Tomaten en paprika's",
      "Sla en bladgroenten",
      "Kweekbakken"
    ]
  },
  {
    id: 3,
    name: "Bloembakken & Potten Mix",
    description: "Lichte potgrond speciaal ontwikkeld voor bloembakken en potten. Houdt vocht vast en voorkomt uitdroging.",
    detailedDescription: "Deze lichtgewicht potgrond is speciaal ontwikkeld voor gebruik in bloembakken, potten en containers. De formule houdt vocht optimaal vast en voorkomt uitdroging, perfect voor balkon- en terrasplanten.",
    price: 11.95,
    image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    images: [
      "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    category: "Potgrond",
    inStock: true,
    specifications: {
      volume: "30 liter",
      weight: "10 kg",
      composition: "Kokosvezel, perliet, vermiculiet, tuincompost",
      ph: "6.0 - 6.8",
      nutrients: "NPK 10-12-14 + ijzer"
    },
    benefits: [
      "Lichtgewicht formule",
      "Uitstekende vochtretentie",
      "Voorkomt uitdroging",
      "Perfect voor containers",
      "Goede drainage",
      "Langdurige voeding"
    ],
    usage: [
      "Bloembakken en jardinières",
      "Potten en containers",
      "Balkon- en terrasplanten",
      "Hangplanten",
      "Kamerplanten"
    ]
  },
  {
    id: 4,
    name: "Compost & Bodemverbeteraar",
    description: "Pure compost voor het verbeteren van uw tuingrond. Verhoogt de vruchtbaarheid en bodemstructuur natuurlijk.",
    detailedDescription: "Onze pure compost is een natuurlijke bodemverbeteraar die de vruchtbaarheid en structuur van uw tuingrond aanzienlijk verbetert. Rijk aan organische stoffen en bodemleven voor een gezonde tuin.",
    price: 9.95,
    image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    images: [
      "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    category: "Compost",
    inStock: false,
    specifications: {
      volume: "50 liter",
      weight: "20 kg",
      composition: "100% gecomposteerd organisch materiaal",
      ph: "6.8 - 7.5",
      nutrients: "Natuurlijke organische voeding"
    },
    benefits: [
      "100% gecomposteerd",
      "Verbetert bodemstructuur",
      "Stimuleert bodemleven",
      "Verhoogt vruchtbaarheid",
      "Duurzaam geproduceerd",
      "Natuurlijke voeding"
    ],
    usage: [
      "Bodemverbetering",
      "Mulchen",
      "Compostmengsel",
      "Tuinborders",
      "Boomvoeding"
    ]
  },
  {
    id: 5,
    name: "Tuinmeubel Set Steigerhout",
    description: "Complete tuinset van duurzaam steigerhout. Tafel + 4 stoelen, weerbestendig behandeld voor jarenlang plezier.",
    detailedDescription: "Deze prachtige tuinset is vervaardigd van hoogwaardig steigerhout en biedt een perfecte combinatie van stijl en functionaliteit. De set bestaat uit een ruime tafel en vier comfortabele stoelen, allemaal weerbestendig behandeld.",
    price: 299.00,
    originalPrice: 349.00,
    image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    images: [
      "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    category: "Tuinmeubels",
    inStock: true,
    popular: true,
    specifications: {
      volume: "Set van 5 stuks",
      weight: "45 kg",
      composition: "Duurzaam steigerhout",
      ph: "N.v.t.",
      nutrients: "N.v.t."
    },
    benefits: [
      "Duurzaam steigerhout",
      "Weerbestendig behandeld",
      "Complete set (tafel + 4 stoelen)",
      "Robuuste constructie",
      "Tijdloos design",
      "Jarenlang plezier"
    ],
    usage: [
      "Terras en patio",
      "Tuindiner",
      "Buitenentertainment",
      "Relaxen in de tuin",
      "Familiebijeenkomsten"
    ]
  },
  {
    id: 6,
    name: "Plantenbakken Set (3 stuks)",
    description: "Elegante plantenbakken van duurzaam hout. Perfect voor het creëren van groene accenten op terras of balkon.",
    detailedDescription: "Deze set van drie elegante plantenbakken is gemaakt van duurzaam hout en perfect voor het creëren van prachtige groene accenten. Ideaal voor terras, balkon of als decoratief element in de tuin.",
    price: 89.95,
    image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    images: [
      "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    category: "Tuinmeubels",
    inStock: true,
    specifications: {
      volume: "Set van 3 stuks",
      weight: "12 kg",
      composition: "Duurzaam hout",
      ph: "N.v.t.",
      nutrients: "N.v.t."
    },
    benefits: [
      "Duurzaam hout",
      "Elegante uitstraling",
      "Set van 3 verschillende maten",
      "Weerbestendig",
      "Veelzijdig inzetbaar",
      "Eenvoudig onderhoud"
    ],
    usage: [
      "Terras decoratie",
      "Balkon inrichting",
      "Tuinaccenten",
      "Kruidenplanten",
      "Bloemen display"
    ]
  }
];

const ProductDetail: React.FC<{ onAddToCart: (product: any) => void }> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      try {
        const productData = await db.getProduct(id);
        setProduct(productData);
        
        // Fetch related products (exclude current product)
        const allProducts = await db.getProducts();
        const related = allProducts.filter(p => p.id !== id).slice(0, 3);
        setRelatedProducts(related);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Product niet gevonden');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900 mx-auto mb-4"></div>
          <p className="text-stone-600">Product laden...</p>
        </div>
      </div>
    );
  }
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-900 mb-4">{error || 'Product niet gevonden'}</h1>
          <Link to="/shop" className="text-primary-900 hover:text-primary-800">
            Terug naar shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
  };

  const totalPrice = product.price * quantity;
  const productImages = product.image_urls && product.image_urls.length > 0 
    ? product.image_urls 
    : [product.image_url || 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'];

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-32 pb-8 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <nav className="flex items-center space-x-2 text-sm text-stone-600">
            <Link to="/" className="hover:text-primary-900">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-primary-900">Shop</Link>
            <span>/</span>
            <span className="text-stone-900">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 mb-16">
            {/* Product Images */}
            <AnimationObserver animationType="slide-left">
              <div className="space-y-6">
                {/* Main Image */}
                <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-soft">
                  <img 
                    src={productImages[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                        selectedImage === index 
                          ? 'ring-2 ring-primary-900 shadow-soft-lg' 
                          : 'hover:shadow-soft'
                      }`}
                    >
                      <img 
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </AnimationObserver>

            {/* Product Info */}
            <AnimationObserver animationType="slide-right">
              <div className="space-y-8">
                {/* Header */}
                <div>
                  {product.popular && (
                    <div className="inline-flex items-center bg-accent-100 text-accent-800 px-3 py-1 rounded-lg text-sm font-semibold mb-4">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Populair
                    </div>
                  )}
                  <h1 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">{product.name}</h1>
                  <p className="text-lg text-stone-600 leading-relaxed">{product.description}</p>
                  {(product.volume || product.weight) && (
                    <div className="mt-4 flex items-center space-x-2">
                      <span className="text-base font-medium text-stone-700">
                        Inhoud: {product.volume || product.weight}
                      </span>
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-primary-900">
                      {product.price === 0 ? 'Prijs op aanvraag' : `€${product.price.toFixed(2)}`}
                    </div>
                    {product.original_price && product.price !== 0 && (
                      <div className="text-xl text-stone-500 line-through">€{product.original_price.toFixed(2)}</div>
                    )}
                    <div className="text-sm text-stone-600 bg-stone-100 px-3 py-1 rounded-lg font-medium">
                      {product.category}
                    </div>
                  </div>
                  {product.price !== 0 && (product.volume || product.weight) && (() => {
                    const volumeStr = product.volume || product.weight;
                    const match = volumeStr?.match(/(\d+)\s*(kg|L|l)/i);
                    if (match) {
                      const unitValue = parseInt(match[1]);
                      const unit = match[2].toLowerCase() === 'l' ? 'L' : match[2];
                      const pricePerUnit = product.price / unitValue;
                      return (
                        <div className="text-base text-stone-600">
                          €{pricePerUnit.toFixed(2)} / {unit}
                        </div>
                      );
                    }
                    return null;
                  })()}
                </div>

                {/* Stock Status */}
                <div className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold ${
                  product.in_stock 
                    ? 'bg-primary-100 text-primary-900' 
                    : 'bg-stone-100 text-stone-600'
                }`}>
                  {product.in_stock ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Op voorraad
                    </>
                  ) : (
                    'Tijdelijk uitverkocht'
                  )}
                </div>

                {/* Quantity & Add to Cart */}
                {product.in_stock && (
                  <div className="space-y-6">
                    {product.price !== 0 && (
                      <div className="flex items-center space-x-4">
                        <span className="text-stone-700 font-medium">Aantal:</span>
                        <div className="flex items-center bg-white rounded-xl border border-stone-200 shadow-soft">
                          <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-12 h-12 flex items-center justify-center text-stone-600 hover:text-primary-900 hover:bg-stone-50 rounded-l-xl transition-all duration-300"
                          >
                            <Minus className="w-5 h-5" />
                          </button>
                          <span className="w-16 text-center font-semibold text-stone-900 py-3">
                            {quantity}
                          </span>
                          <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-12 h-12 flex items-center justify-center text-stone-600 hover:text-primary-900 hover:bg-stone-50 rounded-r-xl transition-all duration-300"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="text-lg font-semibold text-stone-900">
                          Totaal: €{totalPrice.toFixed(2)}
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-4">
                      <button
                        onClick={() => {
                          if (product.price === 0) {
                            window.location.href = '/contact';
                          } else {
                            handleAddToCart();
                          }
                        }}
                        className="flex-1 bg-gradient-to-r from-primary-900 to-primary-800 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-primary-800 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                      >
                        <ShoppingCart className="w-6 h-6 mr-3" />
                        {product.price === 0 ? 'Offerte aanvragen' : 'In Winkelwagen'}
                      </button>
                      <button className="w-14 h-14 bg-white border-2 border-stone-200 rounded-xl flex items-center justify-center hover:border-primary-900 hover:text-primary-900 transition-all duration-300">
                        <Heart className="w-6 h-6" />
                      </button>
                      <button className="w-14 h-14 bg-white border-2 border-stone-200 rounded-xl flex items-center justify-center hover:border-primary-900 hover:text-primary-900 transition-all duration-300">
                        <Share2 className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center bg-white rounded-xl p-4 shadow-soft">
                    <Leaf className="w-8 h-8 text-primary-900 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-stone-900">100% Biologisch</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4 shadow-soft">
                    <Truck className="w-8 h-8 text-primary-900 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-stone-900">Gratis Bezorging</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4 shadow-soft">
                    <Shield className="w-8 h-8 text-primary-900 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-stone-900">30 Dagen Garantie</div>
                  </div>
                </div>
              </div>
            </AnimationObserver>
          </div>

          {/* Product Details Tabs */}
          <AnimationObserver>
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              {/* Tab Navigation */}
              <div className="border-b border-stone-200">
                <div className="flex">
                  {[
                    { key: 'description', label: 'Beschrijving' },
                    { key: 'specifications', label: 'Specificaties' },
                    { key: 'benefits', label: 'Voordelen' },
                    { key: 'usage', label: 'Gebruik' }
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-8 py-6 font-semibold transition-all duration-300 ${
                        activeTab === tab.key
                          ? 'text-primary-900 border-b-2 border-primary-900 bg-primary-50'
                          : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === 'description' && (
                  <div className="prose prose-stone max-w-none">
                    <p className="text-lg text-stone-700 leading-relaxed">
                      {product.detailed_description || product.description}
                    </p>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      ['Volume', product.volume],
                      ['Gewicht', product.weight],
                      ['Samenstelling', product.composition],
                      ['pH-waarde', product.ph_value],
                      ['Voedingsstoffen', product.nutrients]
                    ].filter(([_, value]) => value).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b border-stone-100">
                        <span className="font-medium text-stone-900 capitalize">
                          {key}:
                        </span>
                        <span className="text-stone-700">{value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'benefits' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {(product.benefits || []).map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                        <span className="text-stone-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'usage' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {(product.usage_areas || []).map((use, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-900 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-stone-700">{use}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </AnimationObserver>

          {/* Back to Shop */}
          <AnimationObserver>
            <div className="text-center mt-16">
              <Link 
                to="/shop"
                className="inline-flex items-center text-primary-900 hover:text-primary-800 transition-colors font-semibold"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Terug naar shop
              </Link>
            </div>
          </AnimationObserver>
        </div>
      </section>

      {/* Gerelateerde Producten */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
          <AnimationObserver>
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-4">
                Gerelateerde <span className="text-primary-900">Producten</span>
              </h2>
              <div className="w-16 h-px bg-primary-900 mx-auto mb-4"></div>
              <p className="text-stone-600">
                Ontdek ook deze premium tuinproducten
              </p>
            </div>
          </AnimationObserver>

          <div className="grid md:grid-cols-3 gap-8 xl:gap-10">
            {relatedProducts.map((relatedProduct, index) => (
                <AnimationObserver key={relatedProduct.id} delay={index * 100}>
                  <div 
                    className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 relative cursor-pointer"
                    onClick={() => window.location.href = `/product/${relatedProduct.id}`}
                  >
                    {/* Popular Badge */}
                    {relatedProduct.popular && (
                      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-accent-600 to-accent-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-soft">
                        POPULAIR
                      </div>
                    )}
                    
                    {/* Stock Status */}
                    <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-lg text-xs font-semibold ${
                      relatedProduct.in_stock 
                        ? 'bg-primary-100 text-primary-900' 
                        : 'bg-stone-100 text-stone-600'
                    }`}>
                      {relatedProduct.in_stock ? 'Op voorraad' : 'Uitverkocht'}
                    </div>

                    {/* Product Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-50">
                      <img 
                        src={relatedProduct.image_url || 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'}
                        alt={relatedProduct.name}
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
                          {relatedProduct.name}
                        </h3>
                        <p className="text-stone-600 leading-relaxed mb-4 text-sm">
                          {relatedProduct.description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-2xl font-bold text-primary-900">
                              {relatedProduct.price === 0 ? 'Prijs op aanvraag' : `€${relatedProduct.price.toFixed(2)}`}
                            </div>
                            {relatedProduct.original_price && relatedProduct.price !== 0 && (
                              <div className="text-sm text-stone-500 line-through">€{relatedProduct.original_price.toFixed(2)}</div>
                            )}
                          </div>
                          <div className="text-xs text-stone-500 bg-stone-100 px-3 py-1 rounded-lg font-medium">
                            {relatedProduct.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimationObserver>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;