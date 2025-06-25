import express from "express";
import colors from "colors";
import { logger } from "../src/middlewares/logger.js";

//Importamos la función loadData para cargar los datos al iniciar el servidor y el router de usuarios para manejar las rutas relacionadas con los usuarios.
import { loadData } from "../src/storage.js";
import usersRouter from "../src/routes/usersRoutes.js";
import "dotenv/config";

const port = process.env.PORT || 3000;
await loadData();

const app = express();

// Express debe ser capaz de recibir datos en formato JSON
app.use(express.json());

app.get('/:name', logger, (req, res) => {
  //http://localhost:3000/BarryGon911?isAdmin=true
  if (req.query.isAdmin === 'true') {
    res.end(`Welcome Admin ${req.params.name} to your API`);
  }
  else {
    res.end(`Welcome ${req.params.name}`);
  }
  res.end('Hola');
});

app.use('/api', usersRouter);

app.listen(port, () => {
  console.log(colors.bgMagenta.magenta.italic.bold(`ExpressJS Server is running on http://localhost:${port}`));
});
