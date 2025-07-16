import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Shield, Users, CheckCircle, Star, FileText, GraduationCap } from 'lucide-react';

const AssignmentServices = () => {
  const services = [
    { icon: FileText, title: "Essay Writing", description: "High-quality essays with proper structure and citations" },
    { icon: BookOpen, title: "Case Study", description: "In-depth analysis and professional case study reports" },
    { icon: GraduationCap, title: "SOP & Reflective Writing", description: "Statement of Purpose and reflective essays" },
    { icon: FileText, title: "Thesis", description: "Complete thesis writing and research support" },
    { icon: BookOpen, title: "Homework Help", description: "Daily homework assistance across all subjects" },
    { icon: Clock, title: "Urgent Delivery (1 Hour)", description: "Fast-track delivery for urgent assignments" },
    { icon: FileText, title: "Bibliography & APA", description: "Proper formatting and citation styles" },
    { icon: CheckCircle, title: "Proofreading", description: "Professional editing and proofreading services" }
  ];

  const tools = [
    "MS Word", "Google Docs", "LibreOffice", "Canva Pro", "Grammarly", 
    "Google Gemini", "Notion", "ChatGPT", "Blackbox", "Google Scholar", "Grok"
  ];

  const valueAdded = [
    { icon: CheckCircle, title: "Plagiarism Checker with Report Preview", description: "Comprehensive plagiarism check with detailed report" },
    { icon: Shield, title: "Unlimited Revisions", description: "Free revisions until you're completely satisfied" },
    { icon: Users, title: "Expert Consultation", description: "One-on-one sessions with subject experts" },
    { icon: FileText, title: "Proofreading & Editing", description: "Professional editing for perfect submissions" },
    { icon: GraduationCap, title: "1-on-1 Academic Sessions", description: "Personalized tutoring and guidance" }
  ];

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
            className="text-5xl md:text-6xl font-bold mb-6 typewriter"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Helping <span className="gradient-text">2,000+ Students</span>
            <br />
            Across <span className="gradient-text">51+ Countries</span>
            <br />
            Now It's Your Turn!
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Professional academic support with guaranteed results. Pay only after successful submission.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Assignment Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 glass-effect rounded-lg hover-lift group cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <service.icon size={48} className="mx-auto mb-4 text-purple-400 group-hover:text-pink-400 transition-colors" />
                <h3 className="text-lg font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-400 text-sm text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Options */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Choose Your Submission Method
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="p-8 glass-effect rounded-lg hover-lift group"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-6">
                <Shield size={64} className="mx-auto mb-4 text-green-400" />
                <h3 className="text-2xl font-bold mb-2">Share Login Portal</h3>
                <p className="text-gray-400">For Trusted Students</p>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>Portal link, username, password</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>We handle everything until final grading</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>Campus communication & updates via email</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>No upfront cost</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>Entirely secure</span>
                </li>
              </ul>
              
              <Link 
                to="/login-portal-submission"
                className="mt-6 block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover-lift"
              >
                Learn More About Portal Submission
              </Link>
            </motion.div>
            
            <motion.div
              className="p-8 glass-effect rounded-lg hover-lift group"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-6">
                <FileText size={64} className="mx-auto mb-4 text-blue-400" />
                <h3 className="text-2xl font-bold mb-2">Manual Submission</h3>
                <p className="text-gray-400">Traditional Approach</p>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-blue-400" />
                  <span>Name, Roll No, Email, Contact</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-blue-400" />
                  <span>Assignment file / details</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-blue-400" />
                  <span>Get a quotation in 24 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-blue-400" />
                  <span>Pay only after submission</span>
                </li>
              </ul>
              
              <Link 
                to="/manual-submission"
                className="mt-6 block w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover-lift"
              >
                Learn More About Manual Submission
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Tools We Use
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="p-4 glass-effect rounded-lg text-center hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-semibold text-sm">{tool}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Added Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Value-Added Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueAdded.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 glass-effect rounded-lg hover-lift"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <service.icon size={48} className="mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <motion.section 
        className="py-12 bg-gradient-to-r from-green-900 to-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Our Business Runs on Trust</h3>
          <p className="text-xl text-gray-200">
            You Always Pay <strong>After</strong> Submission. 100% Confidential. Student-Friendly. Always.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AssignmentServices;