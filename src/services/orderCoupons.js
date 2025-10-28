import apiConfig from './api';

export const orderCouponsApi = {
    // Get all order coupons
    fetchOrderCoupons: async () => {
        try {
            const response = await fetch(apiConfig.buildUrl('/order-coupons'), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching order coupons:', error);
            throw error;
        }
    },

    // Get order coupon by ID
    fetchOrderCouponById: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-coupons/${id}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching order coupon:', error);
            throw error;
        }
    },

    // Get order coupons by order ID
    fetchOrderCouponsByOrderId: async (orderId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-coupons/order/${orderId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching order coupons by order ID:', error);
            throw error;
        }
    },

    // Get order coupons by coupon ID
    fetchOrderCouponsByCouponId: async (couponId) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-coupons/coupon/${couponId}`), apiConfig.getOptions());
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error fetching order coupons by coupon ID:', error);
            throw error;
        }
    },

    // Create a new order coupon
    createOrderCoupon: async (orderCouponData) => {
        try {
            const response = await fetch(apiConfig.buildUrl('/order-coupons'),
                apiConfig.getOptions('POST', orderCouponData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error creating order coupon:', error);
            throw error;
        }
    },

    // Update order coupon by ID
    updateOrderCoupon: async (id, orderCouponData) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-coupons/${id}`),
                apiConfig.getOptions('PUT', orderCouponData));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error updating order coupon:', error);
            throw error;
        }
    },

    // Delete order coupon by ID
    deleteOrderCoupon: async (id) => {
        try {
            const response = await fetch(apiConfig.buildUrl(`/order-coupons/${id}`),
                apiConfig.getOptions('DELETE'));
            return await apiConfig.handleResponse(response);
        } catch (error) {
            console.error('Error deleting order coupon:', error);
            throw error;
        }
    }
};

export default orderCouponsApi;
