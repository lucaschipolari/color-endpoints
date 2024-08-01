import mongoose from "mongoose";

const color = new moongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  hexCode: { type: String, required: true },
  rgbCode: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: true },
});
export default mongoose.model("Color", color);
