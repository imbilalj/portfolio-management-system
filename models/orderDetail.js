import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderDetailSchema = new Schema({
  id_security_detail: {
    type: Schema.Types.ObjectId,
    ref: "SecurityDetail",
    required: true,
  },
  order_ref_no: {
    type: String,
    required: [true, "Order reference number is required"],
    unique: true,
  },
  order_status: {
    type: String,
    enum: ["Submitted", "Cancelled", "Executed", "Completed", "Failed"],
    default: "Submitted",
  },
  transaction_type: {
    type: String,
    enum: ["Buy", "Sell"],
    required: true,
  },
  order_value: {
    type: Number,
    required: [true, "Order value is required"],
    min: [0, "Order value must be a positive number"],
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "UserLoginDetail",
    required: true,
  },
});

export const OrderDetail = mongoose.model("OrderDetail", OrderDetailSchema);
