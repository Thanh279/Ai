import apiConfig from './api';

export const scheduledTasksApi = {
    // Get all scheduled tasks
    fetchScheduledTasks: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/scheduled-tasks'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching scheduled tasks:', error);
            throw error;
        }
    },

    // Get scheduled task by ID
    fetchScheduledTaskById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/scheduled-tasks/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching scheduled task:', error);
            throw error;
        }
    },

    // Get scheduled task by name
    fetchScheduledTaskByName: async (name) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/scheduled-tasks/name/${name}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching scheduled task by name:', error);
            throw error;
        }
    },

    // Get active scheduled tasks
    fetchActiveScheduledTasks: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/scheduled-tasks/active'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching active scheduled tasks:', error);
            throw error;
        }
    },

    // Create a new scheduled task
    createScheduledTask: async (taskData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/scheduled-tasks'),
                apiConfig.getOptions('POST', taskData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating scheduled task:', error);
            throw error;
        }
    },

    // Update scheduled task by ID
    updateScheduledTask: async (id, taskData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/scheduled-tasks/${id}`),
                apiConfig.getOptions('PUT', taskData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating scheduled task:', error);
            throw error;
        }
    },

    // Delete scheduled task by ID
    deleteScheduledTask: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/scheduled-tasks/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting scheduled task:', error);
            throw error;
        }
    }
};

export default scheduledTasksApi;
