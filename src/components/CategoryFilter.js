import React from 'react';

const CategoryFilter = ({ categories, onSelect }) => (
  <div className="mb-6">
    <label className="block text-lg font-semibold mb-2">Categories</label>
    <select onChange={(e) => onSelect(e.target.value)} className="w-full p-2 border rounded">
      <option value="">All</option>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  </div>
);

export default CategoryFilter;