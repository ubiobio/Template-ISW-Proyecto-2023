"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

// Importa el controlador de usuarios
const usuarioController = require("../controllers/user.controller.js");
// Importa el middleware de autorización
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");

// Crea una instancia del enrutador
const router = express.Router();

router.use(authorizationMiddleware.verifyToken);
// Define las rutas para los usuarios
router.get("/", usuarioController.getUsers);
router.post("/", usuarioController.createUser);
router.get("/:id", usuarioController.getUserById);
router.put("/:id", usuarioController.updateUser);
router.delete("/:id", usuarioController.deleteUser);

// Exporta el enrutador
module.exports = router;
