import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Palette, Brush, Star, Sparkles, Zap, Layers, CheckCircle } from 'lucide-react';

const StylizedPortraits = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioGallery = [
    {
      id: 1,
      title: "Cartoon Family Portrait",
      artist: "Maya Johnson",
      medium: "Digital Cartoon Style",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Fun, vibrant cartoon-style family portrait perfect for home display",
      category: "Cartoon",
      year: "2024",
      style: "Disney-inspired",
      timeSpent: "20 hours"
    },
    {
      id: 2,
      title: "Abstract Professional Portrait",
      artist: "Alex Rivera",
      medium: "Digital Abstract Art",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Modern abstract interpretation with geometric elements and bold colors",
      category: "Abstract",
      year: "2024",
      style: "Geometric Modern",
      timeSpent: "15 hours"
    },
    {
      id: 3,
      title: "Impressionist Wedding Portrait",
      artist: "Sophie Laurent",
      medium: "Digital Impressionist",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Romantic impressionist style capturing the dreamy essence of love",
      category: "Impressionist",
      year: "2024",
      style: "Monet-inspired",
      timeSpent: "25 hours"
    },
    {
      id: 4,
      title: "Anime-Style Portrait",
      artist: "Kenji Nakamura",
      medium: "Digital Anime Art",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Beautiful anime-style portrait with expressive eyes and dynamic colors",
      category: "Anime",
      year: "2024",
      style: "Studio Ghibli",
      timeSpent: "18 hours"
    },
    {
      id: 5,
      title: "Pop Art Celebrity Style",
      artist: "Carlos Mendez",
      medium: "Digital Pop Art",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Bold pop art style with vibrant colors and comic book aesthetics",
      category: "Pop Art",
      year: "2024",
      style: "Warhol-inspired",
      timeSpent: "12 hours"
    },
    {
      id: 6,
      title: "Minimalist Line Art",
      artist: "Emma Thompson",
      medium: "Digital Line Art",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Clean, minimalist line art perfect for modern social media profiles",
      category: "Minimalist",
      year: "2024",
      style: "Single Line",
      timeSpent: "8 hours"
    },
    {
      id: 7,
      title: "Watercolor Style Portrait",
      artist: "Isabella Martinez",
      medium: "Digital Watercolor",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Soft watercolor effect with flowing colors and artistic splashes",
      category: "Watercolor",
      year: "2024",
      style: "Flowing Colors",
      timeSpent: "22 hours"
    },
    {
      id: 8,
      title: "Cubist Portrait",
      artist: "Pierre Dubois",
      medium: "Digital Cubist Art",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Modern cubist interpretation with multiple perspectives and bold geometry",
      category: "Cubist",
      year: "2024",
      style: "Picasso-inspired",
      timeSpent: "30 hours"
    }
  ];

  const artists = [
    {
      name: "Maya Johnson",
      specialty: "Cartoon & Animation Style",
      experience: "5 years",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 95,
      rating: 4.9
    },
    {
      name: "Alex Rivera",
      specialty: "Abstract & Modern Art",
      experience: "7 years",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 130,
      rating: 4.8
    },
    {
      name: "Sophie Laurent",
      specialty: "Impressionist & Romantic",
      experience: "9 years",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 160,
      rating: 5.0
    },
    {
      name: "Kenji Nakamura",
      specialty: "Anime & Manga Style",
      experience: "6 years",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      completedWorks: 110,
      rating: 4.9
    }
  ];

  const features = [
    {
      icon: Palette,
      title: "Creative Interpretation",
      description: "Unique artistic vision that transforms photos into stunning stylized artwork"
    },
    {
      icon: Sparkles,
      title: "Multiple Art Styles",
      description: "From cartoon to abstract, anime to impressionist - endless creative possibilities"
    },
    {
      icon: Zap,
      title: "Social Media Ready",
      description: "Perfect formats and styles for modern social media profiles and avatars"
    },
    {
      icon: Layers,
      title: "Artistic Flair",
      description: "Each piece is a unique work of art with personal creative touches"
    }
  ];

  const categories = ["All", "Cartoon", "Abstract", "Impressionist", "Anime", "Pop Art", "Minimalist", "Watercolor", "Cubist"];
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
            <Palette size={80} className="mx-auto text-pink-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Stylized Portraits</span>
            <br />
            Artistic Expression
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Transform your photos into stunning works of art with our stylized portrait collection. 
            From cartoon and anime to abstract and impressionist styles, each piece is a unique 
            creative interpretation that captures personality through artistic vision.
          </motion.p>

          <motion.div
            className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 p-6 rounded-lg max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p className="text-lg text-pink-300 font-semibold">
              Starting at ₹2,000 | Multiple style options | Perfect for social media
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
            Why Choose Stylized Portraits
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
                <feature.icon size={48} className="mx-auto mb-4 text-pink-400" />
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
            Stylized Portrait Gallery
          </motion.h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-pink-500 text-white'
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
                    <p className="text-xs text-pink-300">{item.style}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-pink-400 text-xs mb-1">by {item.artist}</p>
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
            Meet Our Stylized Portrait Artists
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
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-3 border-pink-400"
                />
                <h3 className="text-lg font-semibold mb-1">{artist.name}</h3>
                <p className="text-pink-400 text-sm mb-2">{artist.specialty}</p>
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
        className="py-20 bg-gradient-to-r from-pink-900 to-purple-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Commission Your Stylized Portrait?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Let our creative artists transform your photos into stunning stylized artwork that reflects your unique personality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-pink-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commission Stylized Portrait
            </motion.button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-pink-900 transition-colors"
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

export default StylizedPortraits;