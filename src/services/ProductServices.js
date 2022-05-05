const { ProductModel } = require("../models/ProductModel");
const PermissionServices = require("./PermissionServices");

const uploadProduct = async (req, res, next) => {
  try {
    PermissionServices.checkIfAdmin(req);

    const productData = req.body.productData;

    const newProduct = new ProductModel(productData);

    const savedProduct = await newProduct.save();

    const cleanSavedProduct = {
      id: savedProduct.id,
      title: savedProduct.title,
      brand: savedProduct.brand,
      price: savedProduct.price,
      description: savedProduct.description,
      image: savedProduct.image,
    };
    res.send(cleanSavedProduct);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const foundProducts = await ProductModel.find({});

    res.send(foundProducts);
  } catch (error) {
    next(error);
  }
};

const ProductServices = {
  uploadProduct,
  getProducts,
};

module.exports = ProductServices;
