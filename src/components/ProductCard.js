import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  // Get the first image URL from the images array, or use a placeholder if no images
  const imageUrl = product.images && product.images.length > 0
    ? product.images[0].url
    : '/images/placeholder-product.jpg';

  // Extract colors from product or use defaults
  const colors = product.colors || ['#000000', '#FFFFFF', '#FF0000', '#0000FF'];

  // Calculate discount percentage if there's an original price
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white relative group">
      {/* Discount badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">
          -{discountPercentage}%
        </div>
      )}

      {/* Product image with hover effect */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Product details */}
      <div className="p-3">
        {/* Color options */}
        <div className="flex space-x-1 mb-2">
          {colors.map((color, index) => (
            <button
              key={index}
              className="w-4 h-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
              style={{ backgroundColor: color }}
              aria-label={`Color option ${index + 1}`}
            />
          ))}
        </div>

        {/* Product name */}
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-sm font-medium text-gray-800 hover:text-pink-500 mb-1">{product.name}</h3>
        </Link>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold text-pink-500">{product.price.toLocaleString('vi-VN')}₫</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-500 line-through">{product.originalPrice.toLocaleString('vi-VN')}₫</span>
          )}
        </div>

        {/* Buy button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-3 bg-pink-500 text-white text-sm font-medium py-2 hover:bg-pink-600 transition-colors"
        >
          MUA NGAY
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
