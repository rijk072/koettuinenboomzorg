import React, { useState } from 'react';

interface CertificateBadgeProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const CertificateBadge: React.FC<CertificateBadgeProps> = ({ 
  image, 
  title, 
  subtitle, 
  description 
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.03] hover:-translate-y-2">
        <img 
          src={image} 
          alt={title}
          className="h-16 w-16 mx-auto object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
        />
        <h4 className="font-bold text-stone-900 text-sm mb-1">{title}</h4>
        <p className="text-xs text-stone-600">{subtitle}</p>
      </div>
      
      {/* Tooltip */}
      <div className={`absolute z-50 px-3 py-2 text-sm text-white bg-green-900 rounded-lg shadow-lg opacity-0 pointer-events-none transition-all duration-300 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 ${showTooltip ? 'opacity-100 pointer-events-auto translate-y-0' : 'translate-y-2'}`}>
        {description}
      </div>
    </div>
  );
};

export default CertificateBadge;