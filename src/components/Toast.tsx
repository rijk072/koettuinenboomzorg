import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-24 right-6 z-[100] animate-slide-in-right">
      <div className="bg-white rounded-xl shadow-premium border-2 border-primary-200 p-4 flex items-center gap-3 min-w-[300px]">
        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-6 h-6 text-primary-900" />
        </div>
        <p className="text-stone-900 font-semibold flex-1">{message}</p>
        <button
          onClick={onClose}
          className="text-stone-400 hover:text-stone-600 transition-colors flex-shrink-0"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
