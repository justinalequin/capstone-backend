const express = require("express");
const ProductServices = require("../services/ProductServices");

const productRouter = express.Router();

productRouter.post("/upload-product", ProductServices.uploadProduct);

productRouter.get("/get-products", ProductServices.getProducts);

module.exports = productRouter;
