import apiConfig from './api';

export const userRolesApi = {
    // Get all user roles
    fetchUserRoles: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/user-roles'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching user roles:', error);
            throw error;
        }
    },

    // Get user role by ID
    fetchUserRoleById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/user-roles/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching user role:', error);
            throw error;
        }
    },

    // Get roles by user ID
    fetchRolesByUserId: async (userId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/user-roles/user/${userId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching roles by user ID:', error);
            throw error;
        }
    },

    // Get user roles by role ID
    fetchUserRolesByRoleId: async (roleId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/user-roles/role/${roleId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching user roles by role ID:', error);
            throw error;
        }
    },

    // Create a new user role
    createUserRole: async (userRoleData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/user-roles'),
                apiConfig.getOptions('POST', userRoleData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating user role:', error);
            throw error;
        }
    },

    // Update user role by ID
    updateUserRole: async (id, userRoleData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/user-roles/${id}`),
                apiConfig.getOptions('PUT', userRoleData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating user role:', error);
            throw error;
        }
    },

    // Delete user role by ID
    deleteUserRole: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/user-roles/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting user role:', error);
            throw error;
        }
    }
};

export default userRolesApi;
