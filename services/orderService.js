import { orderDetail } from '../models/orderDetail';

export const addOrder = async (order) => {
    const order = new orderDetail(order)
    return order;
}

export const updateOrder = async (id, order) => {
    const order = await orderDetail.findByIdAndUpdate(id, order, function (err, order) {
        if (err) {
            console.log(err);
        } else {
            console.log("Updated order: ", order);
        }
    })
    return order;
}

export const deleteOrder = async (id) => {
    const order = await orderDetail.findByIdAndDelete(id, function (err, order) {
        if (err) {
            console.log(err);
        } else {
            console.log("Delete order: ", order);
        }
    });

    return order;
}