import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Image file is required" });
    }

    // Validate required fields
    if (
      !req.body.name ||
      !req.body.description ||
      !req.body.price ||
      !req.body.category
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, description, price, category) are required",
      });
    }

    // Create custom filename format: timestamp_foodname.extension
    const timestamp = Date.now();
    const sanitizedFoodName = req.body.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_") // Replace non-alphanumeric with underscore
      .replace(/^_+|_+$/g, ""); // Remove leading/trailing underscores
    const fileExtension = req.file.originalname.split(".").pop();
    const customFilename = `${timestamp}_${sanitizedFoodName}.${fileExtension}`;
    const oldPath = `uploads/${req.file.filename}`;
    const newPath = `uploads/${customFilename}`;

    // Rename the file to custom format
    fs.renameSync(oldPath, newPath);

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: customFilename,
    });

    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error adding food item" });
  }
};

//add food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});

    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
//remove food itemm
const removeFood = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body); // ← ADD THIS LINE
    console.log("REQ BODY ID:", req.body?.id); // ← ADD THIS

    if (!req.body?.id) {
      return res.status(400).json({ success: false, message: "ID required" });
    }

    const food = await foodModel.findById(req.body.id);

    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food item not found" });
    }

    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
export { addFood, listFood, removeFood };