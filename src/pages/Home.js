import React from 'react';
import { useContext, useState, useRef, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import Banner from '../components/Banner';
import ProductFilter from '../components/ProductFilter';
import CartContext from '../context/CartContext';
import useProductFilter from '../hooks/useProductFilter';

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

      {/* Featured Products Section */}
      <main className="flex-1 container mx-auto px-4 py-20">
        {/* Benefits Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-2">
            <img src="/icons/click_pick.svg" alt="Click & Pick" className="w-12 h-12" />
            <h3 className="font-semibold text-sm">CLICK & PICK</h3>
            <p className="text-xs text-gray-600">MUA ONLINE, LẤY TẠI CỬA HÀNG</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <img src="/icons/warranty.svg" alt="Warranty" className="w-12 h-12" />
            <h3 className="font-semibold text-sm">BẢO HÀNH DÂY KÉO TRỌN ĐỜI</h3>
            <p className="text-xs text-gray-600">THAY DÂY KÉO ÁO KHOÁC MIỄN PHÍ</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <img src="/icons/return.svg" alt="Return" className="w-12 h-12" />
            <h3 className="font-semibold text-sm">ĐỔI HÀNG TRONG 30 NGÀY</h3>
            <p className="text-xs text-gray-600">ÁP DỤNG VỚI CÁC SẢN PHẨM NGUYÊN GIÁ</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <img src="/icons/delivery.svg" alt="Delivery" className="w-12 h-12" />
            <h3 className="font-semibold text-sm">GIAO HÀNG HỎA TỐC 2H</h3>
            <p className="text-xs text-gray-600">ÁP DỤNG VỚI ĐƠN HÀNG NỘI THÀNH</p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Filter Panel */}
          <aside className="hidden md:block bg-white p-6 rounded-lg shadow-md sticky top-20 h-fit">
            <ProductFilter filters={filters} updateFilters={updateFilters} clearFilters={clearFilters} metadata={metadata} />
          </aside>

          {/* Product List */}
          <section className="md:col-span-3">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-sans font-bold mb-4 text-orange-800">Featured Collection</h2>
              <p className="text-orange-600 max-w-2xl mx-auto">
                Curated pieces that blend modern aesthetics with timeless elegance
              </p>
            </div>
            <ProductList products={products} addToCart={addToCart} />
          </section>
        </section>

        {/* Brand Story Section */}
        <section className="max-w-6xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-sans font-bold mb-6 text-orange-800">Our Story</h2>
              <p className="text-orange-600 mb-6 leading-relaxed">
                Founded on the principles of modern design and exceptional craftsmanship, 
                we bring you contemporary fashion that stands the test of time. Each piece 
                is thoughtfully designed to blend sophistication with modern aesthetics.
              </p>
              <p className="text-orange-600 leading-relaxed">
                Our commitment to quality extends from our products to every aspect of 
                your shopping experience, ensuring modern luxury at every touchpoint.
              </p>
            </div>
            <div className="bg-orange-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-orange-400">Modern Brand Image</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
