import React, { useState, useEffect } from 'react';
import { bannersApi } from '../services/banners';
import '../styles/Home.css';

const AdditionalBanners = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setLoading(true);
        const data = await bannersApi.fetchActiveBannersByType('additional');
        setBanners(data);
      } catch (error) {
        console.error('Error fetching additional banners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  if (loading) {
    return (
      <section className="banner-section">
        <div className="loading">Loading...</div>
      </section>
    );
  }

  // If no banners, show default content
  if (!banners || banners.length === 0) {
    return (
      <section className="banner-section">
        <div className="banner-left">
          <h2>ÁO POLO CAO CẤP →</h2>
          <div className="product-img"></div>
        </div>
        <div className="banner-right">
          <h2>ÁO KHOÁC THỜI TRANG →</h2>
          <div className="product-img"></div>
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
