import { addOrder, deleteOrder, updateOrder } from "../services/orderService.js";


export const orderCreateHandler = async (req, res) => {
    console.log("Create Orders: ");
    try {
        const { ref_no, status, transaction_type, order_value, user_id } = req.body;
        // update
        const body = {
            order_ref_no: ref_no,
            order_status: status,
            transaction_type: transaction_type,
            order_value: order_value,
            id_security_detail: "685fd8199d85aa1fc7a95fdd",
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
        const { ref_no, status, transaction_type, order_value, user_id } = req.body;
        const { id } = req.params;
        const body = {
            order_ref_no: ref_no,
            order_status: status,
            transaction_type: transaction_type,
            order_value: order_value,
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