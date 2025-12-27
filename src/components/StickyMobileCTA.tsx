import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-stone-200 shadow-premium-xl">
      <div className="flex">
        <a 
          href="tel:0653747696"
          className="flex-1 bg-gradient-to-r from-primary-900 to-primary-800 text-white py-5 px-6 font-bold text-center uppercase tracking-wider text-sm hover:from-primary-800 hover:to-primary-700 transition-all duration-500 flex items-center justify-center active:scale-95"
        >
          <Phone className="w-5 h-5 mr-2" />
          BEL NU
        </a>
        <Link 
          to="/contact"
          className="flex-1 bg-gradient-to-r from-accent-600 to-accent-500 text-white py-5 px-6 font-bold text-center uppercase tracking-wider text-sm hover:from-accent-500 hover:to-accent-400 transition-all duration-500 flex items-center justify-center active:scale-95"
        >
          OFFERTE
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default StickyMobileCTA;