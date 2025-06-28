import mongoose from "mongoose";
const { Schema } = mongoose;

const UserLoginDetailSchema = new Schema({
  id_user_detail: {
    type: Schema.Types.ObjectId,
    ref: "UserDetail",
    required: true,
  },
  user_status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: String,
    required: true,
  },
  modified_on: {
    type: Date,
  },
  modified_by: {
    type: String,
  },
});

const UserLoginDetail = mongoose.model(
  "UserLoginDetail",
  UserLoginDetailSchema
);
module.exports = UserLoginDetail;
