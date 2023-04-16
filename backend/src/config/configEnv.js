"use strict";
// Importa el modulo 'path' para obtener la ruta absoluta del archivo .env.example
const path = require("path");

/**
 * @name configEnv
 * @description Funcion que obtiene las variables de entorno
 * @returns {{PORT: String, DB_URL: String, HOST: String}}
 */
const configEnv = () => {
  const envFilePath = path.resolve(__dirname, ".env");
  // Carga las variables de entorno desde el archivo .env.example
  require("dotenv").config({ path: envFilePath });
  // Retorna un objeto con las variables de entorno
  return {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  };
};

module.exports = { configEnv };
