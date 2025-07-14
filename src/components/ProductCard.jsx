import { motion } from 'framer-motion';

function ProductCard({ name, originalPrice, discountedPrice, image, affiliateLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-6 bg-white bg-opacity-90 glass rounded-lg shadow-lg"
    >
      <img src={image} alt={name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold text-beauty-dark mb-2">{name}</h3>
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-gray-500 line-through">₹{originalPrice}</span>
        <span className="text-beauty-pink font-bold text-lg">₹{discountedPrice}</span>
      </div>
      <a
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="buy-button"
      >
        Buy Now on Amazon
      </a>
    </motion.div>
  );
}

export default ProductCard;