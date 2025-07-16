import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';
import { useCart } from '../components/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <motion.div 
        className="min-h-screen pt-20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <ShoppingCart size={80} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-400 mb-8">Add some beautiful artwork to your cart!</p>
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
          to="/art-shop"
          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Continue Shopping</span>
        </Link>
      </div>

      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart ({getTotalItems()} items)</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                className="glass-effect p-6 rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-400">by {item.artist}</p>
                    <p className="text-purple-400 text-sm">{item.category}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-700 rounded"
                    >
                      <Minus size={16} />
                    </button>
                    
                    <span className="w-8 text-center">{item.quantity}</span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-700 rounded"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-lg">₹{(item.price * item.quantity).toLocaleString()}</p>
                    <p className="text-gray-400 text-sm">₹{item.price.toLocaleString()} each</p>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-400 hover:bg-red-900/20 rounded"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              className="glass-effect p-6 rounded-lg sticky top-24"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>₹{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <Link
                to="/checkout"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300"
              >
                Proceed to Checkout
              </Link>
              
              <p className="text-center text-gray-400 text-sm mt-4">
                🇮🇳 Available only in India
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;