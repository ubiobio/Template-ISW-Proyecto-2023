"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

// Agregamos la configuracion de las variables de entorno
const { configEnv } = require("./configEnv.js");

// Obtiene las variables de entorno
const { DB_URL } = configEnv();

// Opciones de configuracion para la conexion a la base de datos
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Conecta a la base de datos
mongoose
  .connect(DB_URL, options)
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.log(err));
