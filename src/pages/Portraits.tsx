import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Star, MapPin, Heart, Award, Clock, Eye, Camera, CheckCircle } from 'lucide-react';
import { useCart } from '../components/CartContext';
import CartIcon from '../components/CartIcon';

const Portraits = () => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portraitsGallery = [
    {
      id: 1,
      title: "Realistic Family Portrait",
      artist: "Elena Rodriguez",
      medium: "Digital Realistic Art",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Photorealistic family portrait capturing love and togetherness",
      category: "Realistic",
      year: "2024",
      size: "24x36 inches",
      price: "₹12,500"
    },
    {
      id: 2,
      title: "Stylized Cartoon Portrait",
      artist: "Maya Johnson",
      medium: "Digital Cartoon Style",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Fun cartoon-style portrait perfect for gifts and social media",
      category: "Stylized",
      year: "2024",
      size: "16x20 inches",
      price: "₹8,000"
    },
    {
      id: 3,
      title: "Traditional Charcoal Portrait",
      artist: "Leonardo Rossi",
      medium: "Charcoal on Paper",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Classic charcoal portrait with dramatic lighting and depth",
      category: "Traditional",
      year: "2024",
      size: "18x24 inches",
      price: "₹10,000"
    },
    {
      id: 4,
      title: "Digital Avatar Portrait",
      artist: "Alex Digital",
      medium: "Digital Illustration",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Modern digital avatar perfect for professional profiles",
      category: "Digital",
      year: "2024",
      size: "Digital Format",
      price: "₹5,500"
    },
    {
      id: 5,
      title: "Wedding Portrait - Oil Painting",
      artist: "Victoria Sterling",
      medium: "Oil on Canvas",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Romantic wedding portrait painted with traditional oil techniques",
      category: "Traditional",
      year: "2024",
      size: "24x30 inches",
      price: "₹18,000"
    },
    {
      id: 6,
      title: "Pet Portrait - Watercolor",
      artist: "Amelia Chen",
      medium: "Watercolor on Paper",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      description: "Adorable pet portrait with soft watercolor techniques",
      category: "Traditional",
      year: "2024",
      size: "16x20 inches",
      price: "₹7,500"
    }
  ];

  // Client Feedback specific to Portraits
  const clientFeedback = [
    {
      id: 1,
      artworkImage: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Elena created the most beautiful family portrait! Every detail is perfect and it captures our family's personality so well. It's now the centerpiece of our living room.",
      location: "Mumbai, India",
      recommendation: "Family Treasure!",
      clientName: "The Sharma Family",
      artworkTitle: "Realistic Family Portrait"
    },
    {
      id: 2,
      artworkImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Maya's cartoon portrait is absolutely adorable! My kids love seeing themselves as cartoon characters. Perfect gift idea and great quality work.",
      location: "Delhi, India",
      recommendation: "Kids Love It!",
      clientName: "Priya K.",
      artworkTitle: "Stylized Cartoon Portrait"
    },
    {
      id: 3,
      artworkImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Leonardo's charcoal portrait is a masterpiece! The dramatic lighting and attention to detail is incredible. It's like looking at a photograph but with artistic soul.",
      location: "Bangalore, India",
      recommendation: "Artistic Excellence!",
      clientName: "Rajesh M.",
      artworkTitle: "Traditional Charcoal Portrait"
    },
    {
      id: 4,
      artworkImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Alex created the perfect digital avatar for my LinkedIn profile. Professional, clean, and exactly what I needed for my personal branding. Highly recommend!",
      location: "Chennai, India",
      recommendation: "Professional Quality!",
      clientName: "Arjun T.",
      artworkTitle: "Digital Avatar Portrait"
    },
    {
      id: 5,
      artworkImage: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      feedback: "Victoria painted our wedding portrait beautifully! The oil painting technique gives it such richness and depth. It perfectly captures our special day forever.",
      location: "Pune, India",
      recommendation: "Wedding Perfection!",
      clientName: "Neha & Vikram",
      artworkTitle: "Wedding Portrait - Oil Painting"
    }
  ];

  const categories = ["All", "Realistic", "Stylized", "Traditional", "Digital"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGallery = selectedCategory === "All" 
    ? portraitsGallery 
    : portraitsGallery.filter(item => item.category === selectedCategory);

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
            className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
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
            <User size={80} className="mx-auto text-emerald-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Portraits</span>
            <br />
            Capturing Life & Personality
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            From photorealistic masterpieces to stylized interpretations, our portrait collection captures 
            the essence of personality and emotion. Each portrait is carefully crafted to tell a unique story.
          </motion.p>
        </div>
      </section>

      {/* Portraits Gallery */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Portrait Collection
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
                    <p className="text-xs text-emerald-300">{item.size}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-emerald-400 text-sm mb-1">by {item.artist}</p>
                  <p className="text-gray-400 text-sm mb-2">{item.medium}</p>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-bold text-lg">{item.price}</span>
                    <button 
                      onClick={() => addToCart({
                        id: `portrait-${item.id}`,
                        title: item.title,
                        artist: item.artist,
                        price: parseInt(item.price.replace('₹', '').replace(',', '')),
                        image: item.image,
                        category: 'Portraits'
                      })}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
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
            Client Feedback - Portraits
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
                  
                  <h4 className="font-semibold text-emerald-400 mb-2">{feedback.artworkTitle}</h4>
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
        className="py-20 bg-gradient-to-r from-emerald-900 to-teal-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Commission Your Custom Portrait</h3>
          <p className="text-xl text-gray-200 mb-8">
            Let our talented artists create a personalized portrait that captures your unique story and personality.
          </p>
          <motion.button
            className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commission Custom Portrait
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
            alt="Portrait"
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

export default Portraits;