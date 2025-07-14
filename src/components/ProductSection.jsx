import { motion } from 'framer-motion';
import ProductCard from './ProductCard.jsx';
import './ProductSection.css';

function ProductSection({ category, products }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id={category.toLowerCase()}
      className="product-section"
    >
      <div className="container mx-auto px-4">
        <h2 className="product-title">{category} Products</h2>
        <div className="product-shelf">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProductSection;