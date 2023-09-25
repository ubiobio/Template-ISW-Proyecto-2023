"use strict";

const Joi = require("joi");

const authLoginBodySchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "El email no puede estar vacío.",
    "any.required": "El email es obligatorio.",
    "string.base": "El email debe ser de tipo string.",
    "string.email": "El email debe tener un formato válido.",
  }),
  password: Joi.string().required().messages({
    "string.empty": "La contraseña no puede estar vacía.",
    "any.required": "La contraseña es obligatoria.",
    "string.base": "La contraseña debe ser de tipo string.",
  }),
});

module.exports = { authLoginBodySchema };
