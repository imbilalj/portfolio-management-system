import { OrderDetail } from '../models/orderDetail.js';

export const addOrder = async (order) => {
    const detail = new OrderDetail(order)
    await detail.save();
    return detail;
}

export const updateOrder = async (id, order) => {
    const updatedOrder = await OrderDetail.findByIdAndUpdate(id, order, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Updated order: ", result);
        }
    })
    return updatedOrder;
}

export const deleteOrder = async (id) => {
    const order = await OrderDetail.findByIdAndDelete(id, function (err, order) {
        if (err) {
            console.log(err);
        } else {
            console.log("Delete order: ", order);
        }
    });

    return order;
}