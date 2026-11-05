import express from "express";
import {
  deleteTask,
  getMyTask,
  insertProduct,
  newTask,
  updateTask,
} from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { data, data1 } from "../models/task.js";
import { User } from "../models/user.js";
import multer from 'multer';

const router = express.Router();

// Task routes
router.post("/new", isAuthenticated, newTask);
router.get("/my", isAuthenticated, getMyTask);

// Data fetching routes
router.get("/data1", async (req, res) => {
  try {
    const user = await data.find();
    res.status(200).json({
      success: "true",
      message: "Data sent to frontend",
      user
    });
  } catch (error) {
    res.status(500).json({
      success: "false",
      message: error.message
    });
  }
});

router.get("/userdata", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      success: "true",
      message: "Data sent to frontend",
      user
    });
  } catch (error) {
    res.status(500).json({
      success: "false",
      message: error.message
    });
  }
});

// Data manipulation routes
router.post("/userid", async (req, res) => {
    
  const  id = req.body.data.id;
  try {
    await User.deleteOne({ _id: id });

    res.status(200).json({
      success: "true",
      message: "User deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: "false",
      message: error.message,
    });
  }
});

router.post("/upload-data", async (req, res) => {
  const { base64, id, title, price, description, category } = req.body;

  try {
    const newProduct = {
      id,
      title,
      price,
      description,
      images: [base64],
      category,
    };
    
    await data.create(newProduct);
    res.status(200).json({ success: "true", message: "Product uploaded successfully" });
  } catch (error) {
    res.status(500).json({ success: "false", message: error.message });
  }});
// Product update and delete routes
router.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { title, price, description, base64, category } = req.body;

  try {
    const product = await data.findById(id);

    if (!product) {
      return res.status(404).json({ success: "false", message: "Product not found!" });
    }

    // Update product details
    product.title = title || product.title;
    product.price = price || product.price;
    product.description = description || product.description;
    if (base64) {
      product.images = [base64];
    }
    product.category = category || product.category;
    product.updatedAt = Date.now();

    await product.save();
    res.status(200).json({ success: "true", message: "Product updated successfully!" });
  } catch (error) {
    res.status(500).json({ success: "false", message: error.message });
  }
});

router.delete("/products", async (req, res) => {
  const { id } = req.body;
  try {
    await data.deleteOne({ _id: id });
    const users = await data.find();
    res.status(200).json({
      success: "true",
      message: "Product deleted",
      users
    });
  } catch (error) {
    res.status(500).json({
      success: "false",
      message: error.message,
    });
  }
});

export default router;
