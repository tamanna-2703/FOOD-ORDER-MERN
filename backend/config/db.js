import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb+srv://tamannasachdeva27_db_user:1234567890t@cluster0.kdgfkxt.mongodb.net/FOOD-ORDER';
  try {
    await mongoose.connect(uri);
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Failed:", error.message);
    process.exit(1);
  }
}