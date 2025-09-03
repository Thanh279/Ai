import apiConfig from './api';

const paymentApi = {
  processPayment: async (paymentData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/payment'), 
        apiConfig.getOptions('POST', paymentData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error processing payment:', error);
      throw error;
    }
  },
};

export default paymentApi;
