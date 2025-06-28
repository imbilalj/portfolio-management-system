import { SecurityDetail } from '../models/securityDetail.js';

export const addSecurity = async (security) => {
    const detail = new SecurityDetail(security)
    await detail.save();
    return detail;
}

export const getSecurity = async (id) => {
    try {
        const security = SecurityDetail.findById(id);
        return security;
    } catch (err) {
        console.log("Something went wrong while fetching security: ", security);
    }
}