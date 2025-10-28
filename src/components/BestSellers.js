import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { productsApi } from '../services/products';
import { toast } from 'react-toastify';
import '../styles/Home.css';

const BestSellers = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const data = await productsApi.fetchProductsWithImages();
        setProducts(data.slice(0, 4)); // Limit to 4 products
      } catch (err) {
        // If products with images endpoint fails, fallback to regular products
        console.warn('Products with images endpoint failed, falling back to regular products:', err);
        try {
          const fallbackData = await productsApi.fetchProducts();
          setProducts(fallbackData.slice(0, 4));
        } catch (fallbackErr) {
          setError('Failed to load products');
          console.error('Error fetching fallback products:', fallbackErr);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  if (loading) {
    return (
      <section className="best-sellers">
        <div className="section-title">BÁN CHẠY NHẤT</div>
        <div className="text-center py-8">Loading best sellers...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="best-sellers">
        <div className="section-title">BÁN CHẠY NHẤT</div>
        <div className="text-center py-8 text-red-600">{error}</div>
      </section>
    );
  }

  return (
    <section className="best-sellers">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        BÁN CHẠY NHẤT <Link
          to="/all-products"
          className="block font-medium text-gray-800 hover:text-pink-500"
        >
          XEM TẤT CẢ
        </Link>
      </motion.div>
      <div className="product-grid">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="product-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="product-new-arrival">New Arrival</div>
            <div className="product-img">
              {product.images && product.images.length > 0 ? (
                <img src={product.images[0].url} alt={product.name} />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#999' }}>
                  No Image
                </div>
              )}
            </div>
            <div className="product-info flex flex-col">
              <h3 className="product-name">{product.name}</h3>

              {/* Colors */}
              <div className="product-colors">
                {product.colors && product.colors.length > 0 ? (
                  product.colors.slice(0, 3).map((color, idx) => (
                    <span key={idx} className="color-chip">{color.name}</span>
                  ))
                ) : (
                  <span className="color-chip">No colors</span>
                )}
              </div>

              {/* Price */}
              <div className="product-price">
                {product.salePrice || product.price ? `${(product.salePrice || product.price).toLocaleString('vi-VN')} VND` : '0 VND'}
                {product.salePrice && product.price && product.price !== product.salePrice && (
                  <span className="product-price-original">{product.price.toLocaleString('vi-VN')} VND</span>
                )}
              </div>

              {/* SKU */}
              <div className="product-sku">SKU: {product.sku || 'N/A'}</div>

              {/* Description */}
              <div className="product-description">
                {product.shortDescription || 'Short description will appear here.'}
              </div>

              {/* Tags */}
              <div className="product-tags">
                {product.brand && <span className="tag-chip tag-brand">{product.brand.name}</span>}
                {product.category && <span className="tag-chip tag-category">{product.category.name}</span>}
                {product.gender && <span className="tag-chip tag-gender">{product.gender}</span>}
              </div>

              {/* Add to Cart Button */}
              <button
                className="product-add-to-cart mt-auto"
                disabled={!product.onSale}
                onClick={() => {
                  if (product.onSale) {
                    addToCart(product);
                    toast.success(`${product.name} đã được thêm vào giỏ hàng!`);
                  }
                }}
              >
                {product.onSale ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
