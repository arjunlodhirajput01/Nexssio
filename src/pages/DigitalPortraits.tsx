import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Monitor, Smartphone, Star, Download, Share2, Layers, CheckCircle } from 'lucide-react';

const DigitalPortraits = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioGallery = [
    {
      id: 1,
      title: "Social Media Avatar - Professional",
      artist: "Alex Digital",
      medium: "Digital Illustration",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Clean, modern digital avatar perfect for LinkedIn and professional platforms",
      category: "Avatar",
      year: "2024",
      formats: "PNG, JPG, SVG",
      timeSpent: "8 hours"
    },
    {
      id: 2,
      title: "Gaming Profile Portrait",
      artist: "Maya Pixel",
      medium: "Digital Art",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Dynamic gaming-style portrait with neon effects and futuristic elements",
      category: "Gaming",
      year: "2024",
      formats: "PNG, GIF",
      timeSpent: "12 hours"
    },
    {
      id: 3,
      title: "Instagram Story Highlight",
      artist: "Sophie Creative",
      medium: "Digital Design",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Stylish portrait designed specifically for Instagram stories and highlights",
      category: "Social Media",
      year: "2024",
      formats: "PNG, JPG",
      timeSpent: "6 hours"
    },
    {
      id: 4,
      title: "Corporate Headshot Digital",
      artist: "Marcus Tech",
      medium: "Digital Portrait",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Professional digital headshot with clean background and corporate styling",
      category: "Corporate",
      year: "2024",
      formats: "PNG, JPG, PDF",
      timeSpent: "10 hours"
    },
    {
      id: 5,
      title: "YouTube Channel Art",
      artist: "Emma Stream",
      medium: "Digital Illustration",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Vibrant digital portrait designed for YouTube channel branding and thumbnails",
      category: "YouTube",
      year: "2024",
      formats: "PNG, JPG",
      timeSpent: "14 hours"
    },
    {
      id: 6,
      title: "Discord Profile Art",
      artist: "Jake Gamer",
      medium: "Digital Art",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Cool digital portrait with gaming aesthetics perfect for Discord communities",
      category: "Discord",
      year: "2024",
      formats: "PNG, GIF",
      timeSpent: "9 hours"
    },
    {
      id: 7,
      title: "TikTok Profile Picture",
      artist: "Luna Digital",
      medium: "Digital Portrait",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Trendy digital portrait optimized for TikTok's circular profile format",
      category: "TikTok",
      year: "2024",
      formats: "PNG, JPG",
      timeSpent: "7 hours"
    },
    {
      id: 8,
      title: "NFT Collection Portrait",
      artist: "Crypto Artist",
      medium: "Digital NFT Art",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Unique digital portrait designed for NFT marketplaces with blockchain verification",
      category: "NFT",
      year: "2024",
      formats: "PNG, SVG, Metadata",
      timeSpent: "16 hours"
    }
  ];

  const artists = [
    {
      name: "Alex Digital",
      specialty: "Professional Avatars & Corporate",
      experience: "4 years",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 300,
      rating: 4.9
    },
    {
      name: "Maya Pixel",
      specialty: "Gaming & Entertainment",
      experience: "5 years",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 250,
      rating: 4.8
    },
    {
      name: "Sophie Creative",
      specialty: "Social Media & Branding",
      experience: "3 years",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 400,
      rating: 5.0
    },
    {
      name: "Marcus Tech",
      specialty: "Corporate & Professional",
      experience: "6 years",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 350,
      rating: 4.9
    }
  ];

  const features = [
    {
      icon: Monitor,
      title: "High Resolution",
      description: "4K quality digital portraits perfect for any screen size or print requirement"
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description: "Receive your portrait in PNG, JPG, SVG, and other formats for maximum versatility"
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Optimized for social media platforms with perfect sizing and compression"
    },
    {
      icon: Layers,
      title: "Quick Delivery",
      description: "Fast turnaround times with digital delivery within 24-48 hours"
    }
  ];

  const categories = ["All", "Avatar", "Gaming", "Social Media", "Corporate", "YouTube", "Discord", "TikTok", "NFT"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGallery = selectedCategory === "All" 
    ? portfolioGallery 
    : portfolioGallery.filter(item => item.category === selectedCategory);

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
          to="/gallery"
          className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Gallery</span>
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
            <Monitor size={80} className="mx-auto text-cyan-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Digital Portraits</span>
            <br />
            Modern & Versatile
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Perfect for the digital age - high-resolution portraits optimized for social media, 
            gaming profiles, professional platforms, and online presence. Fast delivery, 
            multiple formats, and ready to use across all your digital platforms.
          </motion.p>

          <motion.div
            className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-6 rounded-lg max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p className="text-lg text-cyan-300 font-semibold">
              Starting at ₹1,800 | 24-48 hour delivery | Multiple format options
            </p>
          </motion.div>
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
            Why Choose Digital Portraits
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
                <feature.icon size={48} className="mx-auto mb-4 text-cyan-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Digital Portrait Gallery
          </motion.h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                className="group glass-effect rounded-lg overflow-hidden hover-lift cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold text-sm">{item.category}</p>
                    <p className="text-xs text-cyan-300">{item.formats}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-cyan-400 text-xs mb-1">by {item.artist}</p>
                  <p className="text-gray-400 text-xs mb-2">{item.medium}</p>
                  <p className="text-gray-300 text-xs line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Digital Portrait Artists
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={index}
                className="text-center p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-3 border-cyan-400"
                />
                <h3 className="text-lg font-semibold mb-1">{artist.name}</h3>
                <p className="text-cyan-400 text-sm mb-2">{artist.specialty}</p>
                <p className="text-gray-400 text-xs mb-3">{artist.experience} experience</p>
                
                <div className="flex justify-center items-center space-x-4 text-xs">
                  <div className="text-center">
                    <p className="font-semibold text-white">{artist.completedWorks}</p>
                    <p className="text-gray-400">Works</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <Star size={12} className="text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold text-white">{artist.rating}</span>
                    </div>
                    <p className="text-gray-400">Rating</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Optimization */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Optimized for Every Platform
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Instagram", size: "1080x1080", icon: "📷" },
              { name: "LinkedIn", size: "400x400", icon: "💼" },
              { name: "Twitter", size: "400x400", icon: "🐦" },
              { name: "Discord", size: "128x128", icon: "🎮" },
              { name: "YouTube", size: "800x800", icon: "📺" },
              { name: "TikTok", size: "200x200", icon: "🎵" },
              { name: "Facebook", size: "180x180", icon: "👥" },
              { name: "Twitch", size: "256x256", icon: "🎯" },
              { name: "Steam", size: "184x184", icon: "🎮" },
              { name: "WhatsApp", size: "640x640", icon: "💬" },
              { name: "Telegram", size: "512x512", icon: "✈️" },
              { name: "Reddit", size: "256x256", icon: "🤖" }
            ].map((platform, index) => (
              <motion.div
                key={index}
                className="text-center p-4 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
              >
                <div className="text-3xl mb-2">{platform.icon}</div>
                <h3 className="font-semibold text-sm mb-1">{platform.name}</h3>
                <p className="text-xs text-gray-400">{platform.size}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission CTA */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Commission Your Digital Portrait?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Get a modern, high-quality digital portrait perfect for all your online platforms and social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-cyan-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commission Digital Portrait
            </motion.button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-900 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Portfolio piece"
            className="max-w-full max-h-full object-contain rounded-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default DigitalPortraits;