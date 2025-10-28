import apiConfig from './api';

export const reviewImagesApi = {
    // Get all review images
    fetchReviewImages: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/review-images'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching review images:', error);
            throw error;
        }
    },

    // Get review image by ID
    fetchReviewImageById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/review-images/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching review image:', error);
            throw error;
        }
    },

    // Get images by review ID
    fetchImagesByReviewId: async (reviewId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/review-images/review/${reviewId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching images by review ID:', error);
            throw error;
        }
    },

    // Create a new review image
    createReviewImage: async (imageData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/review-images'),
                apiConfig.getOptions('POST', imageData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating review image:', error);
            throw error;
        }
    },

    // Update review image by ID
    updateReviewImage: async (id, imageData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/review-images/${id}`),
                apiConfig.getOptions('PUT', imageData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating review image:', error);
            throw error;
        }
    },

    // Delete review image by ID
    deleteReviewImage: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/review-images/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting review image:', error);
            throw error;
        }
    }
};

export default reviewImagesApi;
