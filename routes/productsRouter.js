const express = require("express");
const faker = require("faker");
const ProductsService = require("../services/productsService");
const router = express.Router();
const validatorHandler = require("../middlewares/validatorHandler");
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require("../schemas/productSchema");

const service = new ProductsService();

router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get("/:id", async (req, res, next) => {
  validatorHandler(getProductSchema, "params");
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res) => {
  validatorHandler(createProductSchema, "body");
  try {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json({
      status: 201,
      data: newProduct,
      message: "product created successfully",
    });
  } catch (err) {
    next(err);
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  validatorHandler(getProductSchema, "params");
  validatorHandler(updateProductSchema, "body");
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.status(200).json({
      id,
      status: 200,
      data: product,
      message: "product updated successfully",
    });
  } catch (err) {
    next(err);
    res.status(404).json({
      status: 404,
      message: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.delete(id);
    res.status(200).json({
      id,
      status: 200,
      data: response,
      message: "product deleted successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: err.message,
    });
  }
});

router.get("/filter", (req, res) => {
  res.send("This is a filter");
});

module.exports = router;
