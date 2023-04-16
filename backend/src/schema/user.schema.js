const Joi = require("joi");

const name = Joi.string().min(3).max(30).required();
const email = Joi.string().email().required();
const roles = Joi.array()
  .min(1)
  .items(Joi.string().valid("admin", "user"))
  .required();

const userBodySchema = Joi.object({
  name,
  email,
  roles,
});

module.exports = { userBodySchema };
