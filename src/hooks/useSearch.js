import { useState, useCallback } from 'react';

const useSearch = (initialData = []) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  const search = useCallback((query, data = initialData) => {
    const lowerCaseQuery = query.toLowerCase().trim();
    
    if (!lowerCaseQuery) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter(item =>
      Object.values(item).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(lowerCaseQuery)
      )
    );
    
    setFilteredData(filtered);
  }, [initialData]);

  const filterByAttributes = useCallback((filters, data = initialData) => {
    let filtered = data;

    if (filters.category) {
      filtered = filtered.filter(item => item.category === filters.category);
    }

    if (filters.size) {
      filtered = filtered.filter(item => item.sizes && item.sizes.includes(filters.size));
    }

    if (filters.color) {
      filtered = filtered.filter(item => item.colors && item.colors.includes(filters.color));
    }

    setFilteredData(filtered);
  }, [initialData]);

  return {
    searchQuery,
    setSearchQuery,
    filteredData,
    search,
    filterByAttributes
  };
};

export default useSearch;
