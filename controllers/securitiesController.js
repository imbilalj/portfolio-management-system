import { addSecurity } from '../services/securityService.js';

export const createSecurityHandler = async (req, res) => {
    try {
        const { security_name, value } = req.body;
        // update
        const body = {
            security_name,
            value
        };
        const order = await addSecurity(body);
        return res.status(201).send(order);
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
}