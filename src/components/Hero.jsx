import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero"
    >
      <img
        src="/assets/hero-bg.jpg" // Replace with your hero background image
        alt="Hero Background"
        className="hero-bg"
      />
      <div className="hero-overlay"></div>
      <motion.img
        src="/assets/logo.png" // Replace with your BalBal logo
        alt="BalBal Logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="hero-logo"
      />
    </motion.div>
  );
}

export default Hero;