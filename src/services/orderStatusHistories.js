import apiConfig from './api';

export const orderStatusHistoriesApi = {
    // Get all order status histories
    fetchOrderStatusHistories: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/order-status-histories'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching order status histories:', error);
            throw error;
        }
    },

    // Get order status history by ID
    fetchOrderStatusHistoryById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-status-histories/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching order status history:', error);
            throw error;
        }
    },

    // Get status histories by order ID
    fetchStatusHistoriesByOrderId: async (orderId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-status-histories/order/${orderId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching status histories by order ID:', error);
            throw error;
        }
    },

    // Create a new order status history
    createOrderStatusHistory: async (statusHistoryData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/order-status-histories'),
                apiConfig.getOptions('POST', statusHistoryData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating order status history:', error);
            throw error;
        }
    },

    // Update order status history by ID
    updateOrderStatusHistory: async (id, statusHistoryData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-status-histories/${id}`),
                apiConfig.getOptions('PUT', statusHistoryData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating order status history:', error);
            throw error;
        }
    },

    // Delete order status history by ID
    deleteOrderStatusHistory: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-status-histories/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting order status history:', error);
            throw error;
        }
    }
};

export default orderStatusHistoriesApi;
