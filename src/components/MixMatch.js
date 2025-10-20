import React, { useState, useEffect } from 'react';
import { productsApi } from '../services/products';
import '../styles/Home.css';

const MixMatch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMixMatchProducts = async () => {
      try {
        setLoading(true);
        // Try to fetch products by 'mix-match' category, fallback to general products
        let data;
        try {
          data = await productsApi.fetchProductsByCategory('mix-match');
        } catch (error) {
          // If category doesn't exist, fetch general products
          data = await productsApi.fetchProducts();
        }
        setProducts(data.slice(0, 4)); // Limit to 4 products for display
      } catch (error) {
        console.error('Error fetching mix-match products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMixMatchProducts();
  }, []);

  if (loading) {
    return (
      <section className="mix-match">
        <h2>MIX & MATCH</h2>
        <p>THOẢ SỨC SÁNG TẠO VỚI VÔ SỐ SỰ KẾT HỢP TỪ MÓN ĐỒ BẠN THÍCH.</p>
        <div className="mix-images">
          <div className="loading">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="mix-match">
      <h2>MIX & MATCH</h2>
      <p>THOẢ SỨC SÁNG TẠO VỚI VÔ SỐ SỰ KẾT HỢP TỪ MÓN ĐỒ BẠN THÍCH.</p>
      <div className="mix-images">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <div key={product.id || index} className="mix-img">
              {product.images && product.images.length > 0 ? (
                <img src={product.images[0].url} alt={product.name || ''} />
              ) : (
                <div className="placeholder-img"></div>
              )}
            </div>
          ))
        ) : (
          // Fallback to static images if no products
          <>
            <div className="mix-img"></div>
            <div className="mix-img"></div>
            <div className="mix-img"></div>
            <div className="mix-img"></div>
          </>
        )}
      </div>
    </section>
  );
};

export default MixMatch;
