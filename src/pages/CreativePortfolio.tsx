import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Video, Zap, Image, Layers, Monitor, Camera, Eye } from 'lucide-react';

const CreativePortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Tech Startup Brand Video",
      category: "Business Documentary",
      thumbnail: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Complete brand story for a fintech startup showcasing their journey and vision",
      client: "TechFlow Solutions",
      duration: "3:45",
      year: "2024"
    },
    {
      id: 2,
      title: "Restaurant Promotional Campaign",
      category: "Promotional/Ad Video",
      thumbnail: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Mouth-watering promotional video that increased restaurant bookings by 300%",
      client: "Spice Garden Restaurant",
      duration: "1:30",
      year: "2024"
    },
    {
      id: 3,
      title: "Dynamic Logo Animation",
      category: "Logo Animations",
      thumbnail: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Sleek logo animation with particle effects and smooth transitions",
      client: "Creative Agency Pro",
      duration: "0:15",
      year: "2024"
    },
    {
      id: 4,
      title: "Interactive Product Brochure",
      category: "Motion Brochures",
      thumbnail: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Transformed static product catalog into engaging motion graphics presentation",
      client: "ElectroTech Industries",
      duration: "2:20",
      year: "2024"
    },
    {
      id: 5,
      title: "Complete Brand Identity Package",
      category: "Brand Visual Kits",
      thumbnail: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Full brand identity including logo, colors, typography, and brand guidelines",
      client: "Wellness Studio",
      duration: "4:10",
      year: "2024"
    },
    {
      id: 6,
      title: "Social Media Template Pack",
      category: "Instagram/LinkedIn Templates",
      thumbnail: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "50+ animated templates for consistent social media presence",
      client: "Digital Marketing Agency",
      duration: "1:45",
      year: "2024"
    },
    {
      id: 7,
      title: "App Interface Animation",
      category: "UI Motion Design",
      thumbnail: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Smooth micro-interactions and transitions for mobile app interface",
      client: "HealthTrack App",
      duration: "2:00",
      year: "2024"
    },
    {
      id: 8,
      title: "Product Launch Showcase",
      category: "Product Showcase",
      thumbnail: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Cinematic product reveal with 3D animations and dramatic lighting",
      client: "Luxury Watch Brand",
      duration: "3:15",
      year: "2024"
    }
  ];

  const categories = [
    "All",
    "Business Documentary",
    "Promotional/Ad Video", 
    "Logo Animations",
    "Motion Brochures",
    "Brand Visual Kits",
    "Instagram/LinkedIn Templates",
    "UI Motion Design",
    "Product Showcase"
  ];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Business Documentary": return Video;
      case "Promotional/Ad Video": return Play;
      case "Logo Animations": return Zap;
      case "Motion Brochures": return Image;
      case "Brand Visual Kits": return Layers;
      case "Instagram/LinkedIn Templates": return Monitor;
      case "UI Motion Design": return Monitor;
      case "Product Showcase": return Camera;
      default: return Video;
    }
  };

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
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text">Creative Portfolio</span>
            <br />
            Our Best Work
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore our collection of creative projects spanning documentaries, brand videos, 
            animations, and digital experiences that have helped businesses grow and succeed.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Featured Creative Work
          </motion.h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => {
              const IconComponent = getCategoryIcon(item.category);
              return (
                <motion.div
                  key={item.id}
                  className="group glass-effect rounded-lg overflow-hidden hover-lift cursor-pointer"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedVideo(item.videoUrl)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play size={48} className="text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <IconComponent size={24} className="text-white bg-black/50 p-1 rounded" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-white text-sm">
                      {item.duration}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                    <p className="text-purple-400 text-xs mb-1">{item.category}</p>
                    <p className="text-gray-400 text-xs mb-2">Client: {item.client}</p>
                    <p className="text-gray-300 text-xs line-clamp-2">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with professional creative services that make an impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/creative"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
              title="Creative Work"
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

export default CreativePortfolio;