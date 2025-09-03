import apiConfig from './api';

const categoriesApi = {
  fetchCategories: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/categories'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },
  
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
};

export default categoriesApi;
