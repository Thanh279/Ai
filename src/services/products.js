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

  // Get all products with images
  fetchProductsWithImages: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products/with-images'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching products with images:', error);
      throw error;
    }
  },

  // Create product
  createProduct: async (productData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products'),
        apiConfig.getOptions('POST', productData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error creating product:', error);
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

  // Update product
  updateProduct: async (id, productData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/${id}`),
        apiConfig.getOptions('PUT', productData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },

  // Delete product
  deleteProduct: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/${id}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting product:', error);
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

  // Get product images
  fetchProductImages: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/${id}/images`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching product images:', error);
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

  // Get best sellers
  fetchBestSellers: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products/best-sellers'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching best sellers:', error);
      throw error;
    }
  },

  // Get outlet products
  fetchOutletProducts: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products/outlet'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching outlet products:', error);
      throw error;
    }
  },

  // Get products by category
  fetchProductsByCategory: async (categoryId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/category/${categoryId}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  }
};
