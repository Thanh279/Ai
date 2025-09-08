import apiConfig from './api';

const wishlistApi = {
  // Get user wishlist
  fetchUserWishlist: async (userId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/wishlist/user/${userId}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching user wishlist:', error);
      throw error;
    }
  },

  // Add to wishlist
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

  // Remove from wishlist
  removeFromWishlist: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/wishlist/${id}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      throw error;
    }
  }
};

export default wishlistApi;
