import cors from "cors";
import express from "express";
import  dotenv from "dotenv";
import productRoutes from "./Routes/products.js";
import { connectDB } from "./Utils/mongodb.js";
import userRoutes from "./Routes/user.js";

dotenv.config();

import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectDB();
const app = express();
app.use(cors());
app.use(express.json());


app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.listen(5050, () => {
    console.log("Server is running on port 5050");
});