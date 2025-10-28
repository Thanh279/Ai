import apiConfig from './api';

export const searchQueriesApi = {
    // Get all search queries
    fetchSearchQueries: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/search-queries'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching search queries:', error);
            throw error;
        }
    },

    // Get search query by ID
    fetchSearchQueryById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/search-queries/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching search query:', error);
            throw error;
        }
    },

    // Get queries by user ID
    fetchQueriesByUserId: async (userId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/search-queries/user/${userId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching queries by user ID:', error);
            throw error;
        }
    },

    // Get queries by query string
    fetchQueriesByQueryString: async (query) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/search-queries/query/${encodeURIComponent(query)}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching queries by query string:', error);
            throw error;
        }
    },

    // Create a new search query
    createSearchQuery: async (queryData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/search-queries'),
                apiConfig.getOptions('POST', queryData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating search query:', error);
            throw error;
        }
    },

    // Update search query by ID
    updateSearchQuery: async (id, queryData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/search-queries/${id}`),
                apiConfig.getOptions('PUT', queryData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating search query:', error);
            throw error;
        }
    },

    // Delete search query by ID
    deleteSearchQuery: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/search-queries/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting search query:', error);
            throw error;
        }
    }
};

export default searchQueriesApi;
