// ID_SECURITY_DETAIL INT FK - SECURITY_DETAIL.ID
// ORDER_REF_NO VARCHAR
// ORDER_STATUS VARCHAR
// TRANSACTION_TYPE VARCHAR
// ORDER_VALUE VARCHAR
// CREATED_ON TIMESTAMP
// CREATED_BY INT FK - USER_LOGIN_DETAIL.ID

import { addOrder, deleteOrder, updateOrder } from "../services/orderService";


export const orderCreateHandler = async (req, res) => {
    try {
        const { ref_no, status, transaction_type, order_value, user_id } = req.body;
        const body = {
            order_ref_no: ref_no,
            order_status: status,
            transaction_type: transaction_type,
            order_value: order_value,
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
            message: "Order deleted"
        })
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
}