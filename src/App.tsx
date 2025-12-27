import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Phone, ArrowRight, ShoppingBag, ArrowDown, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from './lib/supabase';
import CookieConsent from 'react-cookie-consent';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import StickyMobileCTA from './components/StickyMobileCTA';
import AnimationObserver from './components/AnimationObserver';
import ShoppingCart from './components/ShoppingCart';

const Home = lazy(() => import('./pages/Home'));
const OverOns = lazy(() => import('./pages/OverOns'));
const Diensten = lazy(() => import('./pages/Diensten'));
const ProjectenPage = lazy(() => import('./pages/Projecten'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Checkout = lazy(() => import('./pages/Checkout'));
const AlgemeneVoorwaarden = lazy(() => import('./pages/AlgemeneVoorwaarden'));
const Contact = lazy(() => import('./pages/Contact'));
const VoorHoveniers = lazy(() => import('./pages/VoorHoveniers'));
const NotFound = lazy(() => import('./pages/NotFound'));

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  volume?: string;
  weight?: string;
}

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-stone-50 to-white">
    <div className="text-center">
      <Loader2 className="w-16 h-16 text-primary-900 animate-spin mx-auto" />
    </div>
  </div>
);

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === parseInt(product.id));
      if (existingItem) {
        return prev.map(item =>
          item.id === parseInt(product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, {
          id: parseInt(product.id),
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image_url || 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          volume: product.volume,
          weight: product.weight
        }];
      }
    });
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <ScrollToTop />
        <Navigation totalItems={totalItems} onCartClick={() => setIsCartOpen(true)} />

        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/diensten" element={<Diensten />} />
          <Route path="/voor-hoveniers" element={<VoorHoveniers />} />
          <Route path="/projecten" element={
            <>
              {/* Hero Section */}
              <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0">
                  <img
                    src="/images/hero-garden.jpg"
                    alt="Premium Tuinprojecten"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
                </div>

                <div className="relative z-10 container-wide text-left text-white">
                  <AnimationObserver>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
                      Premium gerealiseerde
                      <span className="block text-white mt-2">tuinprojecten</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                      Ontdek onze portfolio van vakkundig uitgevoerde tuinprojecten in Bakkum, Noord-Holland
                    </p>
                  </AnimationObserver>
                  
                </div>
              </section>

              <ProjectenPage />
            </>
          } />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
          <Route path="/privacy" element={<AlgemeneVoorwaarden />} />
          <Route path="/contact" element={
            <>
              {/* Hero Section */}
              <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0">
                  <img
                    src="/images/hero-garden.jpg"
                    alt="Contact Koet Tuin & Boomzorg"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
                </div>

                <div className="relative z-10 container-wide text-left text-white">
                  <AnimationObserver>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
                      Premium contact voor uw
                      <span className="block text-white mt-2">tuindroom</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                      Neem contact op voor een vrijblijvend gesprek over uw tuinproject
                    </p>
                  </AnimationObserver>
                </div>
              </section>

              <Contact />
            </>
          } />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
        <StickyMobileCTA />
        
        <ShoppingCart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
          onAddBestSeller={addToCart}
        />

        <CookieConsent
          location="bottom"
          buttonText="Accepteren"
          declineButtonText="Weigeren"
          enableDeclineButton
          cookieName="koet-cookie-consent"
          style={{
            background: "#2B373B",
            padding: "20px",
            alignItems: "center"
          }}
          buttonStyle={{
            background: "#4E9525",
            color: "#fff",
            fontSize: "14px",
            borderRadius: "8px",
            padding: "10px 24px",
            fontWeight: "600"
          }}
          declineButtonStyle={{
            background: "transparent",
            color: "#fff",
            fontSize: "14px",
            borderRadius: "8px",
            padding: "10px 24px",
            border: "1px solid #fff"
          }}
          expires={365}
        >
          <span style={{ fontSize: "14px" }}>
            Wij gebruiken cookies voor een optimale website ervaring en om ons verkeer te analyseren met Google Analytics.{' '}
            <Link to="/privacy" style={{ color: "#4E9525", textDecoration: "underline" }}>
              Meer info
            </Link>
          </span>
        </CookieConsent>
      </div>
    </Router>
  );
}

export default App;