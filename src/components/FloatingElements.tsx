import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useMotion } from './MotionProvider';

const FloatingElements = () => {
  const { enableAnimations } = useMotion();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const animationProps = enableAnimations ? {
    animate: { 
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0]
    },
    transition: { 
      repeat: Infinity, 
      duration: 3,
      ease: "easeInOut"
    }
  } : {};

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        {...animationProps}
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </>
  );
};

export default FloatingElements;