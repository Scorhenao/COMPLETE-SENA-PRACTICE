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
  if (id === 999) {
    res.status(404).json({
      message: "not found",
    });
  } else {
    res.status(200).json({
      id,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
    });
  }
});

router.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({
    status: 201,
    data: body,
    message: "product created successfully",
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(206).json({
    id,
    status: 206,
    data: body,
    message: "product updated partial successfully",
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(204).json({
    id,
    status: 204,
    message: "product deleted successfully",
  });
});

router.get("/filter", (req, res) => {
  res.send("This is a filter");
});

module.exports = router;
