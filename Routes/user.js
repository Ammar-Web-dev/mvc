import express from "express";
import { createUser, loginUser } from "../Controllers/user.js";
import {
  saveProductController,
  getProductsController,
  updateProductController,
  deleteProductController,
} from "../Controllers/product.js";

const router = express.Router();

// User Routes
router.post("/login", loginUser);
router.post("/createuser", createUser);

// Product Routes
router.post("/addproduct", saveProductController);
router.get("/products", getProductsController);
router.put("/updateproduct/:id", updateProductController);
router.delete("/deleteproduct/:id", deleteProductController);

export default router;