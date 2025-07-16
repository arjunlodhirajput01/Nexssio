import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Palette, User, Users, Globe, Star, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "2,000+ Assignments",
      description: "Successfully completed across all subjects"
    },
    {
      icon: Globe,
      title: "51+ Countries",
      description: "Serving students and businesses worldwide"
    },
    {
      icon: User,
      title: "Portrait Artists",
      description: "Professional realistic and stylized portraits"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional writers and creative designers"
    },
  ];

  const testimonials = [
    {
      name: "Riya M.",
      location: "Australia",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Assignment delivered before the due date with updates. Super trustworthy.",
      rating: 5
    },
    {
      name: "Karthik S.",
      location: "India",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Our business got a stunning animated brand video. Professional quality.",
      rating: 5
    },
    {
      name: "Ethan C.",
      location: "Canada",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "They handled my login portal and submissions like pros.",
      rating: 5
    }
  ];

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Where <span className="gradient-text">Students Excel</span>,
            <br />
            <span className="gradient-text">Brands Shine</span> & <span className="gradient-text">Art Inspires</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Academic Excellence • Creative Solutions • Handcrafted Art - Serving 51+ Countries with 2,000+ Success Stories
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link 
              to="/assignments"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 neon-glow hover-lift ripple"
            >
              <BookOpen size={24} />
              <span>Get Assignment Help</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/creative"
              className="group bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 neon-glow hover-lift ripple"
            >
              <Palette size={24} />
              <span>Explore Creative Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/art-shop"
              className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 neon-glow hover-lift ripple"
            >
              <User size={24} />
              <span>Visit Art Shop</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose DualServe?</h2>
            <p className="text-xl text-gray-400">Excellence in both academic support and creative solutions</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <feature.icon size={48} className="mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400">Trusted by students and businesses worldwide</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-purple-400"
                  />
                  <div>
                    <div className="text-sm text-gray-400">
                      <strong className="text-white">{testimonial.name}</strong> - {testimonial.location}
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <motion.section 
        className="py-12 bg-gradient-to-r from-purple-900 to-pink-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-2">Our Business Runs on Trust</h3>
          <p className="text-lg text-gray-200">
            You Always Pay <strong>After</strong> Submission. 100% Confidential. Student-Friendly. Always.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;