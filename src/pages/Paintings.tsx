import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Palette, Star, MapPin, Heart, Award, Clock, Eye, Brush, CheckCircle } from 'lucide-react';
import { useCart } from '../components/CartContext';
import CartIcon from '../components/CartIcon';

const Paintings = () => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const paintingsGallery = [
    {
      id: 1,
      title: "Abstract Landscape - Sunset Dreams",
      artist: "Elena Rodriguez",
      medium: "Acrylic on Canvas",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Vibrant abstract landscape capturing the essence of a golden sunset",
      category: "Abstract",
      year: "2024",
      size: "24x36 inches",
      price: "₹8,500"
    },
    {
      id: 2,
      title: "Oil Portrait - Classical Beauty",
      artist: "Marcus Chen",
      medium: "Oil on Canvas",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Traditional oil painting with classical techniques and rich colors",
      category: "Portrait",
      year: "2024",
      size: "20x24 inches",
      price: "₹12,000"
    },
    {
      id: 3,
      title: "Watercolor Florals - Spring Garden",
      artist: "Sofia Petrov",
      medium: "Watercolor on Paper",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Delicate watercolor painting of blooming spring flowers",
      category: "Floral",
      year: "2024",
      size: "16x20 inches",
      price: "₹6,500"
    },
    {
      id: 4,
      title: "Modern Abstract - Urban Energy",
      artist: "David Kim",
      medium: "Mixed Media",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Contemporary abstract piece reflecting urban life and energy",
      category: "Abstract",
      year: "2024",
      size: "30x40 inches",
      price: "₹15,000"
    },
    {
      id: 5,
      title: "Landscape Oil - Mountain Vista",
      artist: "Alex Rivera",
      medium: "Oil on Canvas",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Breathtaking mountain landscape painted with traditional oil techniques",
      category: "Landscape",
      year: "2024",
      size: "28x36 inches",
      price: "₹18,000"
    },
    {
      id: 6,
      title: "Still Life - Vintage Collection",
      artist: "Isabella Martinez",
      medium: "Acrylic on Canvas",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Classic still life composition with vintage objects and warm lighting",
      category: "Still Life",
      year: "2024",
      size: "18x24 inches",
      price: "₹9,500"
    }
  ];

  // Client Feedback specific to Paintings
  const clientFeedback = [
    {
      id: 1,
      artworkImage: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "The abstract painting exceeded my expectations! The colors are so vibrant and it perfectly matches my living room decor. Elena's artistic vision is incredible.",
      location: "Mumbai, India",
      recommendation: "Absolutely Stunning!",
      clientName: "Priya S.",
      artworkTitle: "Abstract Landscape - Sunset Dreams"
    },
    {
      id: 2,
      artworkImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Marcus created a beautiful oil portrait that captures every detail perfectly. The classical technique and rich colors make it a true masterpiece for our home.",
      location: "Delhi, India",
      recommendation: "Master Artist!",
      clientName: "Rajesh K.",
      artworkTitle: "Oil Portrait - Classical Beauty"
    },
    {
      id: 3,
      artworkImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "The watercolor floral painting is absolutely gorgeous! Sofia's delicate brushwork and color choices bring such life and freshness to our dining room.",
      location: "Bangalore, India",
      recommendation: "Beautiful Work!",
      clientName: "Meera T.",
      artworkTitle: "Watercolor Florals - Spring Garden"
    },
    {
      id: 4,
      artworkImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "David's modern abstract piece perfectly captures the energy of city life. The mixed media technique adds incredible depth and texture. Love it!",
      location: "Chennai, India",
      recommendation: "Contemporary Excellence!",
      clientName: "Arjun M.",
      artworkTitle: "Modern Abstract - Urban Energy"
    },
    {
      id: 5,
      artworkImage: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "The mountain landscape oil painting is breathtaking! Alex captured the majesty of the mountains with such skill. It's the centerpiece of our office.",
      location: "Pune, India",
      recommendation: "Landscape Master!",
      clientName: "Kavya R.",
      artworkTitle: "Landscape Oil - Mountain Vista"
    }
  ];

  const categories = ["All", "Abstract", "Portrait", "Floral", "Landscape", "Still Life"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGallery = selectedCategory === "All" 
    ? paintingsGallery 
    : paintingsGallery.filter(item => item.category === selectedCategory);

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
            className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
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
            <Palette size={80} className="mx-auto text-purple-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Paintings</span>
            <br />
            Artistic Masterpieces
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover our collection of original paintings created with traditional and contemporary techniques. 
            From abstract expressions to realistic landscapes, each piece tells a unique story through color and form.
          </motion.p>
        </div>
      </section>

      {/* Paintings Gallery */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Painting Collection
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
                    <p className="text-xs text-purple-300">{item.size}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-purple-400 text-sm mb-1">by {item.artist}</p>
                  <p className="text-gray-400 text-sm mb-2">{item.medium}</p>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-bold text-lg">{item.price}</span>
                    <button 
                      onClick={() => addToCart({
                        id: `painting-${item.id}`,
                        title: item.title,
                        artist: item.artist,
                        price: parseInt(item.price.replace('₹', '').replace(',', '')),
                        image: item.image,
                        category: 'Paintings'
                      })}
                      className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
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

      {/* Client Feedback Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Client Feedback - Paintings
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientFeedback.map((feedback, index) => (
              <motion.div
                key={feedback.id}
                className="glass-effect rounded-lg overflow-hidden hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <img 
                  src={feedback.artworkImage} 
                  alt="Client artwork"
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(feedback.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {feedback.recommendation}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-purple-400 mb-2">{feedback.artworkTitle}</h4>
                  <p className="text-gray-300 text-sm mb-4 italic">"{feedback.feedback}"</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white font-semibold">{feedback.clientName}</span>
                    <div className="flex items-center text-gray-400">
                      <MapPin size={14} className="mr-1" />
                      {feedback.location}
                    </div>
                  </div>
                </div>
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
          <h3 className="text-4xl font-bold mb-4">Commission Your Custom Painting</h3>
          <p className="text-xl text-gray-200 mb-8">
            Work with our talented artists to create a unique painting that perfectly matches your vision and space.
          </p>
          <motion.button
            className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commission Custom Painting
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
            alt="Painting"
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

export default Paintings;