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
  },

  // Get orders by user ID
  fetchOrdersByUserId: async (userId) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/user/${userId}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching orders by user ID:', error);
      throw error;
    }
  },

  // Get orders by status
  fetchOrdersByStatus: async (status) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/status/${status}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching orders by status:', error);
      throw error;
    }
  },

  // Get orders by date range
  fetchOrdersByDateRange: async (startDate, endDate) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/date-range?start=${startDate}&end=${endDate}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching orders by date range:', error);
      throw error;
    }
  },

  // Update order status
  updateOrderStatus: async (id, statusData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/${id}/status`),
        apiConfig.getOptions('PUT', statusData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating order status:', error);
      throw error;
    }
  },

  // Cancel order
  cancelOrder: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/${id}/cancel`),
        apiConfig.getOptions('PATCH'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error canceling order:', error);
      throw error;
    }
  },

  // Get order tracking
  fetchOrderTracking: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/${id}/tracking`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching order tracking:', error);
      throw error;
    }
  },

  // Get order invoice
  fetchOrderInvoice: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/${id}/invoice`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching order invoice:', error);
      throw error;
    }
  },

  // Get order items
  fetchOrderItems: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/${id}/items`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching order items:', error);
      throw error;
    }
  },

  // Get order coupons
  fetchOrderCoupons: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/${id}/coupons`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching order coupons:', error);
      throw error;
    }
  },

  // Get order status history
  fetchOrderStatusHistory: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/${id}/status-history`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching order status history:', error);
      throw error;
    }
  },

  // Process payment
  processOrderPayment: async (id, paymentData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/${id}/payment`),
        apiConfig.getOptions('POST', paymentData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error processing order payment:', error);
      throw error;
    }
  },

  // Refund order
  refundOrder: async (id, refundData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/orders/${id}/refund`),
        apiConfig.getOptions('POST', refundData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error refunding order:', error);
      throw error;
    }
  },

  // Get order statistics
  fetchOrderStatistics: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/orders/statistics'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching order statistics:', error);
      throw error;
    }
  }
};

export default ordersApi;
