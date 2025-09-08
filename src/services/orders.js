import apiConfig from './api';

const ordersApi = {
  // Get all orders
  fetchOrders: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/orders'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  },

  // Create order
  createOrder: async (orderData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/orders'),
        apiConfig.getOptions('POST', orderData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  },

  // Get order by ID
  fetchOrderById: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/${id}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching order:', error);
      throw error;
    }
  },

  // Update order
  updateOrder: async (id, orderData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/${id}`),
        apiConfig.getOptions('PUT', orderData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating order:', error);
      throw error;
    }
  },

  // Delete order
  deleteOrder: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/${id}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting order:', error);
      throw error;
    }
  }
};

export default ordersApi;
