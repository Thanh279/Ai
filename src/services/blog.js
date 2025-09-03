import apiConfig from './api';

const blogsApi = {
  fetchBlogs: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/blogs'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },
  
  fetchBlogById: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/blogs/${id}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  },
  
  createBlog: async (blogData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/blogs'), 
        apiConfig.getOptions('POST', blogData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error creating blog:', error);
      throw error;
    }
  },
};

export default blogsApi;
