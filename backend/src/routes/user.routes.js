"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

// Importa el controlador de usuarios
const usuarioController = require("../controllers/user.controller.js");
// Importa el middleware de autorización
const authoMiddleware = require("../middlewares/autho.middleware.js");

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios
router.get("/", usuarioController.getUsers);
router.post("/", authoMiddleware.isAdmin, usuarioController.createUser);
router.get("/:id", usuarioController.getUserById);
router.put("/:id", authoMiddleware.isAdmin, usuarioController.updateUser);
router.delete("/:id", authoMiddleware.isAdmin, usuarioController.deleteUser);

// Exporta el enrutador
module.exports = router;
