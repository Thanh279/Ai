import { useState, useEffect } from 'react';
import { productsApi } from '../services/products';
import categoriesApi from '../services/categories';
import brandsApi from '../services/brands';
import sizesApi from '../services/sizes';
import colorsApi from '../services/colors';
import materialsApi from '../services/materials';
import tagsApi from '../services/tags';

const useProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [filters, setFilters] = useState({
    categoryId: '',
    sizeIds: [],
    colorIds: [],
    materialIds: [],
    tagIds: [],
    minPrice: '',
    maxPrice: '',
    gender: '',
    onSale: false,
    searchQuery: ''
  });

  // Metadata states
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [tags, setTags] = useState([]);

  // Load initial data
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true);

        // Load products
        const productsData = await productsApi.fetchProductsWithImages();
        setProducts(productsData);
        setFilteredProducts(productsData);

        // Load metadata
        const [categoriesData, brandsData, sizesData, colorsData, materialsData, tagsData] = await Promise.all([
          categoriesApi.fetchCategories(),
          brandsApi.fetchBrands(),
          sizesApi.fetchSizes(),
          colorsApi.fetchColors(),
          materialsApi.fetchMaterials(),
          tagsApi.fetchTags()
        ]);

        setCategories(categoriesData);
        setBrands(brandsData);
        setSizes(sizesData);
        setColors(colorsData);
        setMaterials(materialsData);
        setTags(tagsData);

      } catch (err) {
        setError('Failed to load data');
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // Apply filters
  useEffect(() => {
    const applyFilters = async () => {
      try {
        if (Object.values(filters).every(value =>
          !value || (Array.isArray(value) && value.length === 0)
        )) {
          setFilteredProducts(products);
          return;
        }

        const filterParams = {};

        // Build filter parameters
        if (filters.categoryId) filterParams.categoryId = filters.categoryId;
        if (filters.sizeIds.length > 0) filterParams.sizeIds = filters.sizeIds.join(',');
        if (filters.colorIds.length > 0) filterParams.colorIds = filters.colorIds.join(',');
        if (filters.materialIds.length > 0) filterParams.materialIds = filters.materialIds.join(',');
        if (filters.tagIds.length > 0) filterParams.tagIds = filters.tagIds.join(',');
        if (filters.minPrice) filterParams.minPrice = filters.minPrice;
        if (filters.maxPrice) filterParams.maxPrice = filters.maxPrice;
        if (filters.gender) filterParams.gender = filters.gender;
        if (filters.onSale) filterParams.onSale = filters.onSale;

        if (Object.keys(filterParams).length > 0) {
          const filteredData = await productsApi.filterProducts(filterParams);
          setFilteredProducts(filteredData);
        } else {
          setFilteredProducts(products);
        }

        // Apply search query locally
        if (filters.searchQuery) {
          const searchResults = await productsApi.searchProducts(filters.searchQuery);
          setFilteredProducts(prev => prev.filter(product =>
            searchResults.some(searchProduct => searchProduct.id === product.id)
          ));
        }

      } catch (err) {
        console.error('Error applying filters:', err);
        setError('Failed to apply filters');
      }
    };

    if (products.length > 0) {
      applyFilters();
    }
  }, [filters, products]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      categoryId: '',
      sizeIds: [],
      colorIds: [],
      materialIds: [],
      tagIds: [],
      minPrice: '',
      maxPrice: '',
      gender: '',
      onSale: false,
      searchQuery: ''
    });
  };

  return {
    products: filteredProducts,
    allProducts: products,
    loading,
    error,
    filters,
    updateFilters,
    clearFilters,
    metadata: {
      categories,
      brands,
      sizes,
      colors,
      materials,
      tags
    }
  };
};

export default useProductFilter;
