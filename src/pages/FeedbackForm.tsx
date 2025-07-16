import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, CheckCircle, MessageSquare, User, Mail } from 'lucide-react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    rating: 0,
    feedback: '',
    recommendation: '',
    location: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Paintings',
    'Portraits',
    'Paper Crafts',
    'Wooden Crafts',
    'Resin Keychains',
    'Flower Bouquets',
    'Assignment Help',
    'Creative Services'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingClick = (rating: number) => {
    setFormData({
      ...formData,
      rating
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        service: '',
        rating: 0,
        feedback: '',
        recommendation: '',
        location: ''
      });
    }, 3000);
  };

  return (
    <motion.div 
      className="min-h-screen pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Share Your <span className="gradient-text">Experience</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your feedback helps us improve and helps other customers make informed decisions. 
            Share your experience with our services!
          </motion.p>

          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <motion.div
                className="bg-green-900/50 border border-green-400 p-8 rounded-lg text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle size={64} className="mx-auto mb-4 text-green-400" />
                <h3 className="text-2xl font-bold text-green-400 mb-2">Thank You for Your Feedback!</h3>
                <p className="text-gray-300">
                  Your review has been submitted successfully. It will be displayed on our website after review.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="glass-effect p-8 rounded-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      <User size={16} className="inline mr-2" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      <Mail size={16} className="inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Service Used *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                      required
                    >
                      <option value="">Select Service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, State"
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Rating *</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className={`text-3xl transition-colors ${
                          star <= formData.rating ? 'text-yellow-400' : 'text-gray-600'
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    <MessageSquare size={16} className="inline mr-2" />
                    Your Feedback *
                  </label>
                  <textarea
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                    placeholder="Share your experience with our service..."
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Recommendation Title</label>
                  <input
                    type="text"
                    name="recommendation"
                    value={formData.recommendation}
                    onChange={handleInputChange}
                    placeholder="e.g., Excellent Service!, Highly Recommended!"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>Submit Feedback</span>
                </motion.button>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FeedbackForm;