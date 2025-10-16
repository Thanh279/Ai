import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart, title }) => (
  <div className="mb-12">
    {title && (
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 relative inline-block">
          {title}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500"></span>
        </h2>
      </div>
    )}
    
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
    
    {products.length > 8 && (
      <div className="text-center mt-8">
        <button className="border border-pink-500 text-pink-500 px-6 py-2 text-sm font-medium hover:bg-pink-50 transition-colors">
          XEM THÊM
        </button>
      </div>
    )}
  </div>
);

export default ProductList;