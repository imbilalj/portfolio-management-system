import mongoose from "mongoose";
const { Schema, model } = mongoose;

const AuditUserLoginSchema = new Schema({
  id_user_login_detail: {
    type: Schema.Types.ObjectId,
    ref: "UserLoginDetail",
    required: true,
  },
  session_id: {
    type: String,
    required: [true, "Session ID is required"],
    unique: true,
    maxlength: [255, "Session ID cannot exceed 255 characters"],
  },
  login_status: {
    type: String,
    enum: ["Successful", "Failed"],
    required: [true, "Login status is required"],
  },
  login_date_time: {
    type: Date,
    default: Date.now,
  },
  logout_date_time: {
    type: Date,
  },
});

export const AuditUserLogin = model("AuditUserLogin", AuditUserLoginSchema);
