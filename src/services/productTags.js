import apiConfig from './api';

export const productTagsApi = {
    // Get all product tags
    fetchProductTags: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/product-tags'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching product tags:', error);
            throw error;
        }
    },

    // Get product tag by ID
    fetchProductTagById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-tags/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching product tag:', error);
            throw error;
        }
    },

    // Get tags by product ID
    fetchTagsByProductId: async (productId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-tags/product/${productId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching tags by product ID:', error);
            throw error;
        }
    },

    // Get product tags by tag ID
    fetchProductTagsByTagId: async (tagId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-tags/tag/${tagId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching product tags by tag ID:', error);
            throw error;
        }
    },

    // Create a new product tag
    createProductTag: async (productTagData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/product-tags'),
                apiConfig.getOptions('POST', productTagData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating product tag:', error);
            throw error;
        }
    },

    // Update product tag by ID
    updateProductTag: async (id, productTagData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-tags/${id}`),
                apiConfig.getOptions('PUT', productTagData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating product tag:', error);
            throw error;
        }
    },

    // Delete product tag by ID
    deleteProductTag: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-tags/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting product tag:', error);
            throw error;
        }
    }
};

export default productTagsApi;
