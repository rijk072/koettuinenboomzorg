import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const ADMIN_PASSWORD = 'Snarfteok1!';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('admin_authenticated', 'true');
        sessionStorage.setItem('admin_login_time', new Date().toISOString());
        onLoginSuccess();
      } else {
        setError('Verkeerd wachtwoord. Probeer het opnieuw.');
        setPassword('');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-stone-900 mb-2">
            Admin Panel
          </h1>
          <p className="text-stone-600">
            Koet Tuin & Boomzorg
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Wachtwoord
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                placeholder="Voer admin wachtwoord in"
                className="w-full px-4 py-3 pr-12 border border-stone-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                autoFocus
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <span className="inline-block w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!password || isLoading}
            className="w-full bg-primary-900 text-white py-3 rounded-xl font-semibold hover:bg-primary-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Controleren...
              </>
            ) : (
              'Inloggen'
            )}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-stone-200">
          <p className="text-xs text-stone-500 text-center">
            Alleen geauthoriseerde gebruikers hebben toegang tot dit panel.
            <br />
            Neem contact op met de beheerder als je problemen hebt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
