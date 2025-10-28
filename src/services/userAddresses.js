import apiConfig from './api';

export const userAddressesApi = {
    // Get all user addresses
    fetchUserAddresses: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/user-addresses'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching user addresses:', error);
            throw error;
        }
    },

    // Get user address by ID
    fetchUserAddressById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/user-addresses/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching user address:', error);
            throw error;
        }
    },

    // Get addresses by user ID
    fetchAddressesByUserId: async (userId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/user-addresses/user/${userId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching addresses by user ID:', error);
            throw error;
        }
    },

    // Get default address by user ID
    fetchDefaultAddressByUserId: async (userId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/user-addresses/user/${userId}/default`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching default address by user ID:', error);
            throw error;
        }
    },

    // Create a new user address
    createUserAddress: async (addressData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/user-addresses'),
                apiConfig.getOptions('POST', addressData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating user address:', error);
            throw error;
        }
    },

    // Update user address by ID
    updateUserAddress: async (id, addressData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/user-addresses/${id}`),
                apiConfig.getOptions('PUT', addressData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating user address:', error);
            throw error;
        }
    },

    // Delete user address by ID
    deleteUserAddress: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/user-addresses/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting user address:', error);
            throw error;
        }
    }
};

export default userAddressesApi;
