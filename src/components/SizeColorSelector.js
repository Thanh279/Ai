import React, { useState } from 'react';

const SizeColorSelector = ({ sizes, colors, onSelectSize, onSelectColor }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    onSelectSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    onSelectColor(e.target.value);
  };

  return (
    <div className="flex space-x-4">
      <div>
        <label htmlFor="size-select" className="block font-semibold mb-1">Size</label>
        <select
          id="size-select"
          value={selectedSize}
          onChange={handleSizeChange}
          className="border rounded p-2"
        >
          <option value="">Select size</option>
          {sizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="color-select" className="block font-semibold mb-1">Color</label>
        <select
          id="color-select"
          value={selectedColor}
          onChange={handleColorChange}
          className="border rounded p-2"
        >
          <option value="">Select color</option>
          {colors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SizeColorSelector;
