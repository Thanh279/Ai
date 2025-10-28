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
  },

  // Get reviews by product ID
  fetchReviewsByProductId: async (productId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/product/${productId}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching reviews by product ID:', error);
      throw error;
    }
  },

  // Get reviews by user ID
  fetchReviewsByUserId: async (userId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/user/${userId}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching reviews by user ID:', error);
      throw error;
    }
  },

  // Get reviews by rating
  fetchReviewsByRating: async (rating) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/rating/${rating}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching reviews by rating:', error);
      throw error;
    }
  },

  // Get review images
  fetchReviewImages: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/${id}/images`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching review images:', error);
      throw error;
    }
  },

  // Get review responses
  fetchReviewResponses: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/${id}/responses`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching review responses:', error);
      throw error;
    }
  },

  // Get review helpful votes
  fetchReviewHelpfulVotes: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/${id}/helpful-votes`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching review helpful votes:', error);
      throw error;
    }
  },

  // Mark review as helpful
  markReviewHelpful: async (id, userId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/${id}/helpful`),
        apiConfig.getOptions('POST', { userId }));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error marking review as helpful:', error);
      throw error;
    }
  },

  // Report review
  reportReview: async (id, reportData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/${id}/report`),
        apiConfig.getOptions('POST', reportData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error reporting review:', error);
      throw error;
    }
  },

  // Approve review
  approveReview: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/${id}/approve`),
        apiConfig.getOptions('PATCH'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error approving review:', error);
      throw error;
    }
  },

  // Reject review
  rejectReview: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/reviews/${id}/reject`),
        apiConfig.getOptions('PATCH'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error rejecting review:', error);
      throw error;
    }
  },

  // Get review statistics
  fetchReviewStatistics: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/reviews/statistics'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching review statistics:', error);
      throw error;
    }
  }
};
