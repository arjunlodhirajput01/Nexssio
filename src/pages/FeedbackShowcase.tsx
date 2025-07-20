import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, BookOpen, Palette, ShoppingBag, User, MapPin, Calendar } from 'lucide-react';

const FeedbackShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const allFeedback = [
    // Assignment Help Feedback
    {
      id: 1,
      name: "Riya M.",
      location: "Australia",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Assignment delivered before the due date with updates. Super trustworthy. The quality exceeded my expectations and helped me achieve an A+ grade.",
      rating: 5,
      service: "Assignment Help",
      date: "2024-01-15",
      project: "Business Management Essay"
    },
    {
      id: 2,
      name: "Ethan C.",
      location: "Canada",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "They handled my login portal and submissions like pros. Complete transparency and excellent communication throughout the process.",
      rating: 5,
      service: "Assignment Help",
      date: "2024-01-20",
      project: "Computer Science Thesis"
    },
    {
      id: 3,
      name: "Priya S.",
      location: "India",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Outstanding assignment help service. They understood my requirements perfectly and delivered exactly what I needed on time.",
      rating: 5,
      service: "Assignment Help",
      date: "2024-01-25",
      project: "Psychology Case Study"
    },
    
    // Creative Work Feedback
    {
      id: 4,
      name: "Karthik S.",
      location: "India",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Our business got a stunning animated brand video. Professional quality that helped increase our brand recognition significantly.",
      rating: 5,
      service: "Creative Work",
      date: "2024-01-18",
      project: "Brand Animation Video"
    },
    {
      id: 5,
      name: "Michael R.",
      location: "USA",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Logo animation brought our brand to life. Incredible creative work that perfectly captured our company's vision and values.",
      rating: 5,
      service: "Creative Work",
      date: "2024-01-22",
      project: "Logo Animation"
    },
    {
      id: 6,
      name: "Emma T.",
      location: "UK",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "The promotional video they created for our restaurant was amazing. It perfectly showcased our cuisine and atmosphere.",
      rating: 5,
      service: "Creative Work",
      date: "2024-01-28",
      project: "Restaurant Promotional Video"
    },
    
    // Art Shop Feedback
    {
      id: 7,
      name: "Sofia L.",
      location: "Spain",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Beautiful custom portrait that exceeded all expectations. Amazing artistry and attention to detail in every brushstroke.",
      rating: 5,
      service: "Art Shop",
      date: "2024-01-12",
      project: "Custom Oil Portrait"
    },
    {
      id: 8,
      name: "Priya K.",
      location: "India",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Wooden crafts are absolutely beautiful. Perfect quality and fast delivery. The craftsmanship is truly exceptional.",
      rating: 5,
      service: "Art Shop",
      date: "2024-01-30",
      project: "Wooden Sculpture"
    },
    {
      id: 9,
      name: "David W.",
      location: "Australia",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "The resin keychain with my photo turned out perfect! Great quality and the colors are so vibrant. Highly recommend!",
      rating: 5,
      service: "Art Shop",
      date: "2024-02-02",
      project: "Custom Resin Keychain"
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Feedback', icon: Star },
    { id: 'Assignment Help', label: 'Assignment Help', icon: BookOpen },
    { id: 'Creative Work', label: 'Creative Work', icon: Palette },
    { id: 'Art Shop', label: 'Art Shop', icon: ShoppingBag }
  ];

  const filteredFeedback = activeTab === 'all' 
    ? allFeedback 
    : allFeedback.filter(item => item.service === activeTab);

  const getServiceColor = (service: string) => {
    switch (service) {
      case 'Assignment Help': return 'text-blue-400 bg-blue-900/20';
      case 'Creative Work': return 'text-purple-400 bg-purple-900/20';
      case 'Art Shop': return 'text-green-400 bg-green-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  return (
    <motion.div 
      className="min-h-screen pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Client <span className="gradient-text">Feedback</span>
            <br />
            Success <span className="gradient-text">Stories</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Read what our clients say about their experience with Nexssio's services. 
            From academic success to creative excellence and beautiful artwork.
          </motion.p>
        </div>
      </section>

      {/* Feedback Tabs */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Feedback Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeedback.map((feedback, index) => (
              <motion.div
                key={feedback.id}
                className="p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={feedback.image} 
                    alt={feedback.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-purple-400"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-white">{feedback.name}</strong>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getServiceColor(feedback.service)}`}>
                        {feedback.service}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin size={12} className="mr-1" />
                      {feedback.location}
                      <Calendar size={12} className="ml-3 mr-1" />
                      {new Date(feedback.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-4 italic">"{feedback.text}"</p>
                
                <div className="text-sm text-purple-400 font-semibold">
                  Project: {feedback.project}
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
          <h3 className="text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Experience the same quality and excellence that our clients rave about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => {
                const phoneNumber = "+917206366729";
                const message = "Hey! I want to get started with Nexssio services. Can you help me?";
                const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default FeedbackShowcase;