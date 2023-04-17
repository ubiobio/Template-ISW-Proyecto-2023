const { respondSuccess, respondError } = require("../utils/resHandler");
const AuthServices = require("../services/auth.service");

// /**
//  * @name signUp
//  * @description Registra un nuevo usuario
//  * @param req {Request}
//  * @param res {Response}
//  * @returns {Promise<void>}
//  */
// async function signUp(req, res) {
//   try {
//     const newUser = await AuthServices.signUp(req.body);
//     newUser === null
//       ? respondError(req, res, 400, "User already exists")
//       : respondSuccess(req, res, 201, { newUser });
//   } catch (error) {
//     respondError(req, res, 400, error.message);
//   }
// }

/**
 * @name signIn
 * @description Inicia sesión con un usuario
 * @param req {Request}
 * @param res {Response}
 * @returns {Promise<void>}
 */
async function signIn(req, res) {
  try {
    const token = await AuthServices.signIn(req.body);
    token === null
      ? respondError(req, res, 404, "User not found")
      : respondSuccess(req, res, 200, { token });
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}

module.exports = {
  signIn,
};
