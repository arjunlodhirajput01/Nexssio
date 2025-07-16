import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Scissors, Star, MapPin, Heart, Award, Clock, Eye, Layers, CheckCircle } from 'lucide-react';
import { useCart } from '../components/CartContext';
import CartIcon from '../components/CartIcon';

const PaperCrafts = () => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const paperCraftsGallery = [
    {
      id: 1,
      title: "Origami Flower Bouquet",
      artist: "Yuki Tanaka",
      medium: "Origami Paper Art",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Delicate origami flowers arranged in a beautiful bouquet",
      category: "Origami",
      year: "2024",
      size: "12x8 inches",
      price: "₹3,500"
    },
    {
      id: 2,
      title: "Quilled Art - Peacock Design",
      artist: "Meera Patel",
      medium: "Paper Quilling",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Intricate quilled peacock with vibrant colors and detailed patterns",
      category: "Quilling",
      year: "2024",
      size: "16x20 inches",
      price: "₹4,500"
    },
    {
      id: 3,
      title: "Paper Cut Art - Forest Scene",
      artist: "Emma Thompson",
      medium: "Paper Cutting",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Layered paper cut artwork creating a magical forest scene",
      category: "Paper Cutting",
      year: "2024",
      size: "14x18 inches",
      price: "₹5,000"
    },
    {
      id: 4,
      title: "3D Paper Sculpture - Butterfly",
      artist: "Carlos Mendez",
      medium: "3D Paper Art",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Three-dimensional butterfly sculpture with intricate wing details",
      category: "3D Sculpture",
      year: "2024",
      size: "10x12 inches",
      price: "₹6,000"
    },
    {
      id: 5,
      title: "Handmade Greeting Cards Set",
      artist: "Sophie Laurent",
      medium: "Mixed Paper Craft",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Set of 10 handcrafted greeting cards for special occasions",
      category: "Cards",
      year: "2024",
      size: "5x7 inches each",
      price: "₹2,500"
    },
    {
      id: 6,
      title: "Paper Mache Bowl - Decorative",
      artist: "Raj Kumar",
      medium: "Paper Mache",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Handcrafted decorative bowl with traditional Indian patterns",
      category: "Paper Mache",
      year: "2024",
      size: "8x8 inches",
      price: "₹3,000"
    }
  ];

  // Client Feedback specific to Paper Crafts
  const clientFeedback = [
    {
      id: 1,
      artworkImage: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Yuki's origami flower bouquet is absolutely stunning! The attention to detail and delicate craftsmanship is incredible. It's a perfect centerpiece for our home.",
      location: "Tokyo, Japan",
      recommendation: "Delicate Beauty!",
      clientName: "Sakura M.",
      artworkTitle: "Origami Flower Bouquet"
    },
    {
      id: 2,
      artworkImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Meera's quilled peacock is a masterpiece! The vibrant colors and intricate patterns are mesmerizing. It's now the highlight of our living room wall.",
      location: "Mumbai, India",
      recommendation: "Artistic Excellence!",
      clientName: "Priya S.",
      artworkTitle: "Quilled Art - Peacock Design"
    },
    {
      id: 3,
      artworkImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Emma's paper cut forest scene is magical! The layered effect creates such depth and the lighting makes it come alive. Perfect for our nature-themed room.",
      location: "London, UK",
      recommendation: "Magical Creation!",
      clientName: "James W.",
      artworkTitle: "Paper Cut Art - Forest Scene"
    },
    {
      id: 4,
      artworkImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Carlos created the most beautiful 3D butterfly sculpture! The dimensional effect is amazing and the wing details are so intricate. Love it!",
      location: "Barcelona, Spain",
      recommendation: "3D Perfection!",
      clientName: "Maria L.",
      artworkTitle: "3D Paper Sculpture - Butterfly"
    },
    {
      id: 5,
      artworkImage: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Sophie's handmade greeting cards are so thoughtful and beautiful! Each card is unique and the quality is exceptional. Perfect for special occasions.",
      location: "Paris, France",
      recommendation: "Thoughtful Craft!",
      clientName: "Claire D.",
      artworkTitle: "Handmade Greeting Cards Set"
    }
  ];

  const categories = ["All", "Origami", "Quilling", "Paper Cutting", "3D Sculpture", "Cards", "Paper Mache"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGallery = selectedCategory === "All" 
    ? paperCraftsGallery 
    : paperCraftsGallery.filter(item => item.category === selectedCategory);

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
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
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
            <Scissors size={80} className="mx-auto text-blue-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Paper Crafts</span>
            <br />
            Delicate Artistry
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover the beauty of paper transformed into art. From intricate origami and quilling to 
            dimensional sculptures and decorative pieces, each creation showcases the versatility and elegance of paper craft.
          </motion.p>
        </div>
      </section>

      {/* Paper Crafts Gallery */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Paper Craft Collection
          </motion.h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
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
                    <p className="text-xs text-blue-300">{item.size}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-blue-400 text-sm mb-1">by {item.artist}</p>
                  <p className="text-gray-400 text-sm mb-2">{item.medium}</p>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-bold text-lg">{item.price}</span>
                    <button 
                      onClick={() => addToCart({
                        id: `papercraft-${item.id}`,
                        title: item.title,
                        artist: item.artist,
                        price: parseInt(item.price.replace('₹', '').replace(',', '')),
                        image: item.image,
                        category: 'Paper Crafts'
                      })}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
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
            Client Feedback - Paper Crafts
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
                  
                  <h4 className="font-semibold text-blue-400 mb-2">{feedback.artworkTitle}</h4>
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
        className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Commission Your Custom Paper Craft</h3>
          <p className="text-xl text-gray-200 mb-8">
            Let our skilled paper craft artists create a unique piece that brings elegance and creativity to your space.
          </p>
          <motion.button
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commission Custom Paper Craft
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
            alt="Paper Craft"
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

export default PaperCrafts;