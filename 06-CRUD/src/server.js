import express from "express";
import colors from "colors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to ExpressJS");
});

app.get("/memes", (req, res) => {
  res.json({
    image: "05-ExpressJS/src/DoggyFace.png",
    description: "When you realize your Doggie face on Mondays",
  });
});

app.get("/libros/:id", (req, res) => {
  const libroId = req.params.id;// Accessing the ID from the URL parameters
  res.send(`Book ID: ${libroId} succesfully located`);
});

app.listen(port, () => {
  console.log(
    colors.bgMagenta.magenta.italic.bold(
      `ExpressJS Server is running on http://localhost:${port}`
    )
  );
});
