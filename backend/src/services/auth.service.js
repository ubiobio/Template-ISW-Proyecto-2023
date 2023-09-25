"use strict";
// Servicio creado para manejar la autenticación de usuarios
const User = require("../models/user.model.js");

const jwt = require("jsonwebtoken");
const {
  ACCESS_JWT_SECRET,
  REFRESH_JWT_SECRET,
} = require("../config/configEnv.js");
const { handleError } = require("../utils/errorHandler");

/**
 * @name login
 * @description Inicia sesión con un usuario
 * @param user {User} - Objeto con los datos del usuario
 * @returns {Promise<null>}
 */
async function login(user) {
  try {
    const { email, password } = user;

    const userFound = await User.findOne({ email: email })
      .populate("roles")
      .exec();
    if (!userFound) {
      return [null, null, "El usuario y/o contraseña son incorrectos"];
    }

    const matchPassword = await User.comparePassword(
      password,
      userFound.password,
    );

    if (!matchPassword) {
      return [null, null, "El usuario y/o contraseña son incorrectos"];
    }

    const accessToken = jwt.sign(
      { email: userFound.email, roles: userFound.roles },
      ACCESS_JWT_SECRET,
      {
        expiresIn: "30s",
      },
    );

    const refreshToken = jwt.sign(
      { email: userFound.email },
      REFRESH_JWT_SECRET,
      {
        expiresIn: "1m", // 7 días
      },
    );

    return [accessToken, refreshToken, null];
  } catch (error) {
    handleError(error, "auth.service -> signIn");
  }
}

/**
 * @name refresh
 * @description Refresca el token de acceso
 * @param {*} req
 * @param {*} res
 */
async function refresh(cookies) {
  try {
    if (!cookies.jwt) return [null, "No hay autorización"];
    const refreshToken = cookies.jwt;

    const accessToken = await jwt.verify(
      refreshToken,
      REFRESH_JWT_SECRET,
      async (err, user) => {
        if (err) return [null, "La sesion a caducado, vuelva a iniciar sesion"];

        const userFound = await User.findOne({
          email: user.email,
        })
          .populate("roles")
          .exec();

        if (!userFound) return [null, "No usuario no autorizado"];

        const accessToken = jwt.sign(
          { email: userFound.email, roles: userFound.roles },
          ACCESS_JWT_SECRET,
          {
            expiresIn: "30s",
          },
        );

        return [accessToken, null];
      },
    );

    return accessToken;
  } catch (error) {
    handleError(error, "auth.service -> refresh");
  }
}

module.exports = {
  login,
  refresh,
};
