import apiConfig from './api';

const imagesApi = {
  // Get all images
  fetchImages: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/images'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error;
    }
  },

  // Create image
  createImage: async (imageData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/images'),
        apiConfig.getOptions('POST', imageData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error creating image:', error);
      throw error;
    }
  },

  // Upload image to Cloudinary
  uploadImage: async (formData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/images/upload'), {
        method: 'POST',
        body: formData
      });
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  },

  // Get image by ID
  fetchImageById: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/images/${id}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching image:', error);
      throw error;
    }
  },

  // Get images by entity ID
  fetchImagesByEntityId: async (entityId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/images/entity/${entityId}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching images by entity ID:', error);
      throw error;
    }
  },

  // Get images by type
  fetchImagesByType: async (type) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/images/type/${type}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching images by type:', error);
      throw error;
    }
  },

  // Get images by entity ID and type
  fetchImagesByEntityAndType: async (entityId, type) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/images/entity/${entityId}/type/${type}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching images by entity and type:', error);
      throw error;
    }
  },

  // Update image
  updateImage: async (id, imageData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/images/${id}`),
        apiConfig.getOptions('PUT', imageData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating image:', error);
      throw error;
    }
  },

  // Delete image
  deleteImage: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/images/${id}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting image:', error);
      throw error;
    }
  },

  // Delete images by entity ID
  deleteImagesByEntityId: async (entityId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/images/entity/${entityId}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting images by entity ID:', error);
      throw error;
    }
  },

  // Delete images by entity ID and type
  deleteImagesByEntityAndType: async (entityId, type) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/images/entity/${entityId}/type/${type}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting images by entity and type:', error);
      throw error;
    }
  }
};

export default imagesApi;
