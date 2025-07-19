import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CartProvider } from './components/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { MotionProvider } from './components/MotionProvider';
import ParticleBackground from './components/ParticleBackground';
import AnimationToggle from './components/AnimationToggle';
import ThemeToggle from './components/ThemeToggle';
import WhatsAppChat from './components/WhatsAppChat';
import HomePage from './pages/HomePage';
import AssignmentServices from './pages/AssignmentServices';
import CreativeServices from './pages/CreativeServices';
import CreativePortfolio from './pages/CreativePortfolio';
import BusinessDocumentary from './pages/BusinessDocumentary';
import PromotionalVideo from './pages/PromotionalVideo';
import LogoAnimations from './pages/LogoAnimations';
import MotionBrochures from './pages/MotionBrochures';
import ArtShop from './pages/ArtShop';
import Paintings from './pages/Paintings';
import Portraits from './pages/Portraits';
import PaperCrafts from './pages/PaperCrafts';
import WoodenCrafts from './pages/WoodenCrafts';
import ResinKeychains from './pages/ResinKeychains';
import FlowerBouquets from './pages/FlowerBouquets';
import RealisticPortraits from './pages/RealisticPortraits';
import StylizedPortraits from './pages/StylizedPortraits';
import TraditionalMedia from './pages/TraditionalMedia';
import DigitalPortraits from './pages/DigitalPortraits';
import Contact from './pages/Contact';
import LoginPortalSubmission from './pages/LoginPortalSubmission';
import ManualSubmission from './pages/ManualSubmission';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import FeedbackForm from './pages/FeedbackForm';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <MotionProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen bg-white dark:bg-gray-900 gaming:bg-black text-gray-900 dark:text-white gaming:text-green-300 relative overflow-x-hidden transition-colors duration-300">
              <ParticleBackground />
              <Header />
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/assignments" element={<AssignmentServices />} />
                  <Route path="/creative" element={<CreativeServices />} />
                  <Route path="/creative/portfolio" element={<CreativePortfolio />} />
                  <Route path="/creative/business-documentary" element={<BusinessDocumentary />} />
                  <Route path="/creative/promotional-video" element={<PromotionalVideo />} />
                  <Route path="/creative/logo-animations" element={<LogoAnimations />} />
                  <Route path="/creative/motion-brochures" element={<MotionBrochures />} />
                  <Route path="/art-shop" element={<ArtShop />} />
                  <Route path="/art-shop/paintings" element={<Paintings />} />
                  <Route path="/art-shop/portraits" element={<Portraits />} />
                  <Route path="/art-shop/paper-crafts" element={<PaperCrafts />} />
                  <Route path="/art-shop/wooden-crafts" element={<WoodenCrafts />} />
                  <Route path="/art-shop/resin-keychains" element={<ResinKeychains />} />
                  <Route path="/art-shop/flower-bouquets" element={<FlowerBouquets />} />
                  <Route path="/portraits/realistic" element={<RealisticPortraits />} />
                  <Route path="/portraits/stylized" element={<StylizedPortraits />} />
                  <Route path="/portraits/traditional" element={<TraditionalMedia />} />
                  <Route path="/portraits/digital" element={<DigitalPortraits />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login-portal-submission" element={<LoginPortalSubmission />} />
                  <Route path="/manual-submission" element={<ManualSubmission />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/feedback" element={<FeedbackForm />} />
                </Routes>
              </AnimatePresence>
              <Footer />
              <AnimationToggle />
              <ThemeToggle />
              <WhatsAppChat />
            </div>
          </Router>
        </CartProvider>
      </MotionProvider>
    </ThemeProvider>
  );
}

export default App;