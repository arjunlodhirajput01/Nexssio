import React, { useState, useRef, useEffect } from 'react';
import { useMotion } from './MotionProvider';

interface BackgroundVideoProps {
  src: string;
  fallbackColor?: string;
  className?: string;
  children?: React.ReactNode;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src,
  fallbackColor = 'from-gray-900 to-black',
  className = '',
  children
}) => {
  const { enableAnimations } = useMotion();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enableAnimations) return;

    const handleCanPlay = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [enableAnimations]);

  if (!enableAnimations || hasError) {
    return (
      <div className={`relative ${className}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${fallbackColor}`} />
        {children}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Fallback gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${fallbackColor}`} />
      
      {/* Video background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-30' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      >
        <source src={src} type="video/webm" />
        <source src={src.replace('.webm', '.mp4')} type="video/mp4" />
      </video>
      
      {children}
    </div>
  );
};

export default BackgroundVideo;