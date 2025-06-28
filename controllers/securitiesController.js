import { addSecurity, getSecurity } from '../services/securityService.js';

export const createSecurityHandler = async (req, res) => {
    try {
        const { security_name, value } = req.body;
        const body = {
            security_name,
            value
        };
        const security = await addSecurity(body);
        return res.status(201).send(security);
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
}

export const getSecurityHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const security = await getSecurity(id);
        return res.status(201).send(security);
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
}