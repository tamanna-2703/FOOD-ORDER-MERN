import mongoose from "mongoose";

export const connectDB= async()=>{
  await mongoose.connect('mongodb+srv://tamannasachdeva27_db_user:1234567890t@cluster0.kdgfkxt.mongodb.net/FOOD-ORDER').then(()=>console.log("DB connected"));
}