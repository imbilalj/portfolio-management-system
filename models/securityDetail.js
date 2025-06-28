import mongoose from "mongoose";
const { Schema } = mongoose;

const SecurityDetailSchema = new Schema({
  security_name: {
    type: String,
    required: [true, "Security name is required"],
    unique: true,
    maxlength: [255, "Security name cannot exceed 255 characters"],
  },
  value: {
    type: Number,
    required: [true, "Security value is required"],
    min: [0, "Value must be a positive number"],
  },
});

const SecurityDetail = mongoose.model("SecurityDetail", SecurityDetailSchema);
module.exports = SecurityDetail;
