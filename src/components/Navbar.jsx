import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src="/assets/logo.png" alt="BalBal Logo" className="navbar-logo" />
        <div className="nav-links">
          <Link to="/hair" className="nav-link">Hair</Link>
          <Link to="/skin" className="nav-link">Skin</Link>
          <Link to="/body" className="nav-link">Body</Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;