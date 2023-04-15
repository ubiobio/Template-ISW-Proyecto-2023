"use strict";
// Importa el modelo de datos 'User'
const User = require("../models/user.model.js");
const { handleError } = require('../utils/errorHandler');
const { userSchema } = require('../schema/user.schema');
// Crea los servicios para el modelo de datos 'User'

// Obtiene todos los usuarios
exports.getUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    handleError(error,"user.service.js -> getUsers")
  }
};

// Crea un nuevo usuario
exports.createUser = async (user) => {
  try {
    const {error} = userSchema.validate(user);
    if(error) return null;

    const {name, email} = user;

    const newUser = new User({name, email});
    return await newUser.save();
  } catch (error) {
    handleError(error,"user.service.js -> createUser")
  }
}
