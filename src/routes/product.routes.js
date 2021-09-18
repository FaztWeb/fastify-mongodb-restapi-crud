const controllers = require("../controllers/product.controller");

const routes = [
  {
    method: "GET",
    url: "/products",
    handler: controllers.getProducts,
  },
  {
    method: "GET",
    url: "/products/:id",
    handler: controllers.getProductById,
  },
  {
    method: "POST",
    url: "/products",
    handler: controllers.saveProduct,
  },
  {
    method: "PUT",
    url: "/products/:id",
    handler: controllers.updateProduct,
  },
  {
    method: "DELETE",
    url: "/products/:id",
    handler: controllers.deleteProduct,
  },
];

module.exports = routes;
