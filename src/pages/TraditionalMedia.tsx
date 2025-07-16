import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Brush, Palette, Star, Paintbrush, Feather, Layers, CheckCircle } from 'lucide-react';

const TraditionalMedia = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioGallery = [
    {
      id: 1,
      title: "Charcoal Portrait - Distinguished Gentleman",
      artist: "Leonardo Rossi",
      medium: "Charcoal on Paper",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Classic charcoal portrait showcasing dramatic light and shadow techniques",
      category: "Charcoal",
      year: "2024",
      size: "18x24 inches",
      timeSpent: "12 hours"
    },
    {
      id: 2,
      title: "Oil Painting - Wedding Portrait",
      artist: "Victoria Sterling",
      medium: "Oil on Canvas",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Rich oil painting capturing the warmth and joy of a wedding celebration",
      category: "Oil Painting",
      year: "2024",
      size: "24x30 inches",
      timeSpent: "40 hours"
    },
    {
      id: 3,
      title: "Watercolor Family Portrait",
      artist: "Amelia Chen",
      medium: "Watercolor on Paper",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Delicate watercolor technique creating soft, flowing family portrait",
      category: "Watercolor",
      year: "2024",
      size: "16x20 inches",
      timeSpent: "25 hours"
    },
    {
      id: 4,
      title: "Pencil Portrait - Child Study",
      artist: "Marcus Thompson",
      medium: "Graphite Pencil",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Detailed pencil work capturing the innocence and wonder of childhood",
      category: "Pencil",
      year: "2024",
      size: "12x16 inches",
      timeSpent: "15 hours"
    },
    {
      id: 5,
      title: "Pastel Portrait - Elegant Lady",
      artist: "Sophie Dubois",
      medium: "Soft Pastels",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Soft pastel portrait with beautiful color blending and texture",
      category: "Pastel",
      year: "2024",
      size: "20x24 inches",
      timeSpent: "30 hours"
    },
    {
      id: 6,
      title: "Acrylic Portrait - Modern Professional",
      artist: "Diego Martinez",
      medium: "Acrylic on Canvas",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Bold acrylic painting with vibrant colors and contemporary style",
      category: "Acrylic",
      year: "2024",
      size: "20x24 inches",
      timeSpent: "22 hours"
    },
    {
      id: 7,
      title: "Ink Portrait - Artistic Expression",
      artist: "Yuki Tanaka",
      medium: "India Ink",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Traditional ink portrait with flowing lines and artistic interpretation",
      category: "Ink",
      year: "2024",
      size: "14x18 inches",
      timeSpent: "18 hours"
    },
    {
      id: 8,
      title: "Mixed Media Portrait",
      artist: "Elena Volkov",
      medium: "Mixed Media",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Innovative combination of charcoal, watercolor, and pencil techniques",
      category: "Mixed Media",
      year: "2024",
      size: "22x28 inches",
      timeSpent: "35 hours"
    }
  ];

  const artists = [
    {
      name: "Leonardo Rossi",
      specialty: "Charcoal & Classical Techniques",
      experience: "15 years",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 200,
      rating: 5.0
    },
    {
      name: "Victoria Sterling",
      specialty: "Oil Painting & Fine Art",
      experience: "12 years",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 180,
      rating: 4.9
    },
    {
      name: "Amelia Chen",
      specialty: "Watercolor & Soft Media",
      experience: "8 years",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 140,
      rating: 4.8
    },
    {
      name: "Marcus Thompson",
      specialty: "Pencil & Graphite Work",
      experience: "10 years",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 160,
      rating: 4.9
    }
  ];

  const features = [
    {
      icon: Brush,
      title: "Authentic Textures",
      description: "Real brush strokes, paper texture, and traditional media create unique tactile quality"
    },
    {
      icon: Paintbrush,
      title: "Traditional Techniques",
      description: "Time-honored artistic methods passed down through generations of master artists"
    },
    {
      icon: Feather,
      title: "Physical Artwork",
      description: "Original physical pieces that can be framed and displayed as heirloom art"
    },
    {
      icon: Layers,
      title: "Timeless Appeal",
      description: "Classic artistic styles that never go out of fashion and increase in value over time"
    }
  ];

  const categories = ["All", "Charcoal", "Oil Painting", "Watercolor", "Pencil", "Pastel", "Acrylic", "Ink", "Mixed Media"];
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
            <Brush size={80} className="mx-auto text-amber-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Traditional Media</span>
            <br />
            Timeless Artistry
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Experience the beauty of traditional art forms with our hand-crafted portraits using 
            charcoal, oil paint, watercolor, and pencil. Each piece is an original work of art 
            created with time-honored techniques and genuine artistic materials.
          </motion.p>

          <motion.div
            className="bg-gradient-to-r from-amber-900/50 to-orange-900/50 p-6 rounded-lg max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p className="text-lg text-amber-300 font-semibold">
              Starting at ₹3,500 | Physical artwork included | Worldwide shipping available
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
            Why Choose Traditional Media Portraits
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
                <feature.icon size={48} className="mx-auto mb-4 text-amber-400" />
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
            Traditional Media Gallery
          </motion.h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white'
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
                    <p className="text-xs text-amber-300">{item.size}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-amber-400 text-xs mb-1">by {item.artist}</p>
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
            Meet Our Traditional Media Artists
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
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-3 border-amber-400"
                />
                <h3 className="text-lg font-semibold mb-1">{artist.name}</h3>
                <p className="text-amber-400 text-sm mb-2">{artist.specialty}</p>
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
        className="py-20 bg-gradient-to-r from-amber-900 to-orange-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Commission Your Traditional Portrait?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Own an original piece of art created with traditional techniques and genuine artistic materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commission Traditional Portrait
            </motion.button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-900 transition-colors"
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

export default TraditionalMedia;