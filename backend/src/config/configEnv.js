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
const ACCESS_JWT_SECRET = process.env.ACCESS_JWT_SECRET;
const REFRESH_JWT_SECRET = process.env.REFRESH_JWT_SECRET;

module.exports = { PORT, HOST, DB_URL, ACCESS_JWT_SECRET, REFRESH_JWT_SECRET };
