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
  const newProduct = service.create(body);
  res.status(201).json({
    status: 201,
    data: newProduct,
    message: "product created successfully",
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.status(200).json({
    id,
    status: 200,
    data: product,
    message: "product updated successfully",
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const response = service.delete(id);
  res.status(200).json({
    id,
    status: 200,
    data: response,
    message: "product deleted successfully",
  });
});

router.get("/filter", (req, res) => {
  res.send("This is a filter");
});

module.exports = router;
