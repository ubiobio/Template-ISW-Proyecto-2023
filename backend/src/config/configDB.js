"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
import { connect } from "mongoose";

// Agregamos la configuracion de las variables de entorno
import { DB_URL } from "./configEnv.js";
import { handleError } from "../utils/errorHandler.js";

/**  Opciones de configuracion para la conexion a la base de datos */
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

/**
 * Establece la conexión con la base de datos.
 * @async
 * @function setupDB
 * @throws {Error} Si no se puede conectar a la base de datos.
 * @returns {Promise<void>} Una promesa que se resuelve cuando se establece la conexión con la base de datos.
 */
async function setupDB() {
  try {
    await connect(DB_URL, options);
    console.log("=> Conectado a la base de datos");
  } catch (err) {
    handleError(err, "/configDB.js -> setupDB");
  }
}

export { setupDB };
