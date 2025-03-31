const express = require("express");
const faker = require("faker");
const router = express.Router();

router.get("/", (req, res) => {
  const prods = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    prods.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      thumbnail: faker.image.imageUrl(),
    });
  }
  res.json(prods);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  });
});

router.get("/filter", (req, res) => {
  res.send("This is a filter");
});

module.exports = router;
