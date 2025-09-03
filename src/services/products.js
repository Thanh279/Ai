import apiConfig from './api';

// API service for product operations
export const productsApi = {
  // Get all products
  fetchProducts: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Get product by ID
  fetchProductById: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/${id}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },

  // Get products by category
  fetchProductsByCategory: async (category) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/category/${category}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  },

  // Search products
  searchProducts: async (query) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/search?name=${encodeURIComponent(query)}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  },

  // Filter products
  filterProducts: async (filters) => {
    try {
      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });

      const response = await fetch(apiConfig.buildUrl(`/products/filter?${queryParams}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error filtering products:', error);
      throw error;
    }
  },

  // Get product categories
  fetchCategories: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/categories'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  // Get product attributes (sizes, colors)
  fetchAttributes: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products/attributes'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching attributes:', error);
      throw error;
    }
  },

  // Get all products with images
  fetchProductsWithImages: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products/with-images'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching products with images:', error);
      throw error;
    }
  }
};
