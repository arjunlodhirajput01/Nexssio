import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Upload, Clock, CheckCircle, Users, Mail, ArrowLeft, DollarSign, Star, MessageSquare } from 'lucide-react';

const ManualSubmission = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    email: '',
    contact: '',
    subject: '',
    deadline: '',
    requirements: '',
    additionalNotes: ''
  });

  const benefits = [
    {
      icon: FileText,
      title: "Complete Control",
      description: "You maintain full control over your assignment details and submission process while we handle the heavy lifting."
    },
    {
      icon: Clock,
      title: "24-Hour Quotation",
      description: "Receive a detailed quotation within 24 hours including timeline, pricing, and deliverables breakdown."
    },
    {
      icon: Users,
      title: "Expert Matching",
      description: "We match your assignment with the most qualified expert in your specific subject area for optimal results."
    },
    {
      icon: DollarSign,
      title: "Pay After Submission",
      description: "Our unique payment model ensures you only pay after successful submission and your satisfaction is guaranteed."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Submit Assignment Details",
      description: "Fill out our comprehensive form with all assignment requirements, deadlines, and specific instructions.",
      details: [
        "Personal and academic information",
        "Assignment type and subject",
        "Detailed requirements and guidelines",
        "Deadline and urgency level",
        "File uploads (if any)",
        "Special instructions or preferences"
      ]
    },
    {
      step: "02",
      title: "Expert Review & Quotation",
      description: "Our academic experts review your requirements and provide a detailed quotation within 24 hours.",
      details: [
        "Subject matter expert assignment",
        "Complexity and research level assessment",
        "Timeline and milestone planning",
        "Pricing based on requirements",
        "Revision policy explanation",
        "Communication channel setup"
      ]
    },
    {
      step: "03",
      title: "Assignment Execution",
      description: "Once you approve the quotation, our expert begins working on your assignment with regular progress updates.",
      details: [
        "Research and content development",
        "Regular progress updates via email",
        "Draft reviews and feedback incorporation",
        "Quality assurance and plagiarism checks",
        "Formatting and citation verification",
        "Final review and polishing"
      ]
    },
    {
      step: "04",
      title: "Delivery & Payment",
      description: "We deliver the completed assignment before your deadline, and you pay only after successful submission.",
      details: [
        "Pre-deadline delivery guarantee",
        "Final quality check and review",
        "Plagiarism report included",
        "Payment after your satisfaction",
        "Post-submission support",
        "Grade tracking and feedback"
      ]
    }
  ];

  const pricing = [
    {
      type: "Standard Essays",
      timeframe: "7+ days",
      price: "₹500-800 per page",
      features: ["Research included", "Citations & Bibliography", "2 free revisions", "Plagiarism report"]
    },
    {
      type: "Case Studies",
      timeframe: "5+ days",
      price: "₹1,200-2,000 per case",
      features: ["Industry analysis", "Data interpretation", "Professional formatting", "Executive summary"]
    },
    {
      type: "Urgent Delivery",
      timeframe: "1-3 days",
      price: "2x standard rate",
      features: ["Priority handling", "Dedicated expert", "24/7 support", "Express delivery"]
    },
    {
      type: "Thesis/Dissertation",
      timeframe: "Custom timeline",
      price: "Custom quotation",
      features: ["Chapter-wise delivery", "Research methodology", "Data analysis", "Defense preparation"]
    }
  ];

  const testimonials = [
    {
      name: "Priya S.",
      university: "Delhi University",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "The manual submission process was so transparent. I knew exactly what I was paying for and received updates throughout. Got A grade!",
      rating: 5,
      subject: "Business Management"
    },
    {
      name: "Michael T.",
      university: "University of Sydney",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Perfect for first-time users. The quotation was detailed and fair. The assignment quality exceeded my expectations. Highly recommended!",
      rating: 5,
      subject: "Computer Science"
    },
    {
      name: "Lisa W.",
      university: "University of Toronto",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Great communication throughout the process. They understood my requirements perfectly and delivered exactly what I needed on time.",
      rating: 5,
      subject: "Psychology"
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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

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
            <FileText size={80} className="mx-auto text-blue-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Manual Submission</span>
            <br />
            Traditional & Transparent
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Perfect for first-time users and students who prefer complete transparency. 
            Get detailed quotations, track progress, and pay only after successful submission.
          </motion.p>

          <motion.div
            className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 p-6 rounded-lg max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p className="text-lg text-blue-300 font-semibold">
              ✅ Ideal for new students who want full control and transparency
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
            How Manual Submission Works
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
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                
                <div className="flex-1 glass-effect p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 mb-6">{step.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-blue-400 flex-shrink-0" />
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

      {/* Pricing Guide */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Transparent Pricing Guide
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                className="p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-2">{plan.type}</h3>
                <p className="text-blue-400 font-semibold mb-2">{plan.timeframe}</p>
                <p className="text-2xl font-bold text-green-400 mb-4">{plan.price}</p>
                
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assignment Submission Form */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Submit Your Assignment Details
          </motion.h2>
          
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto glass-effect p-8 rounded-lg"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Roll Number / Student ID *</label>
                <input
                  type="text"
                  name="rollNo"
                  value={formData.rollNo}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none"
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
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Contact Number *</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Subject/Course *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="business">Business Management</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="psychology">Psychology</option>
                  <option value="engineering">Engineering</option>
                  <option value="literature">Literature</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Deadline *</label>
                <input
                  type="datetime-local"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Assignment Requirements *</label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                rows={6}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none"
                placeholder="Please provide detailed requirements, word count, formatting style, specific instructions, etc."
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Additional Notes</label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none"
                placeholder="Any additional information or special requests..."
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Upload Files (Optional)</label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <Upload size={48} className="mx-auto mb-4 text-gray-400" />
                <p className="text-gray-400">Drag and drop files here or click to browse</p>
                <p className="text-sm text-gray-500 mt-2">Supported formats: PDF, DOC, DOCX, TXT (Max 10MB)</p>
              </div>
            </div>
            
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Assignment Details
            </motion.button>
            
            <p className="text-center text-gray-400 mt-4">
              You'll receive a detailed quotation within 24 hours. No payment required until after successful submission.
            </p>
          </motion.form>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Manual Submission?
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
                <benefit.icon size={48} className="mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Success Stories from Manual Submission
          </motion.h2>
          
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
                    className="w-12 h-12 rounded-full mr-4 border-2 border-blue-400"
                  />
                  <div>
                    <div className="text-sm">
                      <strong className="text-white">{testimonial.name}</strong>
                      <p className="text-gray-400">{testimonial.university}</p>
                      <p className="text-blue-400 text-xs">{testimonial.subject}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm">"{testimonial.text}"</p>
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
          <h3 className="text-4xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of students who have achieved academic success through our transparent manual submission process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Your Assignment Now
            </motion.button>
            <Link
              to="/login-portal-submission"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Or Try Portal Submission
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ManualSubmission;