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
      const response = await fetch(apiConfig.buildUrl('/login'),
        apiConfig.getOptions('POST', credentials));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  register: async (userData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/register'),
        apiConfig.getOptions('POST', userData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  },

  // Get user profile
  fetchUserProfile: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/${id}/profile`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  },

  // Update user profile
  updateUserProfile: async (id, profileData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/${id}/profile`),
        apiConfig.getOptions('PUT', profileData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  },

  // Change password
  changePassword: async (id, passwordData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/${id}/change-password`),
        apiConfig.getOptions('PUT', passwordData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error changing password:', error);
      throw error;
    }
  },

  // Get user by email
  fetchUserByEmail: async (email) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/email/${encodeURIComponent(email)}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching user by email:', error);
      throw error;
    }
  },

  // Get user orders
  fetchUserOrders: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/${id}/orders`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching user orders:', error);
      throw error;
    }
  },

  // Get user wishlist
  fetchUserWishlist: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/${id}/wishlist`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching user wishlist:', error);
      throw error;
    }
  },

  // Get user reviews
  fetchUserReviews: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/${id}/reviews`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching user reviews:', error);
      throw error;
    }
  },

  // Get user addresses
  fetchUserAddresses: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/${id}/addresses`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching user addresses:', error);
      throw error;
    }
  },

  // Get user roles
  fetchUserRoles: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/${id}/roles`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching user roles:', error);
      throw error;
    }
  },

  // Activate user
  activateUser: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/${id}/activate`),
        apiConfig.getOptions('PATCH'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error activating user:', error);
      throw error;
    }
  },

  // Deactivate user
  deactivateUser: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/users/${id}/deactivate`),
        apiConfig.getOptions('PATCH'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deactivating user:', error);
      throw error;
    }
  },

  // Reset password
  resetPassword: async (email) => {
    try {
      const response = await fetch(apiConfig.buildUrl(' /reset-password'),
        apiConfig.getOptions('POST', { email }));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error resetting password:', error);
      throw error;
    }
  },

  // Verify email
  verifyEmail: async (token) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/verify-email'),
        apiConfig.getOptions('POST', { token }));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error verifying email:', error);
      throw error;
    }
  },

  // Refresh token
  refreshToken: async (refreshToken) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/refresh'),
        apiConfig.getOptions('POST', { refreshToken }));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  },

  // Logout
  logout: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/logout'),
        apiConfig.getOptions('POST'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  }
};

export default authApi;
