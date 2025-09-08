import apiConfig from './api';

const bannersApi = {
  // Get all banners
  fetchBanners: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/banners'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching banners:', error);
      throw error;
    }
  },

  // Get active banners
  fetchActiveBanners: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/banners/active'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching active banners:', error);
      throw error;
    }
  },

  // Get banners by type
  fetchBannersByType: async (type) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/banners/type/${type}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching banners by type:', error);
      throw error;
    }
  },

  // Get active banners by type
  fetchActiveBannersByType: async (type) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/banners/active/type/${type}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching active banners by type:', error);
      throw error;
    }
  },

  // Get banner by ID
  fetchBannerById: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/banners/${id}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching banner:', error);
      throw error;
    }
  },

  // Create banner
  createBanner: async (bannerData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/banners'),
        apiConfig.getOptions('POST', bannerData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error creating banner:', error);
      throw error;
    }
  },

  // Update banner
  updateBanner: async (id, bannerData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/banners/${id}`),
        apiConfig.getOptions('PUT', bannerData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating banner:', error);
      throw error;
    }
  },

  // Delete banner
  deleteBanner: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/banners/${id}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting banner:', error);
      throw error;
    }
  },

  // Toggle banner status
  toggleBannerStatus: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/banners/${id}/toggle`),
        apiConfig.getOptions('PATCH'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error toggling banner status:', error);
      throw error;
    }
  },

  // Get banner images
  fetchBannerImages: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/banners/${id}/images`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching banner images:', error);
      throw error;
    }
  }
};

export default bannersApi;
