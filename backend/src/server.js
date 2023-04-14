// Importa el archivo 'configEnv.js' para cargar las variables de entorno
const { configEnv } = require("./config/configEnv.js");
//Importa el módulo 'cors' para agregar los cors
const cors = require('cors');
// Importa el módulo 'express' para crear la aplicacion web
const express = require("express");
// Importa el enrutador principal
const indexRoutes = require("./routes/index.routes.js");
// Obtiene las variables de entorno
const { PORT,HOST } = configEnv();
const {setupDB} = require('./config/configDB.js')

// Importa el handler de errores
const {handleFatalError,handleError} = require('./utils/errorHandler.js')

async function setupServer(){
  try{
    // Crea una instancia de la aplicacion
    const app = express();
    // Agrega el middleware para el manejo de datos en formato JSON
    app.use(express.json());
    // Agregamos los cors
    app.use(cors())
    // Agrega el enrutador principal al servidor
    app.use("/api", indexRoutes);
    // Inicia el servidor web en el puerto 3000
    // La funcion de callback muestra un mensaje en la consola indicando que el servidor esta en ejecucion
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en ${HOST}:${PORT}/api`);
    });
  }catch (err){
    handleError(err, '/server.js -> setupServer')
  }
}

async function setupAPI(){
  try{
    await setupDB()
    await setupServer()
  }catch (err){
    handleFatalError(err, '/server.js -> setupAPI')
  }
}

setupAPI().then(() => console.log('API Iniciada exitosamente'))
  .catch(() => console.log('Error al iniciar la API'))
