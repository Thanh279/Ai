import React, { useEffect, useState } from 'react';
import categoriesApi from '../services/categories';

const Header = () => {
  const [categories, setCategories] = useState([]);

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
    <header>
      {/* Top bar */}
      <div className="bg-black text-white text-sm py-1 flex justify-center space-x-8">
        <span>TRONG VÒNG 2H</span>
        <span>FREESHIP ĐƠN HÀNG TỪ 499K</span>
        <span>GIAO HỎA TỐC TRONG VÒNG 2H</span>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md relative">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Left: Logo and categories */}
          <div className="flex items-center space-x-8 relative group">
            <a href="/" className="text-2xl font-bold tracking-widest text-black">
              COUPLE TX
            </a>
            <div className="hidden md:flex space-x-6 font-semibold text-black relative items-center">
              {categories.map((category) => (
                <div key={category.id} className="relative">
                  <a
                    href={`/category/${category.id}`}
                    className="hover:text-orange-600 cursor-pointer flex items-center h-full"
                  >
                    {category.name.toUpperCase()}
                  </a>
                  {/* Dropdown menu */}
                  {category.children && category.children.length > 0 && (
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 hover:opacity-100 invisible hover:visible transition-opacity z-50">
                      <div className="p-4 grid grid-cols-1 gap-2">
                        {category.children.map((child) => (
                          <a
                            key={child.id}
                            href={`/category/${child.id}`}
                            className="block text-gray-700 hover:text-orange-600"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Search input, user and cart icons */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="TÌM KIẾM..."
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button aria-label="User account" className="focus:outline-none">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <button aria-label="Shopping cart" className="focus:outline-none relative">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                <circle cx="7" cy="21" r="1" />
                <circle cx="17" cy="21" r="1" />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">0</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
