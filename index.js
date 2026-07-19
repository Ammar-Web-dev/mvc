import express from "express";
import dotenv from "dotenv";
import UserRoute from "./Routes/user.js";
import { connectDB } from "./Utils/mongodb.js";
import cors from "cors";
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully!");
});

app.use("/user", UserRoute);

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});