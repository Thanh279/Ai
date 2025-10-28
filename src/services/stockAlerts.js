import apiConfig from './api';

export const stockAlertsApi = {
    // Get all stock alerts
    fetchStockAlerts: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/stock-alerts'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching stock alerts:', error);
            throw error;
        }
    },

    // Get stock alert by ID
    fetchStockAlertById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/stock-alerts/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching stock alert:', error);
            throw error;
        }
    },

    // Get alerts by product ID
    fetchAlertsByProductId: async (productId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/stock-alerts/product/${productId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching alerts by product ID:', error);
            throw error;
        }
    },

    // Get alerts by user ID
    fetchAlertsByUserId: async (userId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/stock-alerts/user/${userId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching alerts by user ID:', error);
            throw error;
        }
    },

    // Get active alerts by product ID
    fetchActiveAlertsByProductId: async (productId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/stock-alerts/product/${productId}/active`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching active alerts by product ID:', error);
            throw error;
        }
    },

    // Create a new stock alert
    createStockAlert: async (alertData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/stock-alerts'),
                apiConfig.getOptions('POST', alertData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating stock alert:', error);
            throw error;
        }
    },

    // Update stock alert by ID
    updateStockAlert: async (id, alertData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/stock-alerts/${id}`),
                apiConfig.getOptions('PUT', alertData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating stock alert:', error);
            throw error;
        }
    },

    // Delete stock alert by ID
    deleteStockAlert: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/stock-alerts/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting stock alert:', error);
            throw error;
        }
    }
};

export default stockAlertsApi;
