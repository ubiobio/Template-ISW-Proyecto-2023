'use strict';
// Importa el modulo 'express' para crear las rutas
const express = require('express');

// Importa el enrutador de usuarios
const userRoutes = require('./user.routes.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use('/users', userRoutes);

// Exporta el enrutador
module.exports = router;
