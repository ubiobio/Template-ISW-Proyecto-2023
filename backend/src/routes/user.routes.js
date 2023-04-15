"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

// Importa el controlador de usuarios
const usuarioController = require("../controllers/user.controller.js");

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios
router.get("/", usuarioController.getUsers);
router.post("/", usuarioController.createUser);

// Exporta el enrutador
module.exports = router;
