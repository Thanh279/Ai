import React, { useEffect, useState } from 'react';
import { productsApi } from '../services/products';
import '../styles/Home.css';

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const data = await productsApi.fetchBestSellers();
        setProducts(data.slice(0, 4)); // Limit to 4 products
      } catch (err) {
        // If best-sellers endpoint fails, fallback to regular products
        console.warn('Best sellers endpoint failed, falling back to regular products:', err);
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
      <div className="section-title">BÁN CHẠY NHẤT <span>XEM TẤT CẢ →</span></div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div>New Arrival</div>
            <div className="product-img"></div>
            <p>{product.name}</p>
            <p className="product-price">{product.price} VND</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
