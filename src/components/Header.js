import React, { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white border-b border-gray-700">
      {/* Top bar */}
      <div className="bg-gray-900 text-gray-400 text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span>Free shipping on orders over $200</span>
          <div className="flex space-x-4">
            <span>Customer Service: +1 (888) 888-8888</span>
            <span>|</span>
            <span>EN</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-3xl font-serif font-light tracking-wider">
            ÉLÉGANCE
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="/" className="hover:text-gray-300 transition-colors duration-200">Home</a>
            <a href="/products" className="hover:text-gray-300 transition-colors duration-200">Collection</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">New Arrivals</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">About</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Contact</a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <button className="hover:text-gray-300 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* User */}
            {user ? (
              <button onClick={() => setUser(null)} className="hover:text-gray-300 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            ) : (
              <a href="/login" className="hover:text-gray-300 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </a>
            )}

            {/* Cart */}
            <a href="/cart" className="relative hover:text-gray-300 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h9M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </a>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="/" className="hover:text-gray-300 transition-colors duration-200">Home</a>
              <a href="/products" className="hover:text-gray-300 transition-colors duration-200">Collection</a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-200">New Arrivals</a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-200">About</a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-200">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
