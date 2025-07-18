import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { useMotion } from './MotionProvider';

const AnimationToggle: React.FC = () => {
  const { enableAnimations, toggleAnimations } = useMotion();

  return (
    <motion.button
      onClick={toggleAnimations}
      className="fixed bottom-4 right-20 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={enableAnimations ? 'Disable Animations' : 'Enable Animations'}
      aria-label={enableAnimations ? 'Disable Animations' : 'Enable Animations'}
    >
      {enableAnimations ? <Pause size={20} /> : <Play size={20} />}
    </motion.button>
  );
};

export default AnimationToggle;