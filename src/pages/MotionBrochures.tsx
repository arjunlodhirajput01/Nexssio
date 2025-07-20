import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Image, Play, Star, Award, Clock, FileText, CheckCircle } from 'lucide-react';

const MotionBrochures = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const brochurePortfolio = [
    {
      id: 1,
      title: "Product Catalog Animation",
      client: "ElectroTech Industries",
      thumbnail: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Interactive product catalog with smooth transitions and engaging animations",
      duration: "2:30",
      year: "2024",
      category: "Product Catalog"
    },
    {
      id: 2,
      title: "Service Portfolio Presentation",
      client: "Creative Agency Pro",
      thumbnail: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Dynamic service showcase with motion graphics and professional layout",
      duration: "3:15",
      year: "2024",
      category: "Service Portfolio"
    },
    {
      id: 3,
      title: "Company Profile Brochure",
      client: "Global Solutions Ltd",
      thumbnail: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Comprehensive company profile with animated infographics and statistics",
      duration: "4:00",
      year: "2024",
      category: "Company Profile"
    },
    {
      id: 4,
      title: "Real Estate Brochure",
      client: "Premium Properties",
      thumbnail: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Elegant property showcase with virtual tours and animated floor plans",
      duration: "2:45",
      year: "2024",
      category: "Real Estate"
    }
  ];

  const features = [
    {
      icon: Image,
      title: "Interactive Experience",
      description: "Transform static brochures into engaging interactive presentations"
    },
    {
      icon: FileText,
      title: "Information Rich",
      description: "Present complex information in digestible, visually appealing formats"
    },
    {
      icon: Clock,
      title: "Time Efficient",
      description: "Convey more information in less time compared to traditional brochures"
    },
    {
      icon: Award,
      title: "Professional Impact",
      description: "Make lasting impressions with polished, professional presentations"
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
            <Image size={80} className="mx-auto text-green-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Motion Brochures</span>
            <br />
            Interactive Presentations
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Transform your static brochures into dynamic, interactive presentations. Engage your audience 
            with motion graphics, smooth transitions, and compelling visual storytelling.
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
            Benefits of Motion Brochures
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
                <feature.icon size={48} className="mx-auto mb-4 text-green-400" />
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
            Motion Brochure Portfolio
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brochurePortfolio.map((item, index) => (
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
                  <p className="text-green-400 text-sm mb-2">Client: {item.client}</p>
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
        className="py-20 bg-gradient-to-r from-green-900 to-teal-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Animate Your Brochure?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Let's transform your static materials into engaging motion presentations.
          </p>
          <motion.button
            onClick={() => {
              const phoneNumber = "+917206366729";
              const message = "I would like to create a motion brochure with Nexssio.";
              const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-white text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Motion Brochure
          </motion.button>
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
              title="Motion Brochure"
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

export default MotionBrochures;