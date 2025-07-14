import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductSection from './components/ProductSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const products = {
    hair: [
      {
        name: "Shampoo",
        originalPrice: 599,
        discountedPrice: 499,
        image: "/assets/hair-product1.jpg", // Replace with your hair product image
        affiliateLink: "https://www.amazon.com/your-affiliate-link-1", // Replace with your Amazon affiliate link
      },
      {
        name: "Conditioner",
        originalPrice: 699,
        discountedPrice: 599,
        image: "/assets/hair-product2.jpg", // Replace with your hair product image
        affiliateLink: "https://www.amazon.com/your-affiliate-link-2", // Replace with your Amazon affiliate link
      },
    ],
    skin: [
      {
        name: "Face Cream",
        originalPrice: 799,
        discountedPrice: 649,
        image: "/assets/skin-product1.jpg", // Replace with your skin product image
        affiliateLink: "https://www.amazon.com/your-affiliate-link-3", // Replace with your Amazon affiliate link
      },
      {
        name: "Cleanser",
        originalPrice: 499,
        discountedPrice: 399,
        image: "/assets/skin-product2.jpg", // Replace with your skin product image
        affiliateLink: "https://www.amazon.com/your-affiliate-link-4", // Replace with your Amazon affiliate link
      },
    ],
    body: [
      {
        name: "Body Lotion",
        originalPrice: 899,
        discountedPrice: 749,
        image: "/assets/body-product1.jpg", // Replace with your body product image
        affiliateLink: "https://www.amazon.com/your-affiliate-link-5", // Replace with your Amazon affiliate link
      },
      {
        name: "Body Wash",
        originalPrice: 599,
        discountedPrice: 499,
        image: "/assets/body-product2.jpg", // Replace with your body product image
        affiliateLink: "https://www.amazon.com/your-affiliate-link-6", // Replace with your Amazon affiliate link
      },
    ],
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProductSection category="Hair" products={products.hair} />
              <ProductSection category="Skin" products={products.skin} />
              <ProductSection category="Body" products={products.body} />
              <Footer />
            </>
          }
        />
        <Route path="/hair" element={<><ProductSection category="Hair" products={products.hair} /><Footer /></>} />
        <Route path="/skin" element={<><ProductSection category="Skin" products={products.skin} /><Footer /></>} />
        <Route path="/body" element={<><ProductSection category="Body" products={products.body} /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;