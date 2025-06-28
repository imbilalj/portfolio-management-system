import mongoose from "mongoose";
const { Schema } = mongoose;
const AccountDetailSchema = new Schema({
  id_user_login_detail: {
    type: Schema.Types.ObjectId,
    ref: "UserLoginDetail",
    required: true,
  },
  credit: {
    type: Number,
    default: 0,
    min: [0, "Credit must be a positive number"],
  },
  debit: {
    type: Number,
    default: 0,
    min: [0, "Debit must be a positive number"],
  },
  running_balance: {
    type: Number,
    default: 10000, // default to $10,000
    min: [0, "Running balance cannot be less than zero"],
  },
  id_order_detail: {
    type: Schema.Types.ObjectId,
    ref: "OrderDetail",
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

export const AccountDetail = mongoose.model("AccountDetail", AccountDetailSchema);
