import chalk from "chalk";
import saludar from "./saludo.js";
import inquirer from "inquirer";

inquirer.prompt([
  {
    type: "input",
    name: "nombre",
    message: "¿Cómo te llamas?",
  },
  {
    type: "list",
    name: "color",
    message: "¿Cuál es tu color favorito?",
    choices: ["Rojo", "verde", "Azul"],
  },
]).then(respuestas => {
    console.log(saludar(respuestas.nombre));
    console.log(`Tu color favorito es: ${respuestas.color}`);
});
