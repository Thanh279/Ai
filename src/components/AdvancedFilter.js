import React, { useState } from 'react';

const AdvancedFilter = ({ categories, sizes, colors, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleFilterChange = () => {
    onFilterChange({
      category: selectedCategory,
      size: selectedSize,
      color: selectedColor,
    });
  };

  return (
    <div className="space-y-4 p-4 border rounded bg-white">
      <div>
        <label className="block font-semibold mb-1">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            handleFilterChange();
          }}
          className="w-full p-2 border rounded"
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold mb-1">Size</label>
        <select
          value={selectedSize}
          onChange={(e) => {
            setSelectedSize(e.target.value);
            handleFilterChange();
          }}
          className="w-full p-2 border rounded"
        >
          <option value="">All</option>
          {sizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold mb-1">Color</label>
        <select
          value={selectedColor}
          onChange={(e) => {
            setSelectedColor(e.target.value);
            handleFilterChange();
          }}
          className="w-full p-2 border rounded"
        >
          <option value="">All</option>
          {colors.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AdvancedFilter;
