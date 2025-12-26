import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? 'visible' : ''} bg-gradient-to-br from-primary-900 to-primary-800 text-white p-5 rounded-2xl shadow-premium-lg hover:from-primary-800 hover:to-primary-700 hover:shadow-premium-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 micro-bounce border border-primary-700/50`}
      aria-label="Scroll naar boven"
    >
      <ArrowUp className="w-7 h-7" />
    </button>
  );
};

export default ScrollToTopButton;