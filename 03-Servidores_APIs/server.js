const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Start Page</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>About Us</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Requested Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("NodeJS Server is running on Port 3000");
});
