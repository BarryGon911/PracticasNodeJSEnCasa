import colors from "colors";
import server from './server.js';

const port = process.env.PORT || 4000;// Default port if not specified by Hosting Provider when deploying the application

server.listen(port, () => {
  console.log(colors.bgMagenta.magenta.italic.bold(`NodeJS server is running on http://localhost:${port}`));
});
