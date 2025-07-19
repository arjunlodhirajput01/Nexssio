import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Sun, Moon, Gamepad2, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      id: 'light' as const,
      name: 'Light Mode',
      description: 'Clean and bright',
      icon: Sun,
      colors: ['#ffffff', '#f8fafc', '#e2e8f0']
    },
    {
      id: 'dark' as const,
      name: 'Dark Mode',
      description: 'Easy on the eyes',
      icon: Moon,
      colors: ['#0f172a', '#1e293b', '#334155']
    },
    {
      id: 'gaming' as const,
      name: 'Gaming Mode',
      description: 'Neon effects',
      icon: Gamepad2,
      colors: ['#00ff41', '#ff0080', '#00ffff']
    }
  ];

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 bg-gray-800 dark:bg-gray-700 gaming:bg-black gaming:border gaming:border-green-400 hover:bg-gray-700 dark:hover:bg-gray-600 gaming:hover:bg-gray-900 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 gaming:shadow-green-400/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Choose Theme"
      >
        <Palette size={20} className="gaming:text-green-400" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 gaming:bg-black gaming:border gaming:border-green-400 rounded-lg p-6 max-w-md w-full gaming:shadow-2xl gaming:shadow-green-400/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white gaming:text-green-400">
                  Choose Theme
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 gaming:text-green-400 gaming:hover:text-green-300"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {themes.map((themeOption) => {
                  const IconComponent = themeOption.icon;
                  const isSelected = theme === themeOption.id;
                  
                  return (
                    <motion.button
                      key={themeOption.id}
                      onClick={() => {
                        setTheme(themeOption.id);
                        setIsOpen(false);
                      }}
                      className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                        isSelected
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 gaming:border-green-400 gaming:bg-green-400/10'
                          : 'border-gray-200 dark:border-gray-600 gaming:border-gray-700 hover:border-purple-300 dark:hover:border-purple-400 gaming:hover:border-green-500'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${
                          isSelected
                            ? 'bg-purple-500 text-white gaming:bg-green-400 gaming:text-black'
                            : 'bg-gray-100 dark:bg-gray-700 gaming:bg-gray-800 text-gray-600 dark:text-gray-300 gaming:text-green-400'
                        }`}>
                          <IconComponent size={24} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className={`font-semibold ${
                            isSelected
                              ? 'text-purple-700 dark:text-purple-300 gaming:text-green-400'
                              : 'text-gray-900 dark:text-white gaming:text-green-300'
                          }`}>
                            {themeOption.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 gaming:text-gray-400">
                            {themeOption.description}
                          </p>
                        </div>
                        
                        <div className="flex space-x-1">
                          {themeOption.colors.map((color, index) => (
                            <div
                              key={index}
                              className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeToggle;