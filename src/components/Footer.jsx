import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="footer"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="footer-contact">
          Contact us: <a href="mailto:support@balbal.netlify.app" className="footer-link">support@balbal.netlify.app</a>
        </p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/balbalbeauty" className="footer-link">Instagram</a>
          <a href="https://www.facebook.com/balbalbeauty" className="footer-link">Facebook</a>
        </div>
        <p className="footer-copyright">© 2025 BalBal. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;