import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <motion.footer 
      className="bg-gray-900 border-t border-gray-800 mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">DualServe</h3>
            <p className="text-gray-400 mb-4">
              Where Students Excel & Brands Come to Life
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Assignment Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Essay Writing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Thesis Writing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Homework Help</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Creative Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Video Production</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Motion Graphics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3 text-gray-400">
              <li><Link to="/feedback" className="hover:text-white transition-colors">Share Feedback</Link></li>
              <li><Link to="/cart" className="hover:text-white transition-colors">Shopping Cart</Link></li>
              <li><Link to="/creative/portfolio" className="hover:text-white transition-colors">Creative Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Nexssio. All rights reserved. | Pay only after submission.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;