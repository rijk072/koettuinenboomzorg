import { useEffect, useRef } from 'react';

interface AnimationObserverProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'slide-left' | 'slide-right';
  delay?: number;
}

const AnimationObserver: React.FC<AnimationObserverProps> = ({ 
  children, 
  className = '', 
  animationType = 'fade-up',
  delay = 0 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'slide-left':
        return 'animate-slide-left';
      case 'slide-right':
        return 'animate-slide-right';
      default:
        return 'animate-on-scroll';
    }
  };

  return (
    <div 
      ref={elementRef} 
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimationObserver;