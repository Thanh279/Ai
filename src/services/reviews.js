import apiConfig from './api';

// API service for product reviews
export const reviewsApi = {
  // Get reviews for a product
  getProductReviews: async (productId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/${productId}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }
  },

  // Submit a new review
  submitReview: async (reviewData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/reviews'), 
        apiConfig.getOptions('POST', reviewData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error submitting review:', error);
      throw error;
    }
  },

  // Get average rating for a product
  getAverageRating: async (productId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/${productId}/rating`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching rating:', error);
      throw error;
    }
  },

  // Update a review
  updateReview: async (reviewId, reviewData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/${reviewId}`), 
        apiConfig.getOptions('PUT', reviewData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating review:', error);
      throw error;
    }
  },

  // Delete a review
  deleteReview: async (reviewId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/${reviewId}`), 
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting review:', error);
      throw error;
    }
  }
};
