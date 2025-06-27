import express from "express";
import colors from "colors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let tareas = [
  { id: 1, tarea: "Aprender Node.js", completada: false },
  { id: 2, tarea: "Estudiar Express.js", completada: false },
  { id: 3, tarea: "Practicar JavaScript", completada: false },
];

app.get("/tareas", (req, res) => {
  res.json(tareas);
});

app.post("/tareas", (req, res) => {
  const nuevaTarea = {
    id: tareas.lenght + 1,
    texto: req.body.texto,
    completada: false,
  };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// Se crea una ruta para actualizar una tarea
app.put("/tareas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find((t) => t.id === id);
  
  if (!tarea) {
    return res.status(404).json({ error: "La tareaa NO fue localizada" });
  }
  tarea.texto = req.body.texto || tarea.texto;
  tarea.completada = req.body.completada !== undefined ? req.body.completada : tarea.completada;
  res.json(tarea);
});

app.delete("/tareas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = tareas.find((t) => t.id === id);

  if (!tarea) {
    return res.status(404).json({ error: "La tarea NO fue localizada" });
  }
  tareas = tareas.filter((t) => t.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(
    colors.bgMagenta.magenta.italic.bold(
      `ExpressJS Server is running on http://localhost:${port}`
    )
  );
});
