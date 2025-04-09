const express = require("express");
const routerApi = require("./routes/index");
const { logErrors, errorHandler } = require("./middlewares/errorHandler");
const cors = require("cors");
const app = express();
const port = 3005;

app.use(express.json());
app.use(logErrors);
app.use(errorHandler);
app.use(cors());

routerApi(app);

const whiteList = ["http://localhost:3005", "https://myapp.co"];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Access denied"));
    }
  },
};

app.listen(port, () => {
  console.log("listening on port: " + port);
  console.log("http://localhost:" + port);
});
