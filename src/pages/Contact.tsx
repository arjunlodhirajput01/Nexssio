import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, FileText, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: '',
    urgency: 'normal'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@dualserve.com",
      description: "Get a response within 2 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Available 24/7 for urgent requests"
    },
    {
      icon: MapPin,
      title: "Global Service",
      details: "Serving 51+ Countries",
      description: "Worldwide academic and creative support"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 Hours",
      description: "Guaranteed quotation delivery"
    }
  ];

  const services = [
    { value: 'assignment', label: 'Assignment Help' },
    { value: 'creative', label: 'Creative Services' },
    { value: 'portrait', label: 'Portrait Art' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'other', label: 'Other' }
  ];

  const urgencyLevels = [
    { value: 'normal', label: 'Normal (7+ days)', color: 'text-green-400' },
    { value: 'urgent', label: 'Urgent (3-6 days)', color: 'text-yellow-400' },
    { value: 'emergency', label: 'Emergency (1-2 days)', color: 'text-red-400' }
  ];

  const faqs = [
    {
      question: "How quickly can you deliver assignments?",
      answer: "We offer delivery from 1 hour to several weeks depending on complexity. Emergency delivery available for urgent requests."
    },
    {
      question: "Do you guarantee original work?",
      answer: "Yes, all our work is 100% original with plagiarism reports included. We never reuse or resell content."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods. Most importantly, you only pay after successful submission and your satisfaction."
    },
    {
      question: "Can you handle technical subjects?",
      answer: "Absolutely! Our team includes experts in engineering, computer science, mathematics, medicine, and all academic fields."
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes, we provide unlimited revisions until you're completely satisfied with the work quality and requirements."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Your privacy is our priority. All information is encrypted and never shared with third parties. Complete confidentiality guaranteed."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send message to WhatsApp
    const phoneNumber = "+917206366729";
    const whatsappMessage = `Hello Nexssio Team,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Subject: ${formData.subject}
Urgency: ${formData.urgency}

Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        subject: '',
        message: '',
        urgency: 'normal'
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
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get in <span className="gradient-text">Touch</span>
            <br />
            We're Here to <span className="gradient-text">Help</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Whether you need assignment help, creative services, or portrait art - 
            our team is ready to bring your vision to life. Get your free quotation today!
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Contact Information
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <info.icon size={48} className="mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-lg text-white font-medium mb-2">{info.details}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">Send Us a Message</h2>
              
              {isSubmitted ? (
                <motion.div
                  className="bg-green-900/50 border border-green-400 p-8 rounded-lg text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle size={64} className="mx-auto mb-4 text-green-400" />
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300">
                    Thank you for contacting us. We'll get back to you within 24 hours with a detailed quotation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Service Type *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none transition-colors"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none transition-colors"
                      placeholder="Brief description of your project"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Urgency Level</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {urgencyLevels.map((level) => (
                        <label key={level.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            value={level.value}
                            checked={formData.urgency === level.value}
                            onChange={handleInputChange}
                            className="text-purple-400"
                          />
                          <span className={`text-sm ${level.color}`}>{level.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none transition-colors"
                      placeholder="Please provide detailed information about your requirements, deadlines, and any specific instructions..."
                      required
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </motion.button>
                  
                  <p className="text-center text-gray-400 text-sm">
                    * Required fields. We'll respond within 24 hours with a detailed quotation.
                  </p>
                </form>
              )}
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect p-6 rounded-lg"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-green-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
              <p className="text-gray-300">
                Chat with us on WhatsApp for instant support and quick quotations.
              </p>
            </div>
            
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare size={24} />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>
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

export default Contact;