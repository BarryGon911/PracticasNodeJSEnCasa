import express from "express";
import "dotenv/config";
import router from "./router.js";
import { connectDB } from "./config/db.js";

const app = express();
connectDB();

// Leer datos del formulario
app.use(express.json());
app.use("/", router);
export default app;
