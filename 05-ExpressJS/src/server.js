import express from "express";
import "dotenv/config";
import colors from "colors";

const app = express();
const port = process.env.PORT || 4000; // Default port if not specified by Hosting Provider when deploying the application

app.get("/", (req, res) => {
  console.log("Route / called");
});

app.listen(port, () => {
  console.log(
    colors.bgMagenta.magenta.italic.bold(
      `NodeJS server is running on http://localhost:${port}`
    )
  );
});
