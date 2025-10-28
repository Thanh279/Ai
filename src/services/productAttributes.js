import apiConfig from './api';

export const productAttributesApi = {
    // Get all product attributes
    fetchProductAttributes: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/product-attributes'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching product attributes:', error);
            throw error;
        }
    },

    // Get product attribute by ID
    fetchProductAttributeById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-attributes/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching product attribute:', error);
            throw error;
        }
    },

    // Get attributes by product ID
    fetchAttributesByProductId: async (productId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-attributes/product/${productId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching attributes by product ID:', error);
            throw error;
        }
    },

    // Create a new product attribute
    createProductAttribute: async (attributeData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/product-attributes'),
                apiConfig.getOptions('POST', attributeData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating product attribute:', error);
            throw error;
        }
    },

    // Update product attribute by ID
    updateProductAttribute: async (id, attributeData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-attributes/${id}`),
                apiConfig.getOptions('PUT', attributeData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating product attribute:', error);
            throw error;
        }
    },

    // Delete product attribute by ID
    deleteProductAttribute: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-attributes/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting product attribute:', error);
            throw error;
        }
    }
};

export default productAttributesApi;
