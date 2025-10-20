import React, { useState, useEffect } from 'react';
import { bannersApi } from '../services/banners';
import '../styles/Home.css';

const BannerSection = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setLoading(true);
        const data = await bannersApi.fetchActiveBannersByType('banner-section');
        setBanners(data);
      } catch (error) {
        console.error('Error fetching banner section:', error);
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
          <h2>ÁO KHOÁC CÔNG NGHỆ TRƯỢT NƯỚC</h2>
          <img src="https://cdn.hstatic.net/files/1000184601/file/banner_new_arrivals.png" alt="" />
          <p>SIÊU NHẸ</p>
        </div>
        <div className="banner-right">
          <h2>NEW ARRIVAL</h2>
          <span>→</span>
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
        <h2>{leftBanner.title || 'ÁO KHOÁC CÔNG NGHỆ TRƯỢT NƯỚC'}</h2>
        {leftBanner.images && leftBanner.images.length > 0 && (
          <img src={leftBanner.images[0].url} alt={leftBanner.images[0].altText || ''} />
        )}
        <p>{leftBanner.description || 'SIÊU NHẸ'}</p>
      </div>
      {rightBanner && (
        <div className="banner-right">
          <h2>{rightBanner.title || 'NEW ARRIVAL'}</h2>
          <span>→</span>
        </div>
      )}
    </section>
  );
};

export default BannerSection;
