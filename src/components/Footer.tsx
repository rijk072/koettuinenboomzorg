import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import CertificateBadge from './CertificateBadge';
import AnimationObserver from './AnimationObserver';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 text-center text-green-200">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Bedrijfsinfo */}
            <div className="text-left">
              <img
                src="/images/logo.jpeg"
                alt="Koet Tuin & Boomzorg Logo"
                className="h-12 w-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-white mb-4">Koet Tuin & Boomzorg</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Premium hovenierswerk sinds 1989. European Tree Worker gecertificeerd
                voor de hoogste kwaliteitsstandaarden.
              </p>
              <p className="text-stone-400 leading-relaxed mt-4">
                Ook officiële ECOstyle dealer voor professionele hoveniers
              </p>
            </div>

            {/* Diensten */}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white mb-4">Pagina's</h3>
              <ul className="space-y-2 text-sm text-stone-300">
                <li><Link to="/over-ons" className="hover:text-white transition-colors">Over Ons</Link></li>
                <li><Link to="/diensten" className="hover:text-white transition-colors">Diensten</Link></li>
                <li><Link to="/projecten" className="hover:text-white transition-colors">Projecten</Link></li>
                <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Pagina's */}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white mb-4">Informatie</h3>
              <ul className="space-y-2 text-sm text-stone-300">
                <li><Link to="/algemene-voorwaarden" className="hover:text-white transition-colors">Algemene Voorwaarden</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacybeleid</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-3 text-sm text-stone-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary-400" />
                  <a href="tel:0653747696" className="hover:text-white transition-colors">0653747696</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary-400" />
                  <a href="mailto:frans@koet.net" className="hover:text-white transition-colors">frans@koet.net</a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-primary-400 mt-0.5" />
                  <div>
                    <p>Heereweg 38 E</p>
                    <p>1901 ME Bakkum</p>
                    <p className="text-stone-400 text-xs mt-1">Bakkum, Noord-Holland</p>
                    <p className="text-stone-400 text-xs">Werkgebied: Bakkum en omgeving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-stone-400 text-sm mb-4 md:mb-0">
                &copy; 2024 Koet Tuin & Boomzorg. Alle rechten voorbehouden.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link 
                  to="/algemene-voorwaarden"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Algemene Voorwaarden
                </Link>
                <Link 
                  to="/privacy"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Privacybeleid
                </Link>
                <Link 
                  to="/contact"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;