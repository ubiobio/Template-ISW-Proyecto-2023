"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const { handleError } = require("../utils/errorHandler");
const AuthServices = require("../services/auth.service");
const { authLoginBodySchema } = require("../schema/auth.schema");

/**
 * @name login
 * @description Inicia sesión con un usuario
 * @param {Object} req -  Request object
 * @param {Object} res - Response object
 */
async function login(req, res) {
  try {
    const { error: bodyError } = authLoginBodySchema.validate(req.body);
    if (bodyError) return respondError(req, res, 400, bodyError.message);

    const [accessToken, refreshToken, errorToken] = await AuthServices.login(
      req.body,
    );
    if (errorToken) return respondError(req, res, 400, errorToken);

    // * Existen mas opciones de seguirdad para las cookies *//
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días
    });

    respondSuccess(req, res, 200, { accessToken });
  } catch (error) {
    handleError(error, "auth.controller -> login");
    respondError(req, res, 400, error.message);
  }
}

/**
 * @name logout
 * @description Cierra la sesión del usuario
 * @param {Object} req -  Request object
 * @param {Object} res - Response object
 * @returns
 */
async function logout(req, res) {
  try {
    const cookies = req.cookies;
    if (!cookies?.jwt) return respondError(req, res, 400, "No hay token");
    res.clearCookie("jwt", { httpOnly: true });
    respondSuccess(req, res, 200, { message: "Sesión cerrada correctamente" });
  } catch (error) {
    handleError(error, "auth.controller -> logout");
    respondError(req, res, 400, error.message);
  }
}

/**
 * @name refresh
 * @description Refresca el token de acceso
 * @param {Object} req -  Request object
 * @param {Object} res - Response object
 */
async function refresh(req, res) {
  try {
    const cookies = req.cookies;
    if (!cookies?.jwt) return respondError(req, res, 400, "No hay token");

    const [accessToken, errorToken] = await AuthServices.refresh(cookies);

    if (errorToken) return respondError(req, res, 400, errorToken);

    respondSuccess(req, res, 200, { accessToken });
  } catch (error) {
    handleError(error, "auth.controller -> refresh");
    respondError(req, res, 400, error.message);
  }
}

module.exports = {
  login,
  logout,
  refresh,
};
