import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { categoriesApi } from '../services/categories';

const Header = () => {
  const { cart } = useContext(CartContext);
  const [categories, setCategories] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoriesApi.fetchNestedCategories();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch nested categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="top-bar bg-black text-white text-xs py-1 flex justify-center space-x-4 md:space-x-8 overflow-x-auto whitespace-nowrap px-2">
        <span>FREESHIP ĐƠN HÀNG TỪ 499K</span>
        <span>GIAO HỎA TỐC TRONG VÒNG 2H</span>
        <span>ĐỔI TRẢ MIỄN PHÍ 30 NGÀY</span>
      </div>

      {/* Promotional banner */}
      {/* <div className="bg-pink-500 text-white text-center py-2 px-4">
        <h2 className="text-lg md:text-xl font-bold">VIETNAM WOMAN'S DAY 20.10</h2>
        <p className="text-sm">Ưu đãi lên đến 50% cho tất cả sản phẩm</p>
      </div> */}

      {/* Main navigation */}
      <nav className="bg-white shadow-md relative">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-widest text-black">
            COUPLE TX
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 font-medium text-black relative items-center">

            {categories.map((category) => (
              <div key={category.id} className="relative group">
                <Link
                  to={`/category/${category.id}`}
                  className="hover:text-pink-500 cursor-pointer flex items-center h-full py-2"
                >
                  {category.name.toUpperCase()}
                </Link>
                {/* Dropdown menu */}
                {category.children && category.children.length > 0 && (
                  <div className="absolute left-0 top-full mt-0 w-48 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-3 grid grid-cols-1 gap-1">
                      {category.children.map((child) => (
                        <Link
                          key={child.id}
                          to={`/category/${child.id}`}
                          className="block text-sm text-gray-700 hover:text-pink-500 py-1"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Search input, user and cart icons */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="TÌM KIẾM..."
                className="border border-gray-300 rounded-sm px-3 py-1 text-sm focus:outline-none focus:border-pink-500 w-40"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <Link to="/login" aria-label="User account" className="focus:outline-none">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link to="/cart" aria-label="Shopping cart" className="focus:outline-none relative">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-pink-500 rounded-full">{Object.values(cart).reduce((sum, item) => sum + item.quantity, 0)}</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-2 px-4">
            <div className="flex flex-col space-y-2">
              <div className="py-2 border-b border-gray-100">

              </div>
              {categories.map((category) => (
                <div key={category.id} className="py-2 border-b border-gray-100">
                  <Link
                    to={`/category/${category.id}`}
                    className="block font-medium text-gray-800 hover:text-pink-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name.toUpperCase()}
                  </Link>
                  {category.children && category.children.length > 0 && (
                    <div className="mt-1 ml-4 grid grid-cols-1 gap-1">
                      {category.children.map((child) => (
                        <Link
                          key={child.id}
                          to={`/category/${child.id}`}
                          className="block text-sm text-gray-600 hover:text-pink-500 py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="relative py-2">
                <input
                  type="text"
                  placeholder="TÌM KIẾM..."
                  className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-pink-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>



    </header>
  );
};

export default Header;
