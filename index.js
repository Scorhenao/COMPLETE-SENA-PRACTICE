const express = require("express");
const routerApi = require("./routes/index");

const app = express();
const port = 3005;
app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log("listening on port: " + port);
});
