const Joi = require("joi");

const name = Joi.string().min(3).max(30).required();
const email = Joi.string().email().required();

const userSchema = Joi.object({
  name,
  email,
});

module.exports = { userSchema };
