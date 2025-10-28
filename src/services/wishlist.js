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
  },

  // Check if product is in wishlist
  checkWishlistItem: async (userId, productId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/wishlist/check/${userId}/${productId}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error checking wishlist item:', error);
      throw error;
    }
  },

  // Move item to cart
  moveToCart: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/wishlist/${id}/move-to-cart`),
        apiConfig.getOptions('POST'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error moving item to cart:', error);
      throw error;
    }
  },

  // Share wishlist
  shareWishlist: async (userId, shareData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/wishlist/user/${userId}/share`),
        apiConfig.getOptions('POST', shareData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error sharing wishlist:', error);
      throw error;
    }
  },

  // Get public wishlist
  fetchPublicWishlist: async (shareToken) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/wishlist/public/${shareToken}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching public wishlist:', error);
      throw error;
    }
  }
};

export default wishlistApi;
