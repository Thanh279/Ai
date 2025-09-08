import apiConfig from './api';

const sizesApi = {
  // Get all sizes
  fetchSizes: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/sizes'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching sizes:', error);
      throw error;
    }
  },

  // Get active sizes
  fetchActiveSizes: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/sizes/active'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching active sizes:', error);
      throw error;
    }
  },

  // Get size by ID
  fetchSizeById: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/sizes/${id}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching size:', error);
      throw error;
    }
  },

  // Create size
  createSize: async (sizeData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/sizes'),
        apiConfig.getOptions('POST', sizeData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error creating size:', error);
      throw error;
    }
  },

  // Update size
  updateSize: async (id, sizeData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/sizes/${id}`),
        apiConfig.getOptions('PUT', sizeData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating size:', error);
      throw error;
    }
  },

  // Delete size
  deleteSize: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/sizes/${id}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting size:', error);
      throw error;
    }
  }
};

export default sizesApi;
