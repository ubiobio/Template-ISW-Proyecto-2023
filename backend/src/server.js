// Importa el archivo 'configEnv.js' para cargar las variables de entorno
const { configEnv } = require("./config/configEnv.js");
// Importa el módulo 'cors' para agregar los cors
const cors = require("cors");
// Importa el módulo 'express' para crear la aplicacion web
const express = require("express");
// Importamos morgan para ver las peticiones que se hacen al servidor
const morgan = require("morgan");
// Importa el enrutador principal
const indexRoutes = require("./routes/index.routes.js");
// Importa el archivo 'configDB.js' para crear la conexión a la base de datos
const { setupDB } = require("./config/configDB.js");
// Importa el handler de errores
const { handleFatalError, handleError } = require("./utils/errorHandler.js");
const { createRoles, createUsers } = require("./config/initialSetup");

/**
 * @name setupServer
 * @description Inicia el servidor web
 * @returns {Promise<void>}
 * @throws {Error}
 */
async function setupServer() {
  try {
    // Obtiene las variables de entorno
    const { PORT, HOST } = configEnv();
    // Crea una instancia de la aplicacion
    const server = express();
    // Agrega el middleware para el manejo de datos en formato JSON
    server.use(express.json());
    // Agregamos los cors
    server.use(cors());
    // Agregamos morgan para ver las peticiones que se hacen al servidor
    server.use(morgan("dev"));
    // Agrega el middleware para el manejo de datos en formato URL
    server.use(express.urlencoded({ extended: false }));
    // Agrega el enrutador principal al servidor
    server.use("/api", indexRoutes);
    // Inicia el servidor web en el puerto 3000
    // La funcion de callback muestra un mensaje en la consola indicando que el servidor esta en ejecucion
    server.listen(PORT, () => {
      console.log(`=> Servidor corriendo en ${HOST}:${PORT}/api`);
    });
  } catch (err) {
    handleError(err, "/server.js -> setupServer");
  }
}

/**
 * @name setupAPI
 * @description Inicia la API
 * @returns {Promise<void>}
 * @throws {Error}
 */
async function setupAPI() {
  try {
    // Inicia la conexión a la base de datos
    await setupDB();
    // Inicia el servidor web
    await setupServer();
    // Inicia la creación de los roles
    await createRoles();
    // Inicia la creación del usuario admin y user
    await createUsers();
  } catch (err) {
    handleFatalError(err, "/server.js -> setupAPI");
  }
}

// Inicia la API
setupAPI()
  .then(() => console.log("=> API Iniciada exitosamente"))
  .catch((err) => handleFatalError(err, "/server.js -> setupAPI"));
