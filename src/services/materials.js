import apiConfig from './api';

const materialsApi = {
  // Get all materials
  fetchMaterials: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/materials'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching materials:', error);
      throw error;
    }
  },

  // Get active materials
  fetchActiveMaterials: async () => {
    try {
      const response = await fetch(apiConfig.buildUrl('/materials/active'), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching active materials:', error);
      throw error;
    }
  },

  // Get material by ID
  fetchMaterialById: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/materials/${id}`), apiConfig.getOptions());
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error fetching material:', error);
      throw error;
    }
  },

  // Create material
  createMaterial: async (materialData) => {
    try {
      const response = await fetch(apiConfig.buildUrl('/materials'),
        apiConfig.getOptions('POST', materialData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error creating material:', error);
      throw error;
    }
  },

  // Update material
  updateMaterial: async (id, materialData) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/materials/${id}`),
        apiConfig.getOptions('PUT', materialData));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error updating material:', error);
      throw error;
    }
  },

  // Delete material
  deleteMaterial: async (id) => {
    try {
      const response = await fetch(apiConfig.buildUrl(`/materials/${id}`),
        apiConfig.getOptions('DELETE'));
      return await apiConfig.handleResponse(response);
    } catch (error) {
      console.error('Error deleting material:', error);
      throw error;
    }
  }
};

export default materialsApi;
