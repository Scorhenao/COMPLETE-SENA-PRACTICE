const express = require("express");
const routerApi = require("./routes/index");
const { logErrors, errorHandler } = require("./middlewares/errorHandler");

const app = express();
const port = 3005;

app.use(express.json());
app.use(logErrors);
app.use(errorHandler);

routerApi(app);

app.listen(port, () => {
  console.log("listening on port: " + port);
  console.log("http://localhost:" + port);
});
