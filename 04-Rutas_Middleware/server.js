const http = require("http");
const PORT = 3000;

function logEvents(req, resp, next) {
  const dateTime = new Date();
  const fecha = dateTime.tolocalDateString();
  const tiempo = dateTime.tolocalTimeString();
  console.log(`${fecha}-${tiempo} | Solicitud a: ${req.url}`);
  next();
}

function validarNombre(req, res, next) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const nombre = url.searchParams.get("name");
  if (!nombre) {
    res.statusCode = 400;
    return res.end("Falta el parámetro de la URL");
  }
}

const server = http.createServer((req, res) => {
  logEvents(req, res, () => {
    validarNombre(req, res, () => {
      if (req.url === "/") {
        res.end("Welcome Gallegos");
      } else {
        res.end("404");
      }
    })
  });
});

server.listen(PORT, () => {
  console.log(`NodeJS Server is running on Port ${PORT}`);
});
