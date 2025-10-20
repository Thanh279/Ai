import React, { useEffect, useState } from 'react';
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
        setProducts(data.slice(0, 4)); // Limit to 4 products
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
      <div className="section-title">{title}</div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-img"></div>
            <p>{product.name}</p>
            <p className="product-price">{product.price} VND</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
