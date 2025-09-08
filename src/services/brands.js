import apiConfig from './api';

const brandsApi = {
  // Get all brands
  fetchBrands: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/brands'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching brands:', error);
      throw error;
    }
  },

  // Get active brands
  fetchActiveBrands: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/brands/active'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching active brands:', error);
      throw error;
    }
  },

  // Get brand by ID
  fetchBrandById: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/brands/${id}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching brand:', error);
      throw error;
    }
  },

  // Create brand
  createBrand: async (brandData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/brands'),
        apiConfig.getOptions('POST', brandData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error creating brand:', error);
      throw error;
    }
  },

  // Update brand
  updateBrand: async (id, brandData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/brands/${id}`),
        apiConfig.getOptions('PUT', brandData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating brand:', error);
      throw error;
    }
  },

  // Delete brand
  deleteBrand: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/brands/${id}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting brand:', error);
      throw error;
    }
  }
};

export default brandsApi;
