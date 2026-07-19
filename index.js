import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import productRoutes from "./Routes/products.js";
import { connectDB } from "./Utils/mongodb.js";

dotenv.config();

import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Backend API is running successfully");
});

app.use("/products", productRoutes);

app.listen(process.env.PORT || 5050, () => {
  console.log(`Server is running on port ${process.env.PORT || 5050}`);
});