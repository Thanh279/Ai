import apiConfig from './api';

const blogApi = {
  // Get all blogs
  fetchBlogs: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/blogs'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  // Create blog
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

  // Get blog by ID
  fetchBlogById: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/blogs/${id}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  },

  // Update blog
  updateBlog: async (id, blogData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/blogs/${id}`),
        apiConfig.getOptions('PUT', blogData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating blog:', error);
      throw error;
    }
  },

  // Delete blog
  deleteBlog: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/blogs/${id}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting blog:', error);
      throw error;
    }
  }
};

export default blogApi;
