import express from 'express';
import { loadData } from './src/storage.js';
import buscarRoutes from './src/routes/buscarRoutes.js';
import edadRoutes from './src/routes/edadRoutes.js';
import homeRoutes from './src/routes/homeRoutes.js';
import perfilRoutes from './src/routes/perfilRoutes.js';
import productsRoutes from './src/routes/productsRoutes.js';
import saludoRoutes from './src/routes/saludoRoutes.js';
import sumaRoutes from './src/routes/sumaRoutes.js';
import usersRoutes from './src/routes/usersRoutes.js';
import colors from "colors";
import "dotenv/config";

const PORT = 3000;
await loadData();

const app = express();

app.use(express.json());

app.get('/:name', logger, (req, res) => {
  //http://localhost:3000/Yeriko?isAdmin=true
  if (req.query.isAdmin === 'true') {
    res.end(`Welcome Admin ${req.params.name} to your API`);
  }
  else {
    res.end(`Welcome ${req.params.name}`);
  }
  res.end('Hola');
});

app.use('/api', usersRouter);
//app.use('/api', prodctsRouter);

app.get('/salud/:name', logger, () => {
  const { name } = req.params;
    res.json({mensaje: `Hola ${name}` })
  
});

app.listen(port, () => {
  console.log(
    colors.bgMagenta.magenta.italic.bold(
      `ExpressJS Server is running on http://localhost:${port}`
    )
  );
});
