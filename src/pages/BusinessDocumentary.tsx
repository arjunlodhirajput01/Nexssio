import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Video, Play, Star, Award, Clock, Users, CheckCircle } from 'lucide-react';

const BusinessDocumentary = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const documentaryPortfolio = [
    {
      id: 1,
      title: "Tech Startup Journey",
      client: "InnovateTech Solutions",
      thumbnail: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Complete brand story showcasing the startup's journey from idea to success",
      duration: "8:45",
      year: "2024",
      category: "Startup Story"
    },
    {
      id: 2,
      title: "Manufacturing Excellence",
      client: "Steel Industries Ltd",
      thumbnail: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Industrial documentary highlighting manufacturing processes and quality standards",
      duration: "12:30",
      year: "2024",
      category: "Industrial"
    },
    {
      id: 3,
      title: "Healthcare Innovation",
      client: "MedCare Hospital",
      thumbnail: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Documentary showcasing medical innovations and patient care excellence",
      duration: "15:20",
      year: "2024",
      category: "Healthcare"
    },
    {
      id: 4,
      title: "Educational Institution Profile",
      client: "Global University",
      thumbnail: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Comprehensive documentary about university culture, academics, and achievements",
      duration: "10:15",
      year: "2024",
      category: "Education"
    }
  ];

  const features = [
    {
      icon: Video,
      title: "Professional Storytelling",
      description: "Compelling narratives that showcase your business journey and values"
    },
    {
      icon: Users,
      title: "Expert Interviews",
      description: "Professional interviews with key stakeholders and industry experts"
    },
    {
      icon: Award,
      title: "High Production Value",
      description: "Cinema-quality filming with professional equipment and techniques"
    },
    {
      icon: Clock,
      title: "Flexible Duration",
      description: "From short 3-minute profiles to comprehensive 30-minute documentaries"
    }
  ];

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
          to="/creative"
          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Creative Services</span>
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
            <Video size={80} className="mx-auto text-blue-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Business Documentary</span>
            <br />
            Tell Your Story
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Professional documentary production that captures your business story, values, and achievements. 
            From startup journeys to corporate profiles, we create compelling narratives that resonate with your audience.
          </motion.p>
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
            Why Choose Our Documentary Services
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
                <feature.icon size={48} className="mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Documentary Portfolio
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentaryPortfolio.map((item, index) => (
              <motion.div
                key={item.id}
                className="group glass-effect rounded-lg overflow-hidden hover-lift cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setSelectedVideo(item.videoUrl)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play size={64} className="text-white" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-white text-sm">
                    {item.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-400 text-sm mb-2">Client: {item.client}</p>
                  <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-purple-400">{item.category}</span>
                    <span className="text-gray-500">{item.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-900 to-purple-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Tell Your Business Story?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Let's create a compelling documentary that showcases your business journey and achievements.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Documentary Project
          </Link>
        </div>
      </motion.section>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo}
              title="Business Documentary"
              className="w-full h-full rounded-lg"
              allowFullScreen
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BusinessDocumentary;