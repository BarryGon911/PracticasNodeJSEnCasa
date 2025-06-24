import express from "express";
import colors from "colors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    colors.bgMagenta.magenta.italic.bold(
      `ExpressJS Server is running on http://localhost:${port}`
    )
  );
});
