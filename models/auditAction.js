import mongoose from "mongoose";
const { Schema } = mongoose;

const AuditActionSchema = new Schema({
  id_user_login_detail: {
    type: Schema.Types.ObjectId,
    ref: "UserLoginDetail",
    required: true,
  },
  user_action: {
    type: String,
    required: [true, "User action is required"],
    maxlength: [255, "User action cannot exceed 255 characters"],
  },
  start_date_time: {
    type: Date,
    required: true,
    default: Date.now,
  },
  end_date_time: {
    type: Date,
  },
});

const AuditAction = mongoose.model("AuditAction", AuditActionSchema);
module.exports = AuditAction;
