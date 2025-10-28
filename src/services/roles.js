import apiConfig from './api';

export const rolesApi = {
    // Get all roles
    fetchRoles: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/roles'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching roles:', error);
            throw error;
        }
    },

    // Get role by ID
    fetchRoleById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/roles/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching role:', error);
            throw error;
        }
    },

    // Get role by name
    fetchRoleByName: async (name) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/roles/name/${name}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching role by name:', error);
            throw error;
        }
    },

    // Create a new role
    createRole: async (roleData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/roles'),
                apiConfig.getOptions('POST', roleData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating role:', error);
            throw error;
        }
    },

    // Update role by ID
    updateRole: async (id, roleData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/roles/${id}`),
                apiConfig.getOptions('PUT', roleData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating role:', error);
            throw error;
        }
    },

    // Delete role by ID
    deleteRole: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/roles/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting role:', error);
            throw error;
        }
    }
};

export default rolesApi;
