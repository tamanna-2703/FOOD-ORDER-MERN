import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }
}, { timestamps: true });  // ✅ Added: createdAt, updatedAt

const foodModel = mongoose.model("Food", foodSchema);  // ✅ Fixed: simple & correct

export default foodModel;
