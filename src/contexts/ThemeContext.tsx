import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeMode = 'light' | 'dark' | 'gaming';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme) {
      setThemeState(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeState(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Remove all theme classes
    document.documentElement.classList.remove('light', 'dark', 'gaming');
    
    // Add current theme class
    document.documentElement.classList.add(theme);
    
    // Apply gaming mode styles
    if (theme === 'gaming') {
      document.documentElement.style.setProperty('--gaming-primary', '#00ff41');
      document.documentElement.style.setProperty('--gaming-secondary', '#ff0080');
      document.documentElement.style.setProperty('--gaming-accent', '#00ffff');
      document.documentElement.style.setProperty('--gaming-bg', '#0a0a0a');
    } else {
      document.documentElement.style.removeProperty('--gaming-primary');
      document.documentElement.style.removeProperty('--gaming-secondary');
      document.documentElement.style.removeProperty('--gaming-accent');
      document.documentElement.style.removeProperty('--gaming-bg');
    }
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};