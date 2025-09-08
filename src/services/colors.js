import apiConfig from './api';

const colorsApi = {
  // Get all colors
  fetchColors: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/colors'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching colors:', error);
      throw error;
    }
  },

  // Get active colors
  fetchActiveColors: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/colors/active'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching active colors:', error);
      throw error;
    }
  },

  // Get color by ID
  fetchColorById: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/colors/${id}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching color:', error);
      throw error;
    }
  },

  // Create color
  createColor: async (colorData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/colors'),
        apiConfig.getOptions('POST', colorData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error creating color:', error);
      throw error;
    }
  },

  // Update color
  updateColor: async (id, colorData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/colors/${id}`),
        apiConfig.getOptions('PUT', colorData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating color:', error);
      throw error;
    }
  },

  // Delete color
  deleteColor: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/colors/${id}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting color:', error);
      throw error;
    }
  }
};

export default colorsApi;
