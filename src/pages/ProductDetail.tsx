import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Plus, Minus, Star, Shield, Truck, Leaf, CheckCircle, Heart, Share2 } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';
import Toast from '../components/Toast';
import { Product } from '../lib/supabase';
import { getProductById, ProductData, allProducts } from '../data/products';

const products: ProductData[] = allProducts;

const ProductDetail: React.FC<{ onAddToCart: (product: any) => void }> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState<ProductData | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!id) return;

    try {
      const productData = getProductById(id);
      if (!productData) {
        setError('Product niet gevonden');
        setLoading(false);
        return;
      }

      setProduct(productData);

      const related = products
        .filter(p => p.id !== id && p.category === productData.category)
        .slice(0, 3);
      setRelatedProducts(related);
    } catch (err) {
      console.error('Error fetching product:', err);
      setError('Product niet gevonden');
    } finally {
      setLoading(false);
    }
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
    setShowToast(true);
  };

  const totalPrice = product.price * quantity;
  const productImages = [
    product.image_url || 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    ...(product.extra_images || [])
  ];

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
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-xl overflow-hidden transition-all duration-300 bg-white ${
                        selectedImage === index
                          ? 'ring-2 ring-primary-900 shadow-soft-lg'
                          : 'hover:shadow-soft'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-contain p-2"
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
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-stone-700 font-medium">Aantal zakken:</span>
                        {product.price === 0 && (
                          <span className="text-sm text-stone-500 italic">Prijs op aanvraag</span>
                        )}
                      </div>

                      <div className="flex items-center space-x-3">
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
                        {product.price !== 0 && (
                          <div className="text-lg font-semibold text-stone-900">
                            Totaal: €{totalPrice.toFixed(2)}
                          </div>
                        )}
                      </div>

                      {product.price === 0 && (
                        <div className="flex flex-wrap gap-2">
                          <span className="text-sm text-stone-600">Snel kiezen:</span>
                          {[10, 20, 50, 100].map((num) => (
                            <button
                              key={num}
                              onClick={() => setQuantity(num)}
                              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                quantity === num
                                  ? 'bg-primary-900 text-white shadow-md'
                                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                              }`}
                            >
                              {num}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-4">
                      <button
                        onClick={() => {
                          handleAddToCart();
                        }}
                        className="flex-1 bg-gradient-to-r from-primary-900 to-primary-800 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-primary-800 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                      >
                        <ShoppingCart className="w-6 h-6 mr-3" />
                        Toevoegen aan winkelwagen
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
                      <div key={key as string} className="flex justify-between items-center py-3 border-b border-stone-100">
                        <span className="font-medium text-stone-900 capitalize">
                          {key}:
                        </span>
                        <span className="text-stone-700">{value as string}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'benefits' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                        <span className="text-stone-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'usage' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.usage_areas.map((use, index) => (
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

      {showToast && (
        <Toast
          message={`${quantity} ${quantity === 1 ? 'product' : 'producten'} toegevoegd aan winkelwagen`}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default ProductDetail;