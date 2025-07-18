import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import { useMotion } from './MotionProvider';

interface OptimizedLottieProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
  onComplete?: () => void;
  lazy?: boolean;
}

const OptimizedLottie: React.FC<OptimizedLottieProps> = ({
  animationData,
  className = '',
  loop = true,
  autoplay = true,
  style = {},
  onComplete,
  lazy = true
}) => {
  const { enableAnimations } = useMotion();
  const [isVisible, setIsVisible] = useState(!lazy);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy]);

  if (!enableAnimations) {
    return (
      <div 
        ref={containerRef}
        className={`${className} flex items-center justify-center`}
        style={style}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-50" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className} style={style}>
      {isVisible && (
        <Lottie
          animationData={animationData}
          loop={loop}
          autoplay={autoplay}
          onComplete={onComplete}
          onDOMLoaded={() => setIsLoaded(true)}
          style={{ 
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      )}
    </div>
  );
};

export default OptimizedLottie;