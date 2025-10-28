import apiConfig from './api';

export const systemSettingsApi = {
    // Get all system settings
    fetchSystemSettings: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/system-settings'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching system settings:', error);
            throw error;
        }
    },

    // Get system setting by ID
    fetchSystemSettingById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/system-settings/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching system setting:', error);
            throw error;
        }
    },

    // Get system setting by key
    fetchSystemSettingByKey: async (key) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/system-settings/key/${key}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching system setting by key:', error);
            throw error;
        }
    },

    // Get system settings by category
    fetchSystemSettingsByCategory: async (category) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/system-settings/category/${category}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching system settings by category:', error);
            throw error;
        }
    },

    // Create a new system setting
    createSystemSetting: async (settingData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/system-settings'),
                apiConfig.getOptions('POST', settingData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating system setting:', error);
            throw error;
        }
    },

    // Update system setting by ID
    updateSystemSetting: async (id, settingData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/system-settings/${id}`),
                apiConfig.getOptions('PUT', settingData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating system setting:', error);
            throw error;
        }
    },

    // Delete system setting by ID
    deleteSystemSetting: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/system-settings/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting system setting:', error);
            throw error;
        }
    }
};

export default systemSettingsApi;
