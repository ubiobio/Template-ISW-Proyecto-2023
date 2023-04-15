"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

// Agregamos la configuracion de las variables de entorno
const { configEnv } = require("./configEnv.js");
const { handleError } = require("../utils/errorHandler");

// Obtiene las variables de entorno
const { DB_URL } = configEnv();

// Opciones de configuracion para la conexion a la base de datos
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

/**
 * @name setupDB
 * @description Funcion que crea la conexion a la base de datos
 * @returns {Promise<void>}
 * @throws {Error}
 */
async function setupDB() {
  try {
    await mongoose.connect(DB_URL, options);
    console.log("=> Conectado a la base de datos");
  } catch (err) {
    handleError(err, "/configDB.js -> setupDB");
    throw new Error(err);
  }
}

module.exports = { setupDB };
