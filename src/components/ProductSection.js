import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { productsApi } from '../services/products';
import '../styles/Home.css';

const ProductSection = ({ title, category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productsApi.fetchProductsByCategory(category);
        // Fetch images and stock information for each product
        const productsWithImagesAndStock = await Promise.all(
          data.slice(0, 4).map(async (product) => {
            try {
              // Fetch product images
              const images = await productsApi.fetchProductImages(product.id);
              // Fetch stock information
              const stockData = await productsApi.fetchProductStock(product.id);
              return {
                ...product,
                images: images || [],
                stockQuantity: stockData.quantity || 0
              };
            } catch (err) {
              console.warn(`Failed to fetch additional data for product ${product.id}:`, err);
              return {
                ...product,
                images: product.images || [],
                stockQuantity: 0
              };
            }
          })
        );
        setProducts(productsWithImagesAndStock);
      } catch (err) {
        setError(`Failed to load ${title.toLowerCase()}`);
        console.error(`Error fetching ${title.toLowerCase()}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [title, category]);

  if (loading) {
    return (
      <section className="best-sellers">
        <div className="section-title">{title}</div>
        <div className="text-center py-8">Loading {title.toLowerCase()}...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="best-sellers">
        <div className="section-title">{title}</div>
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
        {title}
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
            <div className="product-img">
              {product.images && product.images.length > 0 ? (
                <img src={product.images[0]} alt={product.name} />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#999' }}>
                  No Image
                </div>
              )}
            </div>
            <div className="product-info">
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
                className="product-add-to-cart"
                disabled={product.stockQuantity <= 0}
              >
                {product.stockQuantity > 0 ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
