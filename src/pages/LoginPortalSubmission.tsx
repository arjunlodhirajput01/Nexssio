import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle, Users, Clock, Mail, ArrowLeft, AlertTriangle, Star } from 'lucide-react';

const LoginPortalSubmission = () => {
  const benefits = [
    {
      icon: Shield,
      title: "100% Secure Process",
      description: "Your login credentials are handled with military-grade security. We use encrypted connections and never store your passwords permanently."
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Get instant notifications about assignment progress, submission status, and grade updates directly to your email."
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "A dedicated academic specialist is assigned to your account for personalized assistance throughout the process."
    },
    {
      icon: Mail,
      title: "Campus Communication",
      description: "We handle all communication with your professors and campus systems, keeping you informed every step of the way."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Share Your Portal Details",
      description: "Provide your university portal link, username, and password through our secure encrypted form.",
      details: [
        "University/College portal URL",
        "Your student username/ID",
        "Current password",
        "Any specific instructions or notes"
      ]
    },
    {
      step: "02",
      title: "Account Verification",
      description: "Our team securely logs in to verify access and reviews all pending assignments and deadlines.",
      details: [
        "Secure login verification",
        "Assignment deadline mapping",
        "Course requirement analysis",
        "Professor communication style review"
      ]
    },
    {
      step: "03",
      title: "Assignment Execution",
      description: "We complete your assignments with expert precision, following all guidelines and requirements.",
      details: [
        "Research and content creation",
        "Proper formatting and citations",
        "Quality assurance checks",
        "Plagiarism verification"
      ]
    },
    {
      step: "04",
      title: "Submission & Follow-up",
      description: "We submit your work on time and monitor for any feedback or grade updates from your professors.",
      details: [
        "Timely submission before deadline",
        "Confirmation receipt tracking",
        "Grade monitoring and updates",
        "Revision handling if needed"
      ]
    }
  ];

  const security = [
    {
      icon: Lock,
      title: "Encrypted Data Transfer",
      description: "All login credentials are transmitted using 256-bit SSL encryption"
    },
    {
      icon: Shield,
      title: "No Data Storage",
      description: "We never permanently store your passwords or personal information"
    },
    {
      icon: Users,
      title: "Trusted Professionals",
      description: "Only verified academic experts handle your account access"
    }
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      university: "University of Melbourne",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "I was hesitant at first, but they handled my portal access so professionally. Got A+ on 3 assignments and never had any security issues.",
      rating: 5
    },
    {
      name: "Ahmed R.",
      university: "Toronto Institute of Technology",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "The portal submission method saved me so much time. They handled everything from submission to professor communication. Highly recommended!",
      rating: 5
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
          to="/assignments"
          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Assignment Services</span>
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
            <Shield size={80} className="mx-auto text-green-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Portal Submission</span>
            <br />
            The Trusted Method
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            For students who trust us with their portal access. We handle everything from login to final grading, 
            ensuring complete academic success with zero hassle.
          </motion.p>

          <motion.div
            className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-6 rounded-lg max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p className="text-lg text-green-300 font-semibold">
              ✅ Perfect for busy students who want complete peace of mind
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            How Portal Submission Works
          </motion.h2>
          
          <div className="space-y-12">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8"
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                
                <div className="flex-1 glass-effect p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 mb-6">{step.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Security & Privacy Measures
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {security.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <feature.icon size={48} className="mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Portal Submission?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <benefit.icon size={48} className="mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            What Students Say About Portal Submission
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    className="w-12 h-12 rounded-full mr-4 border-2 border-green-400"
                  />
                  <div>
                    <div className="text-sm">
                      <strong className="text-white">{testimonial.name}</strong>
                      <p className="text-gray-400">{testimonial.university}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-gradient-to-r from-yellow-900/50 to-orange-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex items-start space-x-4 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AlertTriangle size={32} className="text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Important Notice</h3>
              <p className="text-gray-300">
                Portal submission is recommended only for students who have built trust with our service through previous successful collaborations. 
                We maintain the highest security standards and never misuse access credentials. Your academic integrity and privacy are our top priorities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-green-900 to-emerald-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Experience Hassle-Free Academic Success?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Join 2,000+ students who trust us with their portal access for guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => {
                const phoneNumber = "+917206366729";
                const message = "Hey I am [Full Name]. I want to Get Started With Portal Submission.";
                const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-white text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started with Portal Submission
            </motion.button>
            <Link
              to="/manual-submission"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-900 transition-colors"
            >
              Try Manual Submission
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default LoginPortalSubmission;