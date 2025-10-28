import React, { useState, useEffect } from 'react';
import { bannersApi } from '../services/banners';
import { productsApi } from '../services/products';
import '../styles/Home.css';

const AdditionalBanners = () => {
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch banners
        const bannerData = await bannersApi.fetchActiveBannersByType('additional');

        // Fetch featured products for dynamic content
        const productData = await productsApi.fetchProducts();

        setBanners(bannerData);
        setProducts(productData.slice(0, 2)); // Get first 2 products for banners
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="banner-section">
        <div className="loading">Loading...</div>
      </section>
    );
  }

  // If no banners, show dynamic content from products
  if (!banners || banners.length === 0) {
    const leftProduct = products[0];
    const rightProduct = products[1];

    return (
      <section className="banner-section">
        <div className="banner-left">
          <h2>{leftProduct ? `${leftProduct.name} →` : 'ÁO POLO CAO CẤP →'}</h2>
          {leftProduct && leftProduct.images && leftProduct.images.length > 0 ? (
            <img src={leftProduct.images[0]} alt={leftProduct.name} className="product-img" />
          ) : (
            <div className="product-img"></div>
          )}
        </div>
        <div className="banner-right">
          <h2>{rightProduct ? `${rightProduct.name} →` : 'ÁO KHOÁC THỜI TRANG →'}</h2>
          {rightProduct && rightProduct.images && rightProduct.images.length > 0 ? (
            <img src={rightProduct.images[0]} alt={rightProduct.name} className="product-img" />
          ) : (
            <div className="product-img"></div>
          )}
        </div>
      </section>
    );
  }

  // Use first banner for left section, second for right if available
  const leftBanner = banners[0];
  const rightBanner = banners[1];

  return (
    <section className="banner-section">
      <div className="banner-left">
        <h2>{leftBanner.title || 'ÁO POLO CAO CẤP'} →</h2>
        {leftBanner.images && leftBanner.images.length > 0 ? (
          <img src={leftBanner.images[0].url} alt={leftBanner.images[0].altText || ''} className="product-img" />
        ) : (
          <div className="product-img"></div>
        )}
      </div>
      {rightBanner && (
        <div className="banner-right">
          <h2>{rightBanner.title || 'ÁO KHOÁC THỜI TRANG'} →</h2>
          {rightBanner.images && rightBanner.images.length > 0 ? (
            <img src={rightBanner.images[0].url} alt={rightBanner.images[0].altText || ''} className="product-img" />
          ) : (
            <div className="product-img"></div>
          )}
        </div>
      )}
    </section>
  );
};

export default AdditionalBanners;
