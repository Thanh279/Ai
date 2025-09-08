import React, { useState } from 'react';

const ProductFilter = ({ filters, updateFilters, clearFilters, metadata }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (key, value) => {
    if (key === 'sizeIds' || key === 'colorIds' || key === 'materialIds' || key === 'tagIds') {
      const currentValues = filters[key] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      updateFilters({ [key]: newValues });
    } else {
      updateFilters({ [key]: value });
    }
  };

  const activeFiltersCount = Object.entries(filters).reduce((count, [key, value]) => {
    if (key === 'searchQuery') return count;
    if (Array.isArray(value)) return count + value.length;
    if (value && value !== '') return count + 1;
    return count;
  }, 0);

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Filter Toggle */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-orange-600"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-4">
            <input
              type="text"
              placeholder="Search products..."
              value={filters.searchQuery || ''}
              onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Categories */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                  {metadata.categories.map(category => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={filters.categoryId === category.id}
                        onChange={(e) => handleFilterChange('categoryId', e.target.value)}
                        className="text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Sizes</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {metadata.sizes.map(size => (
                    <label key={size.id} className="flex items-center">
                      <input
                        type="checkbox"
                        value={size.id}
                        checked={filters.sizeIds?.includes(size.id) || false}
                        onChange={(e) => handleFilterChange('sizeIds', size.id)}
                        className="text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{size.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Colors</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {metadata.colors.map(color => (
                    <label key={color.id} className="flex items-center">
                      <input
                        type="checkbox"
                        value={color.id}
                        checked={filters.colorIds?.includes(color.id) || false}
                        onChange={(e) => handleFilterChange('colorIds', color.id)}
                        className="text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{color.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Min Price</label>
                    <input
                      type="number"
                      value={filters.minPrice || ''}
                      onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Max Price</label>
                    <input
                      type="number"
                      value={filters.maxPrice || ''}
                      onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="1000"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Gender</h4>
                  <div className="space-y-2">
                    {['male', 'female', 'unisex'].map(gender => (
                      <label key={gender} className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          checked={filters.gender === gender}
                          onChange={(e) => handleFilterChange('gender', e.target.value)}
                          className="text-orange-600 focus:ring-orange-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">{gender}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* On Sale */}
                <div className="mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.onSale || false}
                      onChange={(e) => handleFilterChange('onSale', e.target.checked)}
                      className="text-orange-600 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">On Sale</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
