import apiConfig from './api';

export const cartApi = {
    // Get all carts
    fetchCarts: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/carts'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching carts:', error);
            throw error;
        }
    },

    // Get cart by ID
    fetchCartById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/carts/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching cart:', error);
            throw error;
        }
    },

    // Get cart by user ID
    fetchCartByUserId: async (userId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/carts/user/${userId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching cart by user ID:', error);
            throw error;
        }
    },

    // Add item to cart
    addItemToCart: async (userId, itemData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/carts/user/${userId}/add`),
                apiConfig.getOptions('POST', itemData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error adding item to cart:', error);
            throw error;
        }
    },

    // Update cart for user
    updateUserCart: async (userId, cartData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/carts/user/${userId}/update`),
                apiConfig.getOptions('PUT', cartData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating user cart:', error);
            throw error;
        }
    },

    // Remove item from cart
    removeItemFromCart: async (userId, variantId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/carts/user/${userId}/remove/${variantId}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error removing item from cart:', error);
            throw error;
        }
    },

    // Clear cart for user
    clearUserCart: async (userId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/carts/user/${userId}/clear`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error clearing user cart:', error);
            throw error;
        }
    },

    // Create a new cart
    createCart: async (cartData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/carts'),
                apiConfig.getOptions('POST', cartData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating cart:', error);
            throw error;
        }
    },

    // Update cart by ID
    updateCart: async (id, cartData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/carts/${id}`),
                apiConfig.getOptions('PUT', cartData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating cart:', error);
            throw error;
        }
    },

    // Delete cart by ID
    deleteCart: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/carts/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting cart:', error);
            throw error;
        }
    }
};

export default cartApi;
