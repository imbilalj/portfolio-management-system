import { addOrder, deleteOrder, updateOrder } from "../services/orderService.js";
import { getSecurity } from "../services/securityService.js";


export const orderCreateHandler = async (req, res) => {
    try {
        const { ref_no, status, transaction_type, quantity, user_id, security_id } = req.body;
        const security = await getSecurity(security_id);
        const order_value = quantity * security.value;

        const body = {
            order_ref_no: ref_no,
            order_status: status,
            transaction_type: transaction_type,
            order_value: order_value.toFixed(2),
            id_security_detail: security_id,
            created_on: new Date(),
            created_by: user_id
        };
        const order = await addOrder(body);
        return res.status(201).send(order);
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
}

export const orderUpdateHandler = async (req, res) => {
    try {
        const { ref_no, status, transaction_type, quantity, user_id, security_id } = req.body;
        const { id } = req.params;

        // order value calculation.
        const security = await getSecurity(security_id);
        const order_value = quantity * security.value;

        const body = {
            order_ref_no: ref_no,
            order_status: status,
            transaction_type: transaction_type,
            order_value: order_value.toFixed(2),
            created_on: new Date(),
            created_by: user_id
        };
        const order = await updateOrder(id, body);
        return res.status(201).send(order);
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
}

export const orderDeleteHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await deleteOrder(id);
        return res.status(200).send({
            message: "Order deleted",
            order
        })
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
}