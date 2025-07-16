import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Image, Scissors, Award, Sparkles, Flower, Heart, Package, Gift } from 'lucide-react';
import CartIcon from '../components/CartIcon';

const ArtShop = () => {
  // Art & Crafts Categories - Now the main focus
  const artCategories = [
    { 
      name: "Paintings", 
      icon: Palette, 
      description: "Oil, acrylic, watercolor paintings",
      link: "/art-shop/paintings",
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Portraits", 
      icon: Image, 
      description: "Realistic and stylized portraits",
      link: "/art-shop/portraits",
      color: "from-emerald-500 to-teal-500"
    },
    { 
      name: "Paper Crafts", 
      icon: Scissors, 
      description: "Origami, quilling, paper art",
      link: "/art-shop/paper-crafts",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Wooden Crafts", 
      icon: Award, 
      description: "Carved and painted wooden items",
      link: "/art-shop/wooden-crafts",
      color: "from-amber-500 to-orange-500"
    },
    { 
      name: "Resin Keychains", 
      icon: Sparkles, 
      description: "Custom resin accessories",
      link: "/art-shop/resin-keychains",
      color: "from-pink-500 to-rose-500"
    },
    { 
      name: "Flower Bouquets", 
      icon: Flower, 
      description: "Fresh and artificial arrangements",
      link: "/art-shop/flower-bouquets",
      color: "from-green-500 to-emerald-500"
    },
    { 
      name: "Mandala & Lippan Art", 
      icon: Heart, 
      description: "Traditional Indian art forms",
      link: "/art-shop/mandala-lippan",
      color: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Resin Art", 
      icon: Sparkles, 
      description: "Decorative resin pieces",
      link: "/art-shop/resin-art",
      color: "from-cyan-500 to-blue-500"
    },
    { 
      name: "Hampers", 
      icon: Package, 
      description: "Custom gift hampers",
      link: "/art-shop/hampers",
      color: "from-red-500 to-pink-500"
    }
  ];

  // Paper Sizes
  const paperSizes = [
    { size: "A5", description: "Quick sketches, postcards", dimensions: "148 × 210 mm" },
    { size: "A4", description: "Practice, small commissions", dimensions: "210 × 297 mm" },
    { size: "A3", description: "Larger portraits", dimensions: "297 × 420 mm" },
    { size: "A2/A1", description: "Premium exhibitions", dimensions: "420 × 594 mm / 594 × 841 mm" }
  ];

  // Paper Types by GSM
  const paperGSM = [
    {
      category: "Lightweight (120–160gsm)",
      description: "Sketches, practice",
      uses: ["Quick sketches", "Practice work", "Preliminary drawings"],
      color: "text-blue-400"
    },
    {
      category: "Mediumweight (200–250gsm)",
      description: "Finished pieces, colored pencil",
      uses: ["Finished artwork", "Colored pencil work", "Mixed media"],
      color: "text-green-400"
    },
    {
      category: "Heavyweight (300gsm+)",
      description: "Watercolors, acrylics",
      uses: ["Watercolor paintings", "Acrylic work", "Professional pieces"],
      color: "text-purple-400"
    }
  ];

  // Paper Types by Medium
  const paperMediums = [
    { medium: "Graphite / Pencil / Charcoal", paper: "Smooth drawing paper, Bristol", icon: "✏️" },
    { medium: "Ink", paper: "Hot press watercolor paper / Bristol", icon: "🖊️" },
    { medium: "Colored Pencil", paper: "Medium texture paper, Bristol", icon: "🖍️" },
    { medium: "Watercolor", paper: "300gsm cold/hot press (Arches, Canson)", icon: "🎨" },
    { medium: "Markers", paper: "Marker paper, Bristol board", icon: "🖌️" },
    { medium: "Acrylic", paper: "Canvas paper, heavy watercolor paper", icon: "🎭" }
  ];

  // Recommended Brands
  const recommendedBrands = [
    { brand: "Canson XL", specialty: "Sketching, watercolor", rating: 4.5 },
    { brand: "Strathmore 400/500", specialty: "High-quality work", rating: 4.8 },
    { brand: "Fabriano", specialty: "Watercolor, pencil", rating: 4.7 },
    { brand: "Arches", specialty: "Premium watercolors", rating: 4.9 },
    { brand: "Bristol (Canson, Strathmore)", specialty: "Ink, pencil", rating: 4.6 }
  ];

  return (
    <motion.div 
      className="min-h-screen pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Art Shop Header with Cart */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold gradient-text">Art Shop</h1>
        <CartIcon />
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
            <span className="gradient-text">Art Shop</span>
            <br />
            Creative <span className="gradient-text">Marketplace</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover our diverse collection of handcrafted artwork, custom portraits, and unique creative pieces. 
            Each item is carefully crafted by our talented artists with attention to detail and quality.
          </motion.p>
          
          <motion.div
            className="bg-gradient-to-r from-blue-900/50 to-green-900/50 p-6 rounded-lg max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-lg text-blue-300 font-semibold">
              🇮🇳 <strong>India Only Service:</strong> Our Art Shop currently serves customers within India only. Free shipping on all orders!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Explore Our Creative Work (Main Focus) */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Explore Our Creative Work
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link to={category.link}>
                  <div className="p-8 glass-effect rounded-lg hover-lift cursor-pointer group relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    
                    <category.icon size={64} className="mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    <h3 className="text-2xl font-bold mb-3 text-center relative z-10">{category.name}</h3>
                    <p className="text-gray-400 text-center relative z-10">{category.description}</p>
                    
                    <div className="mt-6 text-center relative z-10">
                      <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold group-hover:scale-105 transition-transform duration-300">
                        Explore Collection
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Paper Sizes for Portrait Artists */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Paper Sizes for Portrait Artists
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paperSizes.map((size, index) => (
              <motion.div
                key={index}
                className="p-6 glass-effect rounded-lg hover-lift text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-3xl font-bold text-emerald-400 mb-2">{size.size}</div>
                <p className="text-gray-300 mb-2">{size.description}</p>
                <p className="text-sm text-gray-400">{size.dimensions}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Paper Types by GSM */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Paper Types and GSM
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paperGSM.map((gsm, index) => (
              <motion.div
                key={index}
                className="p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className={`text-xl font-bold mb-2 ${gsm.color}`}>{gsm.category}</h3>
                <p className="text-gray-400 mb-4">{gsm.description}</p>
                
                <ul className="space-y-2">
                  {gsm.uses.map((use, useIndex) => (
                    <li key={useIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                      {use}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Paper Types by Medium */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Paper Types by Medium
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paperMediums.map((medium, index) => (
              <motion.div
                key={index}
                className="p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{medium.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{medium.medium}</h3>
                </div>
                <p className="text-emerald-400 font-medium">{medium.paper}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Recommended Brands */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Recommended Brands
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {recommendedBrands.map((brand, index) => (
              <motion.div
                key={index}
                className="p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{brand.brand}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">⭐</span>
                    <span className="text-yellow-400 font-semibold">{brand.rating}</span>
                  </div>
                </div>
                <p className="text-gray-400">{brand.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-emerald-900 to-teal-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Commission Your Artwork?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Let our talented artists bring your vision to life with professional quality and attention to detail.
          </p>
          <motion.button
            className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Commission
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ArtShop;