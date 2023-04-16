// Autenticacion - Confirmamos si el usuario nos envia el token
const jwt = require("jsonwebtoken");
const { configEnv } = require("../config/configEnv.js");
const { handleError } = require("../utils/errorHandler");

const { JWT_SECRET } = configEnv();
const User = require("../models/user.model.js");
const Role = require("../models/role.model.js");
const { respondError } = require("../utils/resHandler");

// Autenticacion - Verificamos si el token es valido
/**
 * @name verifyToken
 * @description Verifica si el token es valido
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 * @returns {Promise<void>}
 */
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["token"];

    if (!token) return respondError(req, res, 403, "No hay token");

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return respondError(req, res, 404, "Hay token pero no hay usuario");
    }

    // Guardamos el id del usuario en la request para usarlo en los controladores
    req.userId = decoded.id;
    next();
  } catch (error) {
    handleError(error, "authe.middleware -> verifyToken");
  }
};

module.exports = {
  verifyToken,
};
