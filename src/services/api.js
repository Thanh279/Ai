// API configuration
const BASE_URL = 'http://localhost:8080/api';

export const apiConfig = {
  baseUrl: BASE_URL,
  
  // Helper function to build full API URL
  buildUrl: (endpoint) => {
    return `${BASE_URL}${endpoint}`;
  },
  
  // Common headers
  headers: {
    'Content-Type': 'application/json',
  },
  
  // Common request options
  getOptions: (method = 'GET', data = null, customHeaders = {}) => {
    const options = {
      method,
      headers: { ...apiConfig.headers, ...customHeaders },
    };
    
    if (data && method !== 'GET' && method !== 'HEAD') {
      options.body = JSON.stringify(data);
    }
    
    return options;
  },
  
  // Handle API response
  handleResponse: async (response) => {
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || `HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
};

export default apiConfig;
