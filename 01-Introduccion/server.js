// Se importa el Framework para NodeJS
const express = require("express");

let port = 0;

const environment = process.argv[2];

if (environment.includes("--dev")) {
  port = 3000;
} else if (environment.includes("--qa")) {
  port = 3001;
}

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from My First Web Server with NodeJS");
});

app.get("/admin", (req, res) => {
  res.send("Hello World from Admin Route");
});

app.listen(port, () => {
  console.log(`Server is Running On Port ${port}`);
  console.log("Argümentos de Línea de Comandos", process.argv);
});
