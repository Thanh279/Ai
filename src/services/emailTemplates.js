import apiConfig from './api';

export const emailTemplatesApi = {
    // Get all email templates
    fetchEmailTemplates: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/email-templates'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching email templates:', error);
            throw error;
        }
    },

    // Get email template by ID
    fetchEmailTemplateById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/email-templates/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching email template:', error);
            throw error;
        }
    },

    // Get email template by name
    fetchEmailTemplateByName: async (name) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/email-templates/name/${name}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching email template by name:', error);
            throw error;
        }
    },

    // Get active email templates
    fetchActiveEmailTemplates: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/email-templates/active'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching active email templates:', error);
            throw error;
        }
    },

    // Create a new email template
    createEmailTemplate: async (templateData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/email-templates'),
                apiConfig.getOptions('POST', templateData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating email template:', error);
            throw error;
        }
    },

    // Update email template by ID
    updateEmailTemplate: async (id, templateData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/email-templates/${id}`),
                apiConfig.getOptions('PUT', templateData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating email template:', error);
            throw error;
        }
    },

    // Delete email template by ID
    deleteEmailTemplate: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/email-templates/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting email template:', error);
            throw error;
        }
    }
};

export default emailTemplatesApi;
