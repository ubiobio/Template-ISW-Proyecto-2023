"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const ProductService = require("../services/product.service");
const { handleError } = require("../utils/errorHandler");

/**
 * Obtiene todos los productos
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function getProducts(req, res) {
  console.log({ getProducts: req.headers });
  try {
    const [products, errorProducts] = await ProductService.getProducts();
    if (errorProducts) return respondError(req, res, 404, errorProducts);

    products.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, products);
  } catch (error) {
    handleError(error, "product.controller -> getProducts");
    respondError(req, res, 400, error.message);
  }
}

/**
 * Crea un nuevo producto
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function createProduct(req, res) {
  try {
    console.log({ createProduct: req.headers });
    const { body } = req;
    const [newProduct, productError] = await ProductService.createProduct(body);

    if (productError) return respondError(req, res, 400, productError);
    if (!newProduct) {
      return respondError(req, res, 400, "No se creo el producto");
    }

    respondSuccess(req, res, 201, newProduct);
  } catch (error) {
    handleError(error, "product.controller -> createProduct");
    respondError(req, res, 500, "No se creo el producto");
  }
}

/**
 * Obtiene un producto por su id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function getProductById(req, res) {
  try {
    const { params } = req;
    const [product, errorProduct] = await ProductService.getProductById(
      params.id,
    );
    if (errorProduct) return respondError(req, res, 404, errorProduct);

    respondSuccess(req, res, 200, product);
  } catch (error) {
    handleError(error, "product.controller -> getProductById");
    respondError(req, res, 400, error.message);
  }
}

/**
 * Actualiza un producto por su id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function updateProductById(req, res) {
  try {
    const { params, body } = req;
    const [product, errorProduct] = await ProductService.updateProductById(
      params.id,
      body,
    );
    if (errorProduct) return respondError(req, res, 404, errorProduct);

    respondSuccess(req, res, 200, product);
  } catch (error) {
    handleError(error, "product.controller -> updateProductById");
    respondError(req, res, 400, error.message);
  }
}

/**
 * Elimina un producto por su id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function deleteProductById(req, res) {
  try {
    const { params } = req;
    const [product, errorProduct] = await ProductService.deleteProductById(
      params.id,
    );
    if (errorProduct) return respondError(req, res, 404, errorProduct);

    respondSuccess(req, res, 200, product);
  } catch (error) {
    handleError(error, "product.controller -> deleteProductById");
    respondError(req, res, 400, error.message);
  }
}

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
