// Importa el modulo 'express' para crear las rutas
const express = require("express");

// Inmporta el controlador de autenticación
const authController = require("../controllers/auth.controller.js");

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para la autenticación
// router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);

// Exporta el enrutador
module.exports = router;
