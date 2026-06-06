import express, { Router } from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'
import multer from "multer"
import path from 'path';  // ✅ ADD

const foodRouter = express.Router();

//image storage engine ✅ FIXED
const storage = multer.diskStorage({
  destination: (req, file, cb) => {  // ✅ FUNCTION HONI CHAHIE
    cb(null, 'uploads');  // Backend root uploads/
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);  // ✅ .jpg add
  }
});

const upload = multer({ storage });

foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", upload.none(), removeFood);

export default foodRouter;
