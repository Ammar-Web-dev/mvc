import cors from "cors";
import express from "express";
import  dotenv from "dotenv";
import productRoutes from "./routes/products.js";
import { connectDB } from "./Utils/mongodb.js";

dotenv.config();

import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);

app.listen(5050, () => {
    console.log("Server is running on port 5050");
});