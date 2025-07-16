import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Zap, Star, Award, Clock, Target, CheckCircle } from 'lucide-react';

const PromotionalVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const promoPortfolio = [
    {
      id: 1,
      title: "Restaurant Grand Opening",
      client: "Spice Garden Restaurant",
      thumbnail: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Mouth-watering promotional video that increased bookings by 300%",
      duration: "1:30",
      year: "2024",
      category: "Restaurant"
    },
    {
      id: 2,
      title: "Fashion Brand Launch",
      client: "Urban Style Co.",
      thumbnail: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Dynamic fashion promo showcasing new collection with trendy aesthetics",
      duration: "2:15",
      year: "2024",
      category: "Fashion"
    },
    {
      id: 3,
      title: "Tech Product Launch",
      client: "NextGen Electronics",
      thumbnail: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Sleek product showcase highlighting innovative features and benefits",
      duration: "1:45",
      year: "2024",
      category: "Technology"
    },
    {
      id: 4,
      title: "Fitness Center Promo",
      client: "PowerFit Gym",
      thumbnail: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "High-energy promotional video showcasing facilities and success stories",
      duration: "2:00",
      year: "2024",
      category: "Fitness"
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Conversion Focused",
      description: "Designed to turn viewers into customers with compelling calls-to-action"
    },
    {
      icon: Zap,
      title: "High Impact",
      description: "Attention-grabbing visuals and messaging that make lasting impressions"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast production timeline to meet your marketing campaign deadlines"
    },
    {
      icon: Award,
      title: "Platform Optimized",
      description: "Formatted perfectly for social media, websites, and advertising platforms"
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
            <Play size={80} className="mx-auto text-red-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Promotional Videos</span>
            <br />
            Drive Results
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            High-impact promotional videos that convert viewers into customers. Perfect for product launches, 
            brand campaigns, and marketing initiatives that demand attention and drive action.
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
            Why Our Promotional Videos Work
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
                <feature.icon size={48} className="mx-auto mb-4 text-red-400" />
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
            Promotional Video Portfolio
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promoPortfolio.map((item, index) => (
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
                  <p className="text-red-400 text-sm mb-2">Client: {item.client}</p>
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
        className="py-20 bg-gradient-to-r from-red-900 to-pink-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Boost Your Marketing?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Let's create a promotional video that drives results and grows your business.
          </p>
          <Link
            to="/contact"
            className="bg-white text-red-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Promotional Video
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
              title="Promotional Video"
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

export default PromotionalVideo;