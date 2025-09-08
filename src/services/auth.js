import apiConfig from './api';

// API service for user authentication and management
export const authApi = {
  // User CRUD operations
  fetchUsers: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/users'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  fetchUserById: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/${id}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  },

  createUser: async (userData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/users'),
        apiConfig.getOptions('POST', userData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  updateUser: async (id, userData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/${id}`),
        apiConfig.getOptions('PUT', userData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  deleteUser: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/${id}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },

  // Authentication methods (if implemented on backend)
  login: async (credentials) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/auth/login'),
        apiConfig.getOptions('POST', credentials));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  register: async (userData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/auth/register'),
        apiConfig.getOptions('POST', userData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  }
};

export default authApi;
