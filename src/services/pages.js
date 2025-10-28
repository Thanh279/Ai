import apiConfig from './api';

export const pagesApi = {
    // Get all pages
    fetchPages: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/pages'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching pages:', error);
            throw error;
        }
    },

    // Get page by ID
    fetchPageById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/pages/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching page:', error);
            throw error;
        }
    },

    // Get page by slug
    fetchPageBySlug: async (slug) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/pages/slug/${slug}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching page by slug:', error);
            throw error;
        }
    },

    // Get pages by published status
    fetchPagesByPublishedStatus: async (isPublished) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/pages/published/${isPublished}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching pages by published status:', error);
            throw error;
        }
    },

    // Create a new page
    createPage: async (pageData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/pages'),
                apiConfig.getOptions('POST', pageData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating page:', error);
            throw error;
        }
    },

    // Update page by ID
    updatePage: async (id, pageData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/pages/${id}`),
                apiConfig.getOptions('PUT', pageData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating page:', error);
            throw error;
        }
    },

    // Delete page by ID
    deletePage: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/pages/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting page:', error);
            throw error;
        }
    }
};

export default pagesApi;
