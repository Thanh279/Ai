import apiConfig from './api';

export const inventoryTransactionsApi = {
    // Get all inventory transactions
    fetchInventoryTransactions: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/inventory-transactions'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching inventory transactions:', error);
            throw error;
        }
    },

    // Get inventory transaction by ID
    fetchInventoryTransactionById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/inventory-transactions/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching inventory transaction:', error);
            throw error;
        }
    },

    // Get transactions by product ID
    fetchTransactionsByProductId: async (productId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/inventory-transactions/product/${productId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching transactions by product ID:', error);
            throw error;
        }
    },

    // Get ordered transactions by product ID
    fetchOrderedTransactionsByProductId: async (productId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/inventory-transactions/product/${productId}/ordered`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching ordered transactions by product ID:', error);
            throw error;
        }
    },

    // Create a new inventory transaction
    createInventoryTransaction: async (transactionData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/inventory-transactions'),
                apiConfig.getOptions('POST', transactionData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating inventory transaction:', error);
            throw error;
        }
    },

    // Update inventory transaction by ID
    updateInventoryTransaction: async (id, transactionData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/inventory-transactions/${id}`),
                apiConfig.getOptions('PUT', transactionData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating inventory transaction:', error);
            throw error;
        }
    },

    // Delete inventory transaction by ID
    deleteInventoryTransaction: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/inventory-transactions/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting inventory transaction:', error);
            throw error;
        }
    }
};

export default inventoryTransactionsApi;
