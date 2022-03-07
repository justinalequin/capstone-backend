const express = require("express");
const { ProductModel } = require("../controllers/ProductController");

const productRouter = express.Router();

productRouter.post("/upload-product", async (req, res) => {
  const productData = req.body.productData;

  const newProduct = new ProductModel(productData);

  const savedProduct = await newProduct.save();

  const cleanedSavedProduct = {
    id: savedProduct.id,
    title: savedProduct.title,
    brand: savedProduct.brand,
    price: savedProduct.price,
    description: savedProduct.description,
    image: savedProduct.image,
  };

  res.send(cleanedSavedProduct);
});

productRouter.get("/get-products", async (req, res) => {
  const foundProducts = await ProductModel.find({});

  res.send(foundProducts);
});

module.exports = productRouter;
