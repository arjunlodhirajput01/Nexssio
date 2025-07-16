import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video, Palette, Camera, Zap, Play, Image, Layers, Monitor } from 'lucide-react';

const CreativeServices = () => {
  const projects = [
    { icon: Video, title: "Business Documentary", description: "Professional documentary production for your business story" },
    { icon: Play, title: "Promotional/Ad Video", description: "Engaging promotional videos that convert viewers to customers" },
    { icon: Zap, title: "Logo Animations", description: "Dynamic logo animations that bring your brand to life" },
    { icon: Image, title: "Motion Brochures", description: "Transform static brochures into engaging motion graphics" },
    { icon: Palette, title: "Brand Visual Kits", description: "Complete brand identity packages with all visual elements" },
    { icon: Layers, title: "Instagram/LinkedIn Templates", description: "Professional templates for social media success" },
    { icon: Monitor, title: "UI Motion Design", description: "Interactive and animated user interface designs" },
    { icon: Camera, title: "Product Showcase", description: "Stunning product videos and photography" }
  ];

  const tools = [
    { name: "After Effects", category: "Motion Graphics" },
    { name: "Premiere Pro", category: "Video Editing" },
    { name: "Photoshop", category: "Image Editing" },
    { name: "Illustrator", category: "Vector Graphics" },
    { name: "Blender", category: "3D Animation" },
    { name: "DaVinci Resolve", category: "Color Grading" },
    { name: "InDesign", category: "Layout Design" },
    { name: "Canva Pro", category: "Quick Design" }
  ];

  const offers = [
    { 
      icon: Play, 
      title: "One-Minute Promo", 
      price: "Starting at ₹5,000", 
      description: "Perfect for social media and quick brand introduction" 
    },
    { 
      icon: Video, 
      title: "Full Brand Showreel", 
      price: "Custom Quote", 
      description: "Comprehensive brand video package with multiple formats" 
    },
    { 
      icon: Zap, 
      title: "Animated Brochures", 
      price: "Starting at ₹3,000", 
      description: "Transform your PDFs into engaging motion graphics" 
    },
    { 
      icon: Layers, 
      title: "Bulk Content Package", 
      price: "Volume Discounts", 
      description: "Multiple videos and graphics at discounted rates" 
    }
  ];

  return (
    <motion.div 
      className="min-h-screen pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Bring Your <span className="gradient-text">Brand to Life</span>
            <br />
            with <span className="gradient-text">Motion & Design</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Documentaries, Branding, Templates, and Motion Magic.
          </motion.p>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </section>

      {/* Creative Showreel Grid */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Creative Project Types
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group p-6 glass-effect rounded-lg hover-lift cursor-pointer overflow-hidden relative"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  const routes = {
                    "Business Documentary": "/creative/business-documentary",
                    "Promotional/Ad Video": "/creative/promotional-video", 
                    "Logo Animations": "/creative/logo-animations",
                    "Motion Brochures": "/creative/motion-brochures"
                  };
                  const route = routes[project.title as keyof typeof routes];
                  if (route) window.location.href = route;
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <project.icon size={48} className="mx-auto mb-4 text-purple-400 group-hover:text-pink-400 transition-colors relative z-10" />
                <h3 className="text-lg font-semibold mb-2 text-center relative z-10">{project.title}</h3>
                <p className="text-gray-400 text-sm text-center relative z-10">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Tools */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Creative Tools & Software
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="p-6 glass-effect rounded-lg hover-lift text-center group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Offers */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Business Packages
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                className="p-8 glass-effect rounded-lg hover-lift group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <offer.icon size={48} className="mb-4 text-purple-400 group-hover:text-pink-400 transition-colors" />
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-xl text-green-400 font-semibold mb-4">{offer.price}</p>
                <p className="text-gray-400">{offer.description}</p>
                <motion.button
                  className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Quote
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Creative Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We understand your vision and requirements" },
              { step: "02", title: "Concept", description: "We create initial concepts and storyboards" },
              { step: "03", title: "Creation", description: "We bring your ideas to life with our tools" },
              { step: "04", title: "Delivery", description: "We deliver polished, professional results" }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl font-bold gradient-text mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-purple-900 to-pink-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Bring Your Vision to Life?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Let's create something amazing together. Professional quality, creative excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/creative/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CreativeServices;