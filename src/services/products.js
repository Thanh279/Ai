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

  // Get products by category
  fetchProductsByCategory: async (categoryId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/category/${categoryId}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  },

  // Get product stock information
  fetchProductStock: async (productId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/${productId}/stock`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching product stock:', error);
      throw error;
    }
  },

  // Get product variants with stock
  fetchProductVariantsWithStock: async (productId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/${productId}/variants/stock`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching product variants with stock:', error);
      throw error;
    }
  },

  // Get products by brand
  fetchProductsByBrand: async (brandId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/brand/${brandId}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching products by brand:', error);
      throw error;
    }
  },

  // Get featured products
  fetchFeaturedProducts: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products/featured'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching featured products:', error);
      throw error;
    }
  },

  // Get best selling products
  fetchBestSellingProducts: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products/best-selling'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching best selling products:', error);
      throw error;
    }
  },

  // Get new arrivals
  fetchNewArrivals: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products/new-arrivals'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching new arrivals:', error);
      throw error;
    }
  },

  // Get on sale products
  fetchOnSaleProducts: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products/on-sale'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching on sale products:', error);
      throw error;
    }
  },

  // Get outlet products (products on sale)
  fetchOutletProducts: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products/filter/sale'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching outlet products:', error);
      throw error;
    }
  },

  // Get product variants
  fetchProductVariants: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/${id}/variants`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching product variants:', error);
      throw error;
    }
  },

  // Get product attributes
  fetchProductAttributes: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/${id}/attributes`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching product attributes:', error);
      throw error;
    }
  },

  // Get product tags
  fetchProductTags: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/${id}/tags`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching product tags:', error);
      throw error;
    }
  },

  // Get product reviews
  fetchProductReviews: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/${id}/reviews`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching product reviews:', error);
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

  // Get product views
  fetchProductViews: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/products/${id}/views`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching product views:', error);
      throw error;
    }
  },

  // Search products
  searchProducts: async (query, filters = {}) => {
    try {
      const params = new URLSearchParams({ q: query, ...filters });
      const response = await fetch(apiConfig.buildUrl(`/products/search?${params}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  },

  // Filter products
  filterProducts: async (filters) => {
    try {
      const params = new URLSearchParams(filters);
      const response = await fetch(apiConfig.buildUrl(`/products/filter?${params}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error filtering products:', error);
      throw error;
    }
  },

  // Get product statistics
  fetchProductStatistics: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products/statistics'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching product statistics:', error);
      throw error;
    }
  },

  // Bulk update products
  bulkUpdateProducts: async (productsData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products/bulk-update'),
        apiConfig.getOptions('PUT', productsData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error bulk updating products:', error);
      throw error;
    }
  },

  // Bulk delete products
  bulkDeleteProducts: async (productIds) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/products/bulk-delete'),
        apiConfig.getOptions('DELETE', { ids: productIds }));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error bulk deleting products:', error);
      throw error;
    }
  }
};
