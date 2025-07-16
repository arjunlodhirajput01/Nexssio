import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Play, Star, Award, Clock, Layers, CheckCircle } from 'lucide-react';

const LogoAnimations = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const logoPortfolio = [
    {
      id: 1,
      title: "Tech Startup Logo Animation",
      client: "InnovateTech Solutions",
      thumbnail: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Dynamic logo reveal with particle effects and smooth transitions",
      duration: "0:08",
      year: "2024",
      category: "Tech"
    },
    {
      id: 2,
      title: "Restaurant Brand Animation",
      client: "Spice Garden",
      thumbnail: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Warm, inviting logo animation with food-themed elements",
      duration: "0:06",
      year: "2024",
      category: "Food & Beverage"
    },
    {
      id: 3,
      title: "Fashion Brand Logo Reveal",
      client: "Urban Style Co.",
      thumbnail: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Elegant logo animation with fashion-forward aesthetics",
      duration: "0:10",
      year: "2024",
      category: "Fashion"
    },
    {
      id: 4,
      title: "Healthcare Logo Animation",
      client: "MedCare Hospital",
      thumbnail: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Professional medical logo with trust-building animation",
      duration: "0:07",
      year: "2024",
      category: "Healthcare"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Brand Recognition",
      description: "Memorable animations that make your logo stick in viewers' minds"
    },
    {
      icon: Layers,
      title: "Multiple Formats",
      description: "Delivered in various formats for web, social media, and presentations"
    },
    {
      icon: Clock,
      title: "Perfect Timing",
      description: "Optimized duration for maximum impact without viewer fatigue"
    },
    {
      icon: Award,
      title: "Professional Quality",
      description: "Cinema-grade animations that elevate your brand presence"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Back Navigation */}
      <div className="container mx-auto px-6 py-4">
        <Link 
          to="/creative"
          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Creative Services</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Zap size={80} className="mx-auto text-yellow-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Logo Animations</span>
            <br />
            Bring Brands to Life
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Transform your static logo into a dynamic brand experience. Professional logo animations 
            that capture attention, build recognition, and make lasting impressions across all platforms.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why Animated Logos Matter
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <feature.icon size={48} className="mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Logo Animation Portfolio
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logoPortfolio.map((item, index) => (
              <motion.div
                key={item.id}
                className="group glass-effect rounded-lg overflow-hidden hover-lift cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setSelectedVideo(item.videoUrl)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play size={64} className="text-white" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-white text-sm">
                    {item.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-yellow-400 text-sm mb-2">Client: {item.client}</p>
                  <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-purple-400">{item.category}</span>
                    <span className="text-gray-500">{item.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-yellow-900 to-orange-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Animate Your Logo?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Let's create a stunning logo animation that brings your brand to life.
          </p>
          <Link
            to="/contact"
            className="bg-white text-yellow-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Logo Animation
          </Link>
        </div>
      </motion.section>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo}
              title="Logo Animation"
              className="w-full h-full rounded-lg"
              allowFullScreen
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LogoAnimations;