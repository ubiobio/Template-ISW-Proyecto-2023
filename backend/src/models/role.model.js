"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

const ROLES = ["user", "admin"];

// Crea el esquema de la coleccion 'roles'
const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ROLES,
    required: true,
  },
});

// Crea el modelo de datos 'Role' a partir del esquema 'roleSchema'
const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
