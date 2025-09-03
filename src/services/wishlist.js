import apiConfig from './api';

// API service for wishlist operations
export const wishlistApi = {
  // Get user's wishlist
  getWishlist: async (userId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/wishlist/user/${userId}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
      throw error;
    }
  },

  // Add product to wishlist
  addToWishlist: async (wishlistData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/wishlist'), 
        apiConfig.getOptions('POST', wishlistData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      throw error;
    }
  },

  // Remove product from wishlist
  removeFromWishlist: async (wishlistId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/wishlist/${wishlistId}`), 
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      throw error;
    }
  }
};
