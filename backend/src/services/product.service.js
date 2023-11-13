"use strict";

const Product = require("../models/product.model");
const { handleError } = require("../utils/errorHandler");

/**
 * Obtiene todos los productos de la base de datos
 * @returns {Promise} Promesa con el objeto de los productos
 */
async function getProducts() {
  try {
    const products = await Product.find().exec();
    if (!products) return [null, "No hay productos"];

    return [products, null];
  } catch (error) {
    handleError(error, "product.service -> getProducts");
  }
}

/**
 * Crea un nuevo producto en la base de datos
 * @param {Object} product Objeto de producto
 * @returns {Promise} Promesa con el objeto de producto creado
 */
async function createProduct(product) {
  try {
    const { name, price, description } = product;
    const productFound = await Product.findOne({ name: product.name });
    if (productFound) return [null, "El producto ya existe"];

    const newProduct = new Product({
      name,
      price,
      description,
    });

    await newProduct.save();

    return [newProduct, null];
  } catch (error) {
    handleError(error, "product.service -> createProduct");
  }
}

/**
 * Obtiene un producto por su id de la base de datos
 * @param {string} Id del producto
 * @returns {Promise} Promesa con el objeto de producto
 */
async function getProductById(id) {
  try {
    const product = await Product.findById(id).exec();
    if (!product) return [null, "El producto no existe"];

    return [product, null];
  } catch (error) {
    handleError(error, "product.service -> getProductById");
  }
}

/**
 * Actualiza un producto por su id de la base de datos
 * @param {string} Id del producto
 * @param {Object} product Objeto de producto
 * @returns {Promise} Promesa con el objeto de producto actualizado
 */
async function updateProductById(id, product) {
  try {
    const { name, price, description } = product;
    const productFound = await Product.findById(id);
    if (!productFound) return [null, "El producto no existe"];

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
      },
      { new: true },
    );

    return [updatedProduct, null];
  } catch (error) {
    handleError(error, "product.service -> updateProductById");
  }
}

/**
 * Elimina un producto por su id de la base de datos
 * @param {string} Id del producto
 * @returns {Promise} Promesa con el objeto de producto eliminado
 */
async function deleteProductById(id) {
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) return [null, "El producto no existe"];

    return [product, null];
  } catch (error) {
    handleError(error, "product.service -> deleteProductById");
  }
}

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
