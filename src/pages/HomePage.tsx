import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Palette, User, Users, Globe, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import RippleButton from '../components/RippleButton';
import ScrollReveal from '../components/ScrollReveal';
import BackgroundVideo from '../components/BackgroundVideo';
import { useState } from 'react';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
      rating: 5,
      service: "Assignment Help"
    },
    {
      name: "Karthik S.",
      location: "India",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Our business got a stunning animated brand video. Professional quality.",
      rating: 5,
      service: "Creative Work"
    },
    {
      name: "Ethan C.",
      location: "Canada",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "They handled my login portal and submissions like pros.",
      rating: 5,
      service: "Assignment Help"
    },
    {
      name: "Sofia L.",
      location: "Spain",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Beautiful custom portrait that exceeded all expectations. Amazing artistry!",
      rating: 5,
      service: "Art Shop"
    },
    {
      name: "Michael R.",
      location: "USA",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Logo animation brought our brand to life. Incredible creative work!",
      rating: 5,
      service: "Creative Work"
    },
    {
      name: "Priya K.",
      location: "India",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Wooden crafts are absolutely beautiful. Perfect quality and fast delivery.",
      rating: 5,
      service: "Art Shop"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <BackgroundVideo
        src="/hero-background.webm"
        fallbackColor="from-gray-900 via-purple-900 to-black"
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        {/* Professional Animated Stars Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: "easeOut", fill: "forwards" }}
          >
            Where <span className="gradient-text">Students Excel</span>,
            <br />
            <span className="gradient-text">Brands Shine</span> & <span className="gradient-text">Art Inspires</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.0, ease: "easeOut", fill: "forwards" }}
          >
            Academic Excellence • Creative Solutions • Handcrafted Art - Serving 51+ Countries with 2,000+ Success Stories
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 1.0, ease: "easeOut", fill: "forwards" }}
          >
            <Link to="/assignments">
              <RippleButton variant="primary" size="lg" className="flex items-center space-x-2">
                <BookOpen size={24} />
                <span>Get Assignment Help</span>
                <ArrowRight size={20} />
              </RippleButton>
            </Link>
            
            <Link to="/creative">
              <RippleButton variant="secondary" size="lg" className="flex items-center space-x-2">
                <Palette size={24} />
                <span>Explore Creative Work</span>
                <ArrowRight size={20} />
              </RippleButton>
            </Link>
            
            <Link to="/art-shop">
              <RippleButton variant="outline" size="lg" className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 border-none">
                <User size={24} />
                <span>Visit Art Shop</span>
                <ArrowRight size={20} />
              </RippleButton>
            </Link>
          </motion.div>
        </div>
      </BackgroundVideo>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <ScrollReveal 
            className="text-center mb-16"
            direction="up"
            delay={0.2}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Nexssio?</h2>
            <p className="text-xl text-gray-400">Excellence in both academic support and creative solutions</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal
                key={index}
                className="text-center p-6 glass-effect rounded-lg hover-lift"
                direction="up"
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon size={48} className="mx-auto mb-4 text-purple-400" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal 
            className="text-center mb-16"
            direction="up"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400">Trusted by students and businesses worldwide</p>
          </ScrollReveal>
          
          {/* Scrolling Feedback Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      className="p-8 glass-effect rounded-lg hover-lift text-center"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-center mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-3 border-purple-400"
                        />
                      </div>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={24} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 text-lg italic">"{testimonial.text}"</p>
                      <div className="text-center">
                        <strong className="text-white text-lg">{testimonial.name}</strong>
                        <p className="text-gray-400">{testimonial.location}</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                          {testimonial.service}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* See All Feedback Button */}
          <div className="text-center mt-12">
            <Link
              to="/feedback-showcase"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              See All Feedback
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <ScrollReveal
        className="py-12 bg-gradient-to-r from-purple-900 to-pink-900"
        direction="up"
      >
        <motion.div
          className="container mx-auto px-6 text-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-2">Our Business Runs on Trust</h3>
          <p className="text-lg text-gray-200">
            You Always Pay <strong>After</strong> Submission. 100% Confidential. Student-Friendly. Always.
          </p>
        </motion.div>
      </ScrollReveal>
    </motion.div>
  );
};

export default HomePage;