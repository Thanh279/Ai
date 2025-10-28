import apiConfig from './api';

export const orderItemsApi = {
    // Get all order items
    fetchOrderItems: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/order-items'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching order items:', error);
            throw error;
        }
    },

    // Get order item by ID
    fetchOrderItemById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-items/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching order item:', error);
            throw error;
        }
    },

    // Get order items by order ID
    fetchOrderItemsByOrderId: async (orderId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-items/order/${orderId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching order items by order ID:', error);
            throw error;
        }
    },

    // Get order items by product ID
    fetchOrderItemsByProductId: async (productId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-items/product/${productId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching order items by product ID:', error);
            throw error;
        }
    },

    // Create a new order item
    createOrderItem: async (orderItemData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/order-items'),
                apiConfig.getOptions('POST', orderItemData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating order item:', error);
            throw error;
        }
    },

    // Update order item by ID
    updateOrderItem: async (id, orderItemData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-items/${id}`),
                apiConfig.getOptions('PUT', orderItemData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating order item:', error);
            throw error;
        }
    },

    // Delete order item by ID
    deleteOrderItem: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-items/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting order item:', error);
            throw error;
        }
    }
};

export default orderItemsApi;
