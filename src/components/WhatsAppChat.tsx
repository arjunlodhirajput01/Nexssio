import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! Welcome to DualServe! 👋 How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    "Assignment Help",
    "Creative Services", 
    "Art Shop",
    "Portal Submission",
    "Pricing Info",
    "Talk to Human"
  ];

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      
      if (text.toLowerCase().includes('assignment') || text === 'Assignment Help') {
        botResponse = "Great! I can help you with assignments. We offer:\n\n📝 Essay Writing\n📊 Case Studies\n🎓 Thesis Writing\n⚡ Urgent Delivery (1 hour)\n\nWould you like to know more about any specific service?";
      } else if (text.toLowerCase().includes('creative') || text === 'Creative Services') {
        botResponse = "Awesome! Our creative services include:\n\n🎬 Business Documentaries\n📺 Promotional Videos\n⚡ Logo Animations\n📋 Motion Brochures\n\nWhich service interests you most?";
      } else if (text.toLowerCase().includes('art') || text === 'Art Shop') {
        botResponse = "Perfect! Our Art Shop features:\n\n🎨 Custom Paintings\n👤 Portrait Art\n✂️ Paper Crafts\n🏆 Wooden Crafts\n💎 Resin Keychains\n🌸 Flower Bouquets\n\nWhat type of art are you looking for?";
      } else if (text.toLowerCase().includes('portal') || text === 'Portal Submission') {
        botResponse = "Portal Submission is our premium service! 🔐\n\nBenefits:\n✅ Complete assignment handling\n✅ Direct portal access\n✅ Real-time updates\n✅ Pay after submission\n\nWould you like to get started?";
      } else if (text.toLowerCase().includes('pricing') || text === 'Pricing Info') {
        botResponse = "Our pricing is very competitive! 💰\n\n📝 Essays: ₹500-800 per page\n📊 Case Studies: ₹1,200-2,000\n🎨 Portraits: Starting ₹2,500\n⚡ Urgent delivery available\n\n💡 Best part: You pay ONLY after submission!";
      } else if (text.toLowerCase().includes('human') || text === 'Talk to Human') {
        botResponse = "I'll connect you with our team right away! 👨‍💼\n\nClick the button below to chat directly on WhatsApp with our specialists:";
      } else {
        botResponse = "Thanks for your message! 😊 I'm here to help with:\n\n📚 Assignment Help\n🎨 Creative Services\n🛍️ Art Shop\n🔐 Portal Submission\n\nWhat would you like to know more about?";
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleWhatsAppRedirect = (service?: string) => {
    const phoneNumber = "+917206366729";
    let message = "Hey! I'm interested in DualServe services.";
    
    if (service) {
      message = `Hey! I'm interested in ${service} from DualServe. Can you tell me more?`;
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 gaming:bg-green-400 gaming:hover:bg-green-300 text-white gaming:text-black p-4 rounded-full shadow-lg transition-all duration-300 z-50 gaming:shadow-green-400/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: "easeInOut"
        }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 gaming:bg-black gaming:border gaming:border-green-400 rounded-lg shadow-2xl z-50 flex flex-col gaming:shadow-green-400/20"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-green-500 gaming:bg-green-400 text-white gaming:text-black p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white gaming:bg-black rounded-full flex items-center justify-center">
                  <MessageCircle size={16} className="text-green-500 gaming:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold">DualServe Support</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white gaming:text-black hover:bg-green-600 gaming:hover:bg-green-300 p-1 rounded"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-green-500 gaming:bg-green-400 text-white gaming:text-black'
                      : 'bg-gray-100 dark:bg-gray-700 gaming:bg-gray-900 gaming:border gaming:border-green-400/30 text-gray-800 dark:text-white gaming:text-green-300'
                  }`}>
                    <div className="flex items-center space-x-2 mb-1">
                      {message.sender === 'bot' ? (
                        <Bot size={14} className="gaming:text-green-400" />
                      ) : (
                        <User size={14} />
                      )}
                      <span className="text-xs opacity-75">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="p-2 border-t dark:border-gray-600 gaming:border-green-400/30">
              <div className="flex flex-wrap gap-1 mb-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSendMessage(reply)}
                    className="text-xs bg-gray-100 dark:bg-gray-700 gaming:bg-gray-900 gaming:border gaming:border-green-400/30 hover:bg-gray-200 dark:hover:bg-gray-600 gaming:hover:bg-gray-800 text-gray-700 dark:text-gray-300 gaming:text-green-400 px-2 py-1 rounded transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t dark:border-gray-600 gaming:border-green-400/30">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && inputMessage.trim() && handleSendMessage(inputMessage)}
                  placeholder="Type a message..."
                  className="flex-1 p-2 border dark:border-gray-600 gaming:border-green-400/30 rounded-lg bg-white dark:bg-gray-700 gaming:bg-gray-900 text-gray-900 dark:text-white gaming:text-green-300 text-sm focus:outline-none focus:border-green-500 gaming:focus:border-green-400"
                />
                <button
                  onClick={() => inputMessage.trim() && handleSendMessage(inputMessage)}
                  className="bg-green-500 gaming:bg-green-400 hover:bg-green-600 gaming:hover:bg-green-300 text-white gaming:text-black p-2 rounded-lg transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
              
              <button
                onClick={() => handleWhatsAppRedirect()}
                className="w-full mt-2 bg-green-600 gaming:bg-green-500 hover:bg-green-700 gaming:hover:bg-green-400 text-white gaming:text-black py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
              >
                Continue on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;