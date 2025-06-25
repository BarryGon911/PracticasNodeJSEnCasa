import express from "express";
import colors from "colors";
import "dotenv/config";
import { logger } from "../src/middlewares/logger.js";

const app = express();
const port = process.env.PORT || 3000;

app.get("/:name/:product", logger, (req, res) => {
  console.log("params", req.params);
  console.log("query", req.query);
  res.send("Hello, Welcome to Your ExpressJS Server");
});

app.listen(port, () => {
  console.log(
    colors.bgMagenta.magenta.italic.bold(
      `ExpressJS Server is running on http://localhost:${port}`
    )
  );
});
