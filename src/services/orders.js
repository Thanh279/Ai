import apiConfig from './api';

const ordersApi = {
  fetchOrders: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/orders'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  },
  
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
};

export default ordersApi;
