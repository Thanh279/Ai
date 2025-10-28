import apiConfig from './api';

export const reviewResponsesApi = {
    // Get all review responses
    fetchReviewResponses: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/review-responses'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching review responses:', error);
            throw error;
        }
    },

    // Get review response by ID
    fetchReviewResponseById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/review-responses/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching review response:', error);
            throw error;
        }
    },

    // Get responses by review ID
    fetchResponsesByReviewId: async (reviewId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/review-responses/review/${reviewId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching responses by review ID:', error);
            throw error;
        }
    },

    // Create a new review response
    createReviewResponse: async (responseData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/review-responses'),
                apiConfig.getOptions('POST', responseData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating review response:', error);
            throw error;
        }
    },

    // Update review response by ID
    updateReviewResponse: async (id, responseData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/review-responses/${id}`),
                apiConfig.getOptions('PUT', responseData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating review response:', error);
            throw error;
        }
    },

    // Delete review response by ID
    deleteReviewResponse: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/review-responses/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting review response:', error);
            throw error;
        }
    }
};

export default reviewResponsesApi;
