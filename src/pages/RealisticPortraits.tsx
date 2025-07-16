import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Camera, Star, Heart, Award, Clock, Eye, Palette, CheckCircle } from 'lucide-react';

const RealisticPortraits = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioGallery = [
    {
      id: 1,
      title: "Wedding Portrait - Sarah & Michael",
      artist: "Elena Rodriguez",
      medium: "Digital Oil Painting",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Captured the intimate moment between newlyweds with stunning photorealistic detail",
      category: "Wedding",
      year: "2024",
      size: "24x36 inches",
      timeSpent: "40 hours"
    },
    {
      id: 2,
      title: "Professional Headshot - Dr. James Wilson",
      artist: "Marcus Chen",
      medium: "Digital Realistic Portrait",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Corporate headshot with precise lighting and professional presentation",
      category: "Professional",
      year: "2024",
      size: "16x20 inches",
      timeSpent: "25 hours"
    },
    {
      id: 3,
      title: "Family Portrait - The Johnson Family",
      artist: "Sofia Petrov",
      medium: "Digital Realistic Art",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Multi-generational family portrait capturing individual personalities and family bonds",
      category: "Family",
      year: "2024",
      size: "30x40 inches",
      timeSpent: "60 hours"
    },
    {
      id: 4,
      title: "Memorial Portrait - Grandmother Rose",
      artist: "David Kim",
      medium: "Digital Realistic Portrait",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Dignified memorial portrait honoring a beloved grandmother with warm, loving expression",
      category: "Memorial",
      year: "2024",
      size: "20x24 inches",
      timeSpent: "35 hours"
    },
    {
      id: 5,
      title: "Graduation Portrait - Emma Thompson",
      artist: "Alex Rivera",
      medium: "Digital Oil Style",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Celebrating academic achievement with pride and joy captured in realistic detail",
      category: "Graduation",
      year: "2024",
      size: "18x24 inches",
      timeSpent: "30 hours"
    },
    {
      id: 6,
      title: "Couple Portrait - Anniversary Celebration",
      artist: "Isabella Martinez",
      medium: "Digital Realistic Art",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "25th anniversary portrait capturing decades of love and companionship",
      category: "Anniversary",
      year: "2024",
      size: "24x30 inches",
      timeSpent: "45 hours"
    },
    {
      id: 7,
      title: "Child Portrait - Little Princess",
      artist: "Rachel Wong",
      medium: "Digital Realistic Portrait",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Innocent childhood captured with soft lighting and gentle expressions",
      category: "Children",
      year: "2024",
      size: "16x20 inches",
      timeSpent: "28 hours"
    },
    {
      id: 8,
      title: "Senior Portrait - Wisdom and Grace",
      artist: "Thomas Anderson",
      medium: "Digital Oil Painting",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Distinguished senior portrait highlighting character lines and life experience",
      category: "Senior",
      year: "2024",
      size: "20x24 inches",
      timeSpent: "38 hours"
    }
  ];

  const artists = [
    {
      name: "Elena Rodriguez",
      specialty: "Wedding & Couple Portraits",
      experience: "8 years",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 150,
      rating: 4.9
    },
    {
      name: "Marcus Chen",
      specialty: "Professional & Corporate",
      experience: "6 years",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 120,
      rating: 4.8
    },
    {
      name: "Sofia Petrov",
      specialty: "Family & Group Portraits",
      experience: "10 years",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 200,
      rating: 5.0
    },
    {
      name: "David Kim",
      specialty: "Memorial & Tribute Art",
      experience: "7 years",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 85,
      rating: 4.9
    }
  ];

  const features = [
    {
      icon: Eye,
      title: "Photorealistic Detail",
      description: "Every texture, shadow, and highlight meticulously crafted for lifelike accuracy"
    },
    {
      icon: Heart,
      title: "Emotional Depth",
      description: "Capturing not just appearance but the soul and personality of the subject"
    },
    {
      icon: Camera,
      title: "Professional Lighting",
      description: "Expert understanding of light and shadow for dimensional realism"
    },
    {
      icon: Palette,
      title: "Color Accuracy",
      description: "Precise color matching and skin tone reproduction"
    }
  ];

  const categories = ["All", "Wedding", "Professional", "Family", "Memorial", "Graduation", "Anniversary", "Children", "Senior"];
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
            <User size={80} className="mx-auto text-emerald-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Realistic Portraits</span>
            <br />
            Lifelike Artistry
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Our master artists create photorealistic portraits that capture not just appearance, 
            but the essence and soul of every subject. From wedding memories to professional headshots, 
            each piece is a testament to artistic excellence.
          </motion.p>

          <motion.div
            className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-6 rounded-lg max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p className="text-lg text-emerald-300 font-semibold">
              Starting at ₹2,500 | High-resolution delivery | Unlimited revisions
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
            What Makes Our Realistic Portraits Special
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
                <feature.icon size={48} className="mx-auto mb-4 text-emerald-400" />
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
            Realistic Portrait Gallery
          </motion.h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-emerald-500 text-white'
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
                    <p className="text-xs text-emerald-300">{item.timeSpent}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-emerald-400 text-xs mb-1">by {item.artist}</p>
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
            Meet Our Realistic Portrait Artists
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
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-3 border-emerald-400"
                />
                <h3 className="text-lg font-semibold mb-1">{artist.name}</h3>
                <p className="text-emerald-400 text-sm mb-2">{artist.specialty}</p>
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

      {/* Commission CTA */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-emerald-900 to-teal-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Commission Your Realistic Portrait?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Let our master artists create a timeless, photorealistic portrait that captures your most precious moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commission Realistic Portrait
            </motion.button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-emerald-900 transition-colors"
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

export default RealisticPortraits;