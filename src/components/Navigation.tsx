import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  totalItems?: number;
  onCartClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ totalItems = 0, onCartClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = window.scrollY > 50;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const isAtBottom = currentScrollY + windowHeight >= documentHeight - 100;
      
      setScrolled(isScrolled);
      
      // Show navbar when:
      // 1. At top of page (first 100px)
      // 2. Scrolling up
      // 3. At bottom of page
      if (currentScrollY < 100 || currentScrollY < lastScrollY || isAtBottom) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide when scrolling down and not at top
        setVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    } ${
      scrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-premium border-b border-white/50 text-stone-900' 
        : 'bg-transparent'
    }`}>
      <div className="container-premium">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center transition-all duration-500">
              <img
                src="/images/logo.jpeg"
                alt="Koet Tuin & Boomzorg Logo"
                className="h-14 w-auto transition-all duration-500 group-hover:scale-105 drop-shadow-lg"
              />
              <div className="ml-4 hidden sm:block">
                <span className={`text-xl font-semibold drop-shadow-lg transition-all duration-500 group-hover:opacity-90 ${
                  scrolled ? 'text-stone-900' : 'text-white'
                }`}>
                  Koet Tuin & Boomzorg
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'HOME' },
              { path: '/over-ons', label: 'OVER ONS' },
              { path: '/diensten', label: 'DIENSTEN' },
              { path: '/voor-hoveniers', label: 'VOOR HOVENIERS' },
              { path: '/projecten', label: 'PROJECTEN' },
              { path: '/shop', label: 'SHOP' },
              { path: '/contact', label: 'CONTACT' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`font-bold text-xs uppercase tracking-wider transition-all duration-500 relative group hover:-translate-y-0.5 whitespace-nowrap ${
                  isActive(item.path) 
                    ? 'text-primary-900'
                    : scrolled
                      ? 'text-stone-900 hover:text-primary-900'
                      : 'text-white/90 hover:text-white drop-shadow-md'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-2 left-0 right-0 h-1 rounded-full drop-shadow-sm transition-all duration-500 bg-primary-900"></div>
                )}
                {!isActive(item.path) && (
                  <div className="absolute -bottom-2 left-0 right-0 h-1 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left drop-shadow-sm bg-primary-900"></div>
                )}
              </Link>
            ))}
            
            {/* Shopping Cart Icon */}
            <button
              onClick={onCartClick}
              className={`relative p-3 rounded-xl transition-all duration-500 hover:scale-110 ${
                scrolled
                  ? 'text-stone-900 hover:bg-stone-100/80' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Cart and Menu Buttons */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Shopping Cart Icon */}
            <button
              onClick={onCartClick}
              className={`relative p-3 rounded-xl transition-all duration-500 hover:scale-110 ${
                scrolled
                  ? 'text-stone-900 hover:bg-stone-100/80 backdrop-blur-sm'
                  : 'text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-3 rounded-xl transition-all duration-500 drop-shadow-lg hover:scale-110 ${
                scrolled
                  ? 'text-stone-900 hover:bg-stone-100/80 backdrop-blur-sm'
                  : 'text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 py-6 transition-all duration-500 bg-white/98 backdrop-blur-xl shadow-lg">
            <div className="flex flex-col space-y-6">
              {[
                { path: '/', label: 'HOME' },
                { path: '/over-ons', label: 'OVER ONS' },
                { path: '/diensten', label: 'DIENSTEN' },
                { path: '/voor-hoveniers', label: 'VOOR HOVENIERS' },
                { path: '/projecten', label: 'PROJECTEN' },
                { path: '/shop', label: 'SHOP' },
                { path: '/contact', label: 'CONTACT' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-bold text-base uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-500 hover:scale-105 ${
                    isActive(item.path)
                      ? 'text-primary-900 bg-primary-50'
                      : 'text-stone-900 hover:text-primary-900 hover:bg-stone-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;