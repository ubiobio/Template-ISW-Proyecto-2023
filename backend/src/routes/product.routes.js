"use strict";

const express = require("express");

const productController = require("../controllers/product.controller.js");

const authorizationMiddleware = require("../middlewares/authorization.middleware.js");

const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

const router = express.Router();

router.use(authenticationMiddleware);

router.get("/", productController.getProducts);
router.post("/", productController.createProduct);
router.get("/:id", productController.getProductById);
router.put(
  "/:id",
  authorizationMiddleware.isAdmin,
  productController.updateProductById,
);
router.delete(
  "/:id",
  authorizationMiddleware.isAdmin,
  productController.deleteProductById,
);

module.exports = router;
