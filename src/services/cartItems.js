import apiConfig from './api';

export const cartItemsApi = {
    // Get all cart items
    fetchCartItems: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/cart-items'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching cart items:', error);
            throw error;
        }
    },

    // Get cart item by ID
    fetchCartItemById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/cart-items/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching cart item:', error);
            throw error;
        }
    },

    // Get cart item by variant ID
    fetchCartItemByVariantId: async (variantId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/cart-items/variant/${variantId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching cart item by variant ID:', error);
            throw error;
        }
    },

    // Create a new cart item
    createCartItem: async (cartItemData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/cart-items'),
                apiConfig.getOptions('POST', cartItemData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating cart item:', error);
            throw error;
        }
    },

    // Update cart item by ID
    updateCartItem: async (id, cartItemData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/cart-items/${id}`),
                apiConfig.getOptions('PUT', cartItemData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating cart item:', error);
            throw error;
        }
    },

    // Delete cart item by ID
    deleteCartItem: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/cart-items/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting cart item:', error);
            throw error;
        }
    }
};

export default cartItemsApi;
