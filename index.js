// const express = require("express"); //Requiriendo express
// const faker = require("faker");
// const app = express(); //Creando app con constructor express
// const port = 3005; //puerto:usualmente es por el orden del 3000
// //obteniendo de la aplicación la ruta y un creando callback
// //conmensaje indicando mi servidir
// app.get("/", (req, res) => {
//   //Parámetro 1 es la ruta, el 2 un callback
//   res.send("Este es mi server de express");
// });

// app.get("/nueva-ruta", (req, res) => {
//   res.send("Esta es mi nueva ruta");
// });

// app.get("/products", (req, res) => {
//   res.json(
//     { name: "Product 1", price: 100 },
//     { name: "Product 2", price: 200 },
//   );
// });

// app.get("/products/:id", (req, res) => {
//   const { id } = req.params;
//   res.json({ id, name: "Product 1", price: 100 });
// });



// example of usage http://localhost:3005/usuarios?limit=20&offset=200
app.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send(`there's no parameters`);
  }
});

