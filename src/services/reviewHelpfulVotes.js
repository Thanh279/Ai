import apiConfig from './api';

export const reviewHelpfulVotesApi = {
    // Get all review helpful votes
    fetchReviewHelpfulVotes: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/review-helpful-votes'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching review helpful votes:', error);
            throw error;
        }
    },

    // Get review helpful vote by ID
    fetchReviewHelpfulVoteById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/review-helpful-votes/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching review helpful vote:', error);
            throw error;
        }
    },

    // Get votes by review ID
    fetchVotesByReviewId: async (reviewId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/review-helpful-votes/review/${reviewId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching votes by review ID:', error);
            throw error;
        }
    },

    // Create a new review helpful vote
    createReviewHelpfulVote: async (voteData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/review-helpful-votes'),
                apiConfig.getOptions('POST', voteData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating review helpful vote:', error);
            throw error;
        }
    },

    // Update review helpful vote by ID
    updateReviewHelpfulVote: async (id, voteData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/review-helpful-votes/${id}`),
                apiConfig.getOptions('PUT', voteData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating review helpful vote:', error);
            throw error;
        }
    },

    // Delete review helpful vote by ID
    deleteReviewHelpfulVote: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/review-helpful-votes/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting review helpful vote:', error);
            throw error;
        }
    }
};

export default reviewHelpfulVotesApi;
