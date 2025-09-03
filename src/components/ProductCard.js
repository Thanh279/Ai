import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  // Get the first image URL from the images array, or use a placeholder if no images
  const imageUrl = product.images && product.images.length > 0 
    ? product.images[0].url 
    : '/images/placeholder-product.jpg';

  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <img src={imageUrl} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
