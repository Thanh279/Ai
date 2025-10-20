import React from 'react';
import { useContext, useState, useRef, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Categories from '../components/Categories';
import BannerSection from '../components/BannerSection';
import BestSellers from '../components/BestSellers';
import AdditionalBanners from '../components/AdditionalBanners';
import OutletSection from '../components/OutletSection';
import ProductSection from '../components/ProductSection';
import MixMatch from '../components/MixMatch';
import AppDownload from '../components/AppDownload';
import CartContext from '../context/CartContext';
import useProductFilter from '../hooks/useProductFilter';
import '../styles/Home.css';
import '../styles/Global.css';

const Home = () => {
  const { products, loading, error, filters, updateFilters, clearFilters, metadata } = useProductFilter();
  const { addToCart } = useContext(CartContext);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const dragStartY = useRef(0);
  const containerRef = useRef(null);

  const handleDragStart = useCallback((clientY) => {
    setIsDragging(true);
    dragStartY.current = clientY;
    setDragDistance(0);
  }, []);

  const handleDragMove = useCallback((clientY) => {
    if (!isDragging) return;
    
    const distance = clientY - dragStartY.current;
    setDragDistance(distance);
    
    // Add visual feedback based on drag direction
    if (containerRef.current) {
      const opacity = Math.min(0.3, Math.abs(distance) / 100);
      const scale = 1 - Math.min(0.05, Math.abs(distance) / 200);
      containerRef.current.style.opacity = (1 - opacity).toString();
      containerRef.current.style.transform = `scale(${scale})`;
    }
  }, [isDragging]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Reset styles with smooth transition
    if (containerRef.current) {
      containerRef.current.style.transition = 'all 0.3s ease';
      containerRef.current.style.opacity = '1';
      containerRef.current.style.transform = 'scale(1)';
      
      // Remove transition after animation completes
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = '';
        }
      }, 300);
    }
    
    setDragDistance(0);
  }, [isDragging]);

  // Touch event handlers
  const handleTouchStart = useCallback((e) => {
    handleDragStart(e.touches[0].clientY);
  }, [handleDragStart]);

  const handleTouchMove = useCallback((e) => {
    handleDragMove(e.touches[0].clientY);
  }, [handleDragMove]);

  const handleTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Mouse event handlers
  const handleMouseDown = useCallback((e) => {
    handleDragStart(e.clientY);
  }, [handleDragStart]);

  const handleMouseMove = useCallback((e) => {
    handleDragMove(e.clientY);
  }, [handleDragMove]);

  const handleMouseUp = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Add event listeners
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Touch events
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);
    
    // Mouse events
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown, handleMouseMove, handleMouseUp]);

  if (loading) {
    return (
      <div 
        ref={containerRef}
        className="min-h-screen flex flex-col transition-transform duration-200 ease-out cursor-grab active:cursor-grabbing"
      >
        <Header />
        <main className="container mx-auto py-8 flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto mb-4"></div>
            <p className="text-orange-600">Loading our modern collection...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div 
        ref={containerRef}
        className="min-h-screen flex flex-col transition-transform duration-200 ease-out cursor-grab active:cursor-grabbing"
      >
        <Header />
        <main className="container mx-auto py-8 flex-1 flex items-center justify-center">
          <div className="text-center text-red-600">
            <p>Error: {error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex flex-col transition-transform duration-200 ease-out cursor-grab active:cursor-grabbing"
    >
      <Header />
      
      {/* Hero Section */}
      <Banner type="main" />

      {/* Services */}
      <Services />

      {/* Categories */}
      <Categories />

      {/* Banner Section */}
      <BannerSection />

      {/* Best Sellers */}
      <BestSellers />

      {/* Additional Banners */}
      <AdditionalBanners />

      {/* Outlet */}
      <OutletSection />

      {/* Ao Thun Section */}
      <ProductSection title="ÁO THUN" category="t-shirt" />

      {/* Quan Shorts Section */}
      <ProductSection title="QUẦN SHORTS" category="shorts" />

      {/* Mix & Match */}
      <MixMatch />

      {/* App Download */}
      <AppDownload />

      <Footer />
    </div>
  );
};

export default Home;
