import express from "express";
import "dotenv/config";
import router from "./router";

const app = express();

// Leer datos del formulario
app.use(express.json());
app.use("/", router);
export default app;
