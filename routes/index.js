const usersRouter = require("./usersRouter");
const productsRouter = require("./productsRouter");
const categoriesRouter = require("./categoriesRouter");
const mainPath = "/api";

const express = require("express");

function routerApi(app) {
  const router = express.Router();
  app.use(mainPath + "/v1", router);
  
  router.use("/users", usersRouter);
  router.use("/products", productsRouter);
  router.use("/categories", categoriesRouter);

  // if u have another version of the api, you can add it here
  // const router2 = express.Router();
  // app.use(mainPath + "/v2", router2);
}

module.exports = routerApi;
