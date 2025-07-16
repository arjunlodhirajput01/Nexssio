import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Flower, Star, MapPin, Heart, Award, Clock, Eye, Leaf, CheckCircle } from 'lucide-react';
import { useCart } from '../components/CartContext';
import CartIcon from '../components/CartIcon';

const FlowerBouquets = () => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const flowerBouquetsGallery = [
    {
      id: 1,
      title: "Red Rose Romance Bouquet",
      artist: "Bloom Studio",
      medium: "Fresh Red Roses",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Classic romantic bouquet with 12 premium red roses and elegant wrapping",
      category: "Fresh",
      year: "2024",
      size: "Medium Bouquet",
      price: "₹1,200"
    },
    {
      id: 2,
      title: "Mixed Seasonal Bouquet",
      artist: "Garden Fresh",
      medium: "Seasonal Fresh Flowers",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Beautiful mix of seasonal flowers including lilies, carnations, and chrysanthemums",
      category: "Fresh",
      year: "2024",
      size: "Large Bouquet",
      price: "₹1,800"
    },
    {
      id: 3,
      title: "Artificial Silk Arrangement",
      artist: "Eternal Blooms",
      medium: "High-Quality Silk Flowers",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Long-lasting silk flower arrangement that looks incredibly realistic",
      category: "Artificial",
      year: "2024",
      size: "Medium Arrangement",
      price: "₹950"
    },
    {
      id: 4,
      title: "Wedding Bridal Bouquet",
      artist: "Bridal Bliss",
      medium: "White Roses & Baby's Breath",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Elegant white bridal bouquet perfect for weddings and special occasions",
      category: "Wedding",
      year: "2024",
      size: "Bridal Size",
      price: "₹2,500"
    },
    {
      id: 5,
      title: "Sunflower Happiness Bunch",
      artist: "Sunny Days",
      medium: "Fresh Sunflowers",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Cheerful sunflower bouquet that brings sunshine to any space",
      category: "Fresh",
      year: "2024",
      size: "Medium Bouquet",
      price: "₹800"
    },
    {
      id: 6,
      title: "Dried Flower Arrangement",
      artist: "Rustic Charm",
      medium: "Dried Natural Flowers",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Rustic dried flower arrangement perfect for home decor",
      category: "Dried",
      year: "2024",
      size: "Small Arrangement",
      price: "₹650"
    }
  ];

  const categories = ["All", "Fresh", "Artificial", "Wedding", "Dried"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGallery = selectedCategory === "All" 
    ? flowerBouquetsGallery 
    : flowerBouquetsGallery.filter(item => item.category === selectedCategory);

  return (
    <motion.div 
      className="min-h-screen pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Back Navigation */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/art-shop"
            className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Art Shop</span>
          </Link>
          <CartIcon />
        </div>
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
            <Flower size={80} className="mx-auto text-green-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Flower Bouquets</span>
            <br />
            Natural Beauty
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Fresh, artificial, and dried flower arrangements for every occasion. From romantic roses 
            to cheerful sunflowers, we create beautiful bouquets that express your feelings perfectly.
          </motion.p>
        </div>
      </section>

      {/* Flower Bouquets Gallery */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Flower Bouquet Collection
          </motion.h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <p className="text-xs text-green-300">{item.size}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-green-400 text-sm mb-1">by {item.artist}</p>
                  <p className="text-gray-400 text-sm mb-2">{item.medium}</p>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-bold text-lg">{item.price}</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: `flower-${item.id}`,
                          title: item.title,
                          artist: item.artist,
                          price: parseInt(item.price.replace('₹', '').replace(',', '')),
                          image: item.image,
                          category: 'Flower Bouquets'
                        });
                      }}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-green-900 to-emerald-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Order Your Custom Flower Bouquet</h3>
          <p className="text-xl text-gray-200 mb-8">
            Let us create a personalized flower arrangement for your special occasion or loved one.
          </p>
          <motion.button
            className="bg-white text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Custom Bouquet
          </motion.button>
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
            alt="Flower Bouquet"
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

export default FlowerBouquets;