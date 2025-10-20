import apiConfig from './api';

export const categoriesApi = {
  // Get all categories
  fetchCategories: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/categories'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  // Get nested categories
  fetchNestedCategories: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/categories/nested'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching nested categories:', error);
      throw error;
    }
  },

  // Create category
  createCategory: async (categoryData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/categories'),
        apiConfig.getOptions('POST', categoryData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error creating category:', error);
      throw error;
    }
  },

  // Get category by ID
  fetchCategoryById: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/categories/${id}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching category:', error);
      throw error;
    }
  },

  // Update category
  updateCategory: async (id, categoryData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/categories/${id}`),
        apiConfig.getOptions('PUT', categoryData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating category:', error);
      throw error;
    }
  },

  // Delete category
  deleteCategory: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/categories/${id}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting category:', error);
      throw error;
    }
  }
};
