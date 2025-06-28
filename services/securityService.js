import { SecurityDetail } from '../models/securityDetail.js';

export const addSecurity = async (order) => {
    const detail = new SecurityDetail(order)
    await detail.save();
    return detail;
}