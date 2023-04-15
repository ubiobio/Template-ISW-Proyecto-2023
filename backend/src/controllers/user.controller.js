"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const UserService = require("../services/user.service");
const { handleError } = require("../utils/errorHandler");

exports.getUsers = async (req, res) => {
  try {
    const usuarios = await UserService.getUsers();
    usuarios.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, usuarios);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    const nuevoUser = await UserService.createUser(req.body);
    nuevoUser === null
      ? respondError(
          req,
          res,
          400,
          "Error en la validacion de datos",
          "Bad Request",
          { message: "Verifique los datos ingresados" }
        )
      : respondSuccess(req, res, 201, nuevoUser);
  } catch (error) {
    handleError(error, "user.controller.js -> createUser");
    respondError(req, res, 400, error.message);
  }
};
