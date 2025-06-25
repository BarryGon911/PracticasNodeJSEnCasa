import express from "express";
import colors from "colors";
import "dotenv/config";
import { logger } from "../src/middlewares/logger.js";
import usersRouter from "../src/routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());// Espress debe ser capaz de recibir datos en formato JSON

app.get("/:name", logger, (req, res) => {
  //http://localhost:3000/yeriko?isAdmin=true
  if(req.query.isAdmin === "true") {
    res.end(`Welcome Admin ${req.params.name} to your API`);
  } else {
    es.end(`Welcome ${req.params.name}`);
  }
  res.send("Hello, Welcome to Your ExpressJS Server");
});

app.listen(port, () => {
  console.log(colors.bgMagenta.magenta.italic.bold(`ExpressJS Server is running on http://localhost:${port}`));
});
