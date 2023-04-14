"use strict";
// Importa el modelo de datos 'User'
const User = require("../models/user.model.js");
const { respondSuccess, respondError } = require("../utils/resHandler");

exports.getUsers = async (req, res) => {
  try {
    const usuarios = await User.find();
    usuarios.length === 0 ? respondSuccess(req, res, 204) :
    respondSuccess(req, res, 200, usuarios);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    const usuario = new User({
      nombre: req.body.nombre,
      email: req.body.email,
    });

    const nuevoUser = await usuario.save();
    respondSuccess(req, res, 200, nuevoUser);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
};
