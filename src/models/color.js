import mongoose from "mongoose";

const color = new mongoose.Schema(
  {
    name: { type: String, required: true },
    hexCode: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Color", color);
