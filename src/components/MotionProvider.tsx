import React, { createContext, useContext, useState, useEffect } from 'react';

interface MotionContextType {
  prefersReducedMotion: boolean;
  enableAnimations: boolean;
  toggleAnimations: () => void;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

export const useMotion = () => {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error('useMotion must be used within a MotionProvider');
  }
  return context;
};

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enableAnimations, setEnableAnimations] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user's motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    // Check localStorage for user preference
    const savedPreference = localStorage.getItem('enableAnimations');
    if (savedPreference !== null) {
      setEnableAnimations(JSON.parse(savedPreference));
    }
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleAnimations = () => {
    const newValue = !enableAnimations;
    setEnableAnimations(newValue);
    localStorage.setItem('enableAnimations', JSON.stringify(newValue));
  };

  return (
    <MotionContext.Provider value={{
      prefersReducedMotion,
      enableAnimations: enableAnimations && !prefersReducedMotion,
      toggleAnimations
    }}>
      {children}
    </MotionContext.Provider>
  );
};