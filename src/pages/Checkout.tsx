import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, MapPin, Phone, Mail, User } from 'lucide-react';
import { useCart } from '../components/CartContext';

const Checkout = () => {
  const { cartItems, getTotalPrice, getTotalItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'whatsapp'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const orderDetails = cartItems.map(item => 
      `${item.title} by ${item.artist} - Qty: ${item.quantity} - ₹${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');
    
    const message = `🎨 *New Art Order from DualServe*

*Customer Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

*Shipping Address:*
${formData.address}
${formData.city}, ${formData.state} - ${formData.pincode}

*Order Details:*
${orderDetails}

*Total Amount: ₹${getTotalPrice().toLocaleString()}*

Please confirm this order and provide payment instructions.`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear cart after order
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <motion.div 
        className="min-h-screen pt-20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">No Items to Checkout</h2>
          <Link 
            to="/art-shop"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </motion.div>
    );
  }

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
          to="/cart"
          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Cart</span>
        </Link>
      </div>

      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <motion.div
            className="glass-effect p-6 rounded-lg"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <User size={16} className="inline mr-2" />
                    Full Name *
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
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  <Phone size={16} className="inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  <MapPin size={16} className="inline mr-2" />
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Punjab">Punjab</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">PIN Code *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                    required
                  />
                </div>
              </div>
              
              <div className="bg-green-900/20 p-4 rounded-lg border border-green-400/30">
                <h3 className="font-semibold mb-2 text-green-400">Payment Method</h3>
                <p className="text-sm text-gray-300 mb-3">
                  After placing your order, you'll be redirected to WhatsApp where our team will provide payment instructions and confirm your order details.
                </p>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="whatsapp"
                    name="paymentMethod"
                    value="whatsapp"
                    checked={formData.paymentMethod === 'whatsapp'}
                    onChange={handleInputChange}
                    className="text-green-400"
                  />
                  <label htmlFor="whatsapp" className="text-green-400 font-semibold">
                    WhatsApp Order Confirmation
                  </label>
                </div>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Place Order via WhatsApp
              </motion.button>
            </form>
          </motion.div>
          
          {/* Order Summary */}
          <motion.div
            className="glass-effect p-6 rounded-lg h-fit sticky top-24"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-600 pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal ({getTotalItems()} items)</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-400/30">
              <p className="text-blue-300 text-sm">
                🇮🇳 <strong>India Only Service:</strong> We currently ship artwork only within India. Free shipping on all orders!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;