const express = require("express"); //Requiriendo express
const faker = require("faker");
const router = express.Router(); //Creando router con constructor express

router.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({ categoryId, productId });
});

module.exports = router;