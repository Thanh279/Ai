import apiConfig from './api';

export const productVariantsApi = {
    // Get all product variants
    fetchProductVariants: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/product-variants'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching product variants:', error);
            throw error;
        }
    },

    // Create a new product variant
    createProductVariant: async (variantData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/product-variants'),
                apiConfig.getOptions('POST', variantData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating product variant:', error);
            throw error;
        }
    },

    // Get product variant by ID
    fetchProductVariantById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-variants/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching product variant:', error);
            throw error;
        }
    },

    // Update product variant by ID
    updateProductVariant: async (id, variantData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-variants/${id}`),
                apiConfig.getOptions('PUT', variantData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating product variant:', error);
            throw error;
        }
    },

    // Delete product variant by ID
    deleteProductVariant: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-variants/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting product variant:', error);
            throw error;
        }
    },

    // Get variants by product ID
    fetchVariantsByProductId: async (productId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/product-variants/product/${productId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching variants by product ID:', error);
            throw error;
        }
    }
};

export default productVariantsApi;
