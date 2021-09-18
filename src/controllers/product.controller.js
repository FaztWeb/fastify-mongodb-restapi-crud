const boom = require("boom");

const Product = require("../models/product.model");

const getProducts = async (req, reply) => {
  try {
    const products = await Product.find();

    reply.code(200).send(products);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getProductById = async (req, reply) => {
  try {
    const product = await Product.findById(req.params.id);

    reply.code(200).send(product);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const saveProduct = async (req, reply) => {
  try {
    const product = new Product(req.body);

    await product.save();

    reply.code(201).send(product);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateProduct = async (req, reply) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    reply.code(200).send(product);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteProduct = async (req, reply) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    reply.code(204).send();
  } catch (err) {
    throw boom.boomify(err);
  }
};

module.exports = {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
};
