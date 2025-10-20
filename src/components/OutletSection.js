import React, { useEffect, useState } from 'react';
import { productsApi }from '../services/products';
import '../styles/Home.css';

const OutletSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOutletProducts = async () => {
      try {
        const data = await productsApi.fetchOutletProducts();
        setProducts(data.slice(0, 3)); // Limit to 3 products
      } catch (err) {
        setError('Failed to load outlet products');
        console.error('Error fetching outlet products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOutletProducts();
  }, []);

  if (loading) {
    return (
      <section className="outlet-section">
        <div className="outlet-banner">
          <h1>OUTLET UP TO 50%</h1>
        </div>
        <div className="text-center py-8">Loading outlet products...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="outlet-section">
        <div className="outlet-banner">
          <h1>OUTLET UP TO 50%</h1>
        </div>
        <div className="text-center py-8 text-red-600">{error}</div>
      </section>
    );
  }

  return (
    <section className="outlet-section">
      <div className="outlet-banner">
        <h1>OUTLET UP TO 50%</h1>
      </div>
      <div className="outlet-products">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-img"></div>
            <p>{product.name}</p>
            <p className="product-price">{product.price} VND <span>-{product.discount}%</span></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OutletSection;
