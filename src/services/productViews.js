import apiConfig from './api';

export const productViewsApi = {
    // Get all product views
    fetchProductViews: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/product-views'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching product views:', error);
            throw error;
        }
    },

    // Get product view by ID
    fetchProductViewById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-views/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching product view:', error);
            throw error;
        }
    },

    // Get views by product ID
    fetchViewsByProductId: async (productId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-views/product/${productId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching views by product ID:', error);
            throw error;
        }
    },

    // Get views by user ID
    fetchViewsByUserId: async (userId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-views/user/${userId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching views by user ID:', error);
            throw error;
        }
    },

    // Create a new product view
    createProductView: async (viewData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/product-views'),
                apiConfig.getOptions('POST', viewData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating product view:', error);
            throw error;
        }
    },

    // Update product view by ID
    updateProductView: async (id, viewData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-views/${id}`),
                apiConfig.getOptions('PUT', viewData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating product view:', error);
            throw error;
        }
    },

    // Delete product view by ID
    deleteProductView: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-views/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting product view:', error);
            throw error;
        }
    }
};

export default productViewsApi;
