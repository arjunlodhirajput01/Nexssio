import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Star, MapPin, Heart, Clock, Eye, Hammer, CheckCircle } from 'lucide-react';
import { useCart } from '../components/CartContext';
import CartIcon from '../components/CartIcon';

const WoodenCrafts = () => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const woodenCraftsGallery = [
    {
      id: 1,
      title: "Hand-Carved Wooden Bowl",
      artist: "Raj Kumar",
      medium: "Teak Wood Carving",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Beautiful hand-carved wooden bowl with intricate traditional patterns",
      category: "Carving",
      year: "2024",
      size: "10x10x4 inches",
      price: "₹4,500"
    },
    {
      id: 2,
      title: "Wooden Wall Art - Mandala",
      artist: "Arjun Singh",
      medium: "Pine Wood Engraving",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Laser-engraved mandala design on premium pine wood",
      category: "Wall Art",
      year: "2024",
      size: "16x16 inches",
      price: "₹6,000"
    },
    {
      id: 3,
      title: "Decorative Wooden Elephant",
      artist: "Meera Devi",
      medium: "Rosewood Sculpture",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Traditional Indian elephant sculpture with detailed carvings",
      category: "Sculpture",
      year: "2024",
      size: "8x12x6 inches",
      price: "₹8,500"
    },
    {
      id: 4,
      title: "Wooden Jewelry Box",
      artist: "Vikram Patel",
      medium: "Sheesham Wood",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Handcrafted jewelry box with velvet interior and brass fittings",
      category: "Functional",
      year: "2024",
      size: "8x6x4 inches",
      price: "₹5,500"
    },
    {
      id: 5,
      title: "Wooden Name Plate - Custom",
      artist: "Suresh Kumar",
      medium: "Oak Wood Engraving",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Personalized wooden name plate with elegant font and border design",
      category: "Custom",
      year: "2024",
      size: "12x4 inches",
      price: "₹2,500"
    },
    {
      id: 6,
      title: "Wooden Photo Frame Set",
      artist: "Priya Sharma",
      medium: "Mango Wood",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Set of 3 handcrafted photo frames with natural wood finish",
      category: "Functional",
      year: "2024",
      size: "Various sizes",
      price: "₹3,500"
    }
  ];

  // Client Feedback specific to Wooden Crafts
  const clientFeedback = [
    {
      id: 1,
      artworkImage: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Raj's hand-carved wooden bowl is absolutely stunning! The craftsmanship is exceptional and the traditional patterns are so intricate. Perfect for our dining table.",
      location: "Jaipur, India",
      recommendation: "Master Craftsman!",
      clientName: "Anita R.",
      artworkTitle: "Hand-Carved Wooden Bowl"
    },
    {
      id: 2,
      artworkImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Arjun created a beautiful wooden mandala wall art! The laser engraving is precise and the pine wood quality is excellent. It's the focal point of our living room.",
      location: "Mumbai, India",
      recommendation: "Artistic Excellence!",
      clientName: "Rohit K.",
      artworkTitle: "Wooden Wall Art - Mandala"
    },
    {
      id: 3,
      artworkImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Meera's wooden elephant sculpture is a masterpiece! The rosewood quality and detailed carvings showcase true Indian artistry. Love the traditional touch it brings.",
      location: "Delhi, India",
      recommendation: "Traditional Beauty!",
      clientName: "Kavita S.",
      artworkTitle: "Decorative Wooden Elephant"
    },
    {
      id: 4,
      artworkImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Vikram's wooden jewelry box is perfect! The sheesham wood is beautiful and the velvet interior with brass fittings makes it so elegant. Great craftsmanship!",
      location: "Bangalore, India",
      recommendation: "Perfect Quality!",
      clientName: "Deepika M.",
      artworkTitle: "Wooden Jewelry Box"
    },
    {
      id: 5,
      artworkImage: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Suresh made a beautiful custom name plate for our home! The oak wood engraving is clean and elegant. Perfect personalized touch for our entrance.",
      location: "Chennai, India",
      recommendation: "Custom Perfection!",
      clientName: "Arun T.",
      artworkTitle: "Wooden Name Plate - Custom"
    }
  ];

  const categories = ["All", "Carving", "Wall Art", "Sculpture", "Functional", "Custom"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGallery = selectedCategory === "All" 
    ? woodenCraftsGallery 
    : woodenCraftsGallery.filter(item => item.category === selectedCategory);

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
            className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors"
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
            <Award size={80} className="mx-auto text-amber-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Wooden Crafts</span>
            <br />
            Timeless Craftsmanship
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Experience the warmth and beauty of handcrafted wooden art. From intricate carvings to functional pieces, 
            each creation showcases traditional craftsmanship and the natural beauty of premium wood.
          </motion.p>
        </div>
      </section>

      {/* Wooden Crafts Gallery */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Wooden Craft Collection
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
                    <p className="text-xs text-amber-300">{item.size}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-amber-400 text-sm mb-1">by {item.artist}</p>
                  <p className="text-gray-400 text-sm mb-2">{item.medium}</p>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-bold text-lg">{item.price}</span>
                    <button 
                      onClick={() => addToCart({
                        id: `woodcraft-${item.id}`,
                        title: item.title,
                        artist: item.artist,
                        price: parseInt(item.price.replace('₹', '').replace(',', '')),
                        image: item.image,
                        category: 'Wooden Crafts'
                      })}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
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
            Client Feedback - Wooden Crafts
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
                  
                  <h4 className="font-semibold text-amber-400 mb-2">{feedback.artworkTitle}</h4>
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
        className="py-20 bg-gradient-to-r from-amber-900 to-orange-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Commission Your Custom Wooden Craft</h3>
          <p className="text-xl text-gray-200 mb-8">
            Let our skilled woodworkers create a unique piece that combines traditional craftsmanship with your personal vision.
          </p>
          <motion.button
            className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commission Custom Wooden Craft
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
            alt="Wooden Craft"
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

export default WoodenCrafts;