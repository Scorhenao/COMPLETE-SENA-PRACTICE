const express = require("express");
const faker = require("faker");
const ProductsService = require("../services/productsService");
const router = express.Router();

const service = new ProductsService();

router.get("/", (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
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
