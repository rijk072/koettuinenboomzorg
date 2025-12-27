import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import AnimationObserver from '../components/AnimationObserver';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <AnimationObserver>
          <div className="mb-8">
            <h1 className="text-[180px] md:text-[220px] lg:text-[280px] font-bold text-primary-900 leading-none tracking-tighter">
              404
            </h1>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Pagina niet gevonden
          </h2>

          <p className="text-lg text-neutral-600 mb-12 max-w-md mx-auto">
            De pagina die u zoekt bestaat niet of is verplaatst. Keer terug naar de homepage of ga terug naar de vorige pagina.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-primary-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-800 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center uppercase tracking-wider"
            >
              <Home className="w-5 h-5 mr-3" />
              Naar Homepage
            </Link>

            <button
              onClick={() => navigate(-1)}
              className="border-2 border-primary-900 text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-900 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center uppercase tracking-wider"
            >
              <ArrowLeft className="w-5 h-5 mr-3" />
              Ga Terug
            </button>
          </div>
        </AnimationObserver>
      </div>
    </div>
  );
};

export default NotFound;
