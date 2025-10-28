import apiConfig from './api';

export const couponsApi = {
    // Get all coupons
    fetchCoupons: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/coupons'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching coupons:', error);
            throw error;
        }
    },

    // Get coupon by ID
    fetchCouponById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/coupons/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching coupon:', error);
            throw error;
        }
    },

    // Get coupon by code
    fetchCouponByCode: async (code) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/coupons/code/${code}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching coupon by code:', error);
            throw error;
        }
    },

    // Get active coupons
    fetchActiveCoupons: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/coupons/active'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching active coupons:', error);
            throw error;
        }
    },

    // Create a new coupon
    createCoupon: async (couponData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/coupons'),
                apiConfig.getOptions('POST', couponData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating coupon:', error);
            throw error;
        }
    },

    // Update coupon by ID
    updateCoupon: async (id, couponData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/coupons/${id}`),
                apiConfig.getOptions('PUT', couponData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating coupon:', error);
            throw error;
        }
    },

    // Delete coupon by ID
    deleteCoupon: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/coupons/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting coupon:', error);
            throw error;
        }
    },

    // Validate coupon code
    validateCoupon: async (code) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/coupons/validate/${code}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error validating coupon:', error);
            throw error;
        }
    }
};

export default couponsApi;
