import apiConfig from './api';

const tagsApi = {
  // Get all tags
  fetchTags: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/tags'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching tags:', error);
      throw error;
    }
  },

  // Get active tags
  fetchActiveTags: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/tags/active'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching active tags:', error);
      throw error;
    }
  },

  // Get tag by ID
  fetchTagById: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/tags/${id}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching tag:', error);
      throw error;
    }
  },

  // Create tag
  createTag: async (tagData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/tags'),
        apiConfig.getOptions('POST', tagData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error creating tag:', error);
      throw error;
    }
  },

  // Update tag
  updateTag: async (id, tagData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/tags/${id}`),
        apiConfig.getOptions('PUT', tagData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating tag:', error);
      throw error;
    }
  },

  // Delete tag
  deleteTag: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/tags/${id}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting tag:', error);
      throw error;
    }
  }
};

export default tagsApi;
