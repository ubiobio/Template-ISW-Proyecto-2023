"use strict";
// Importa el modulo 'path' para obtener la ruta absoluta del archivo .env.local.example
const path = require("path");

const envFilePath = path.resolve(__dirname, ".env");
// Carga las variables de entorno desde el archivo .env.local.example
require("dotenv").config({ path: envFilePath });

// Retornamos las variables de entorno
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const DB_URL = process.env.DB_URL;
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = { PORT, HOST, DB_URL, JWT_SECRET };
