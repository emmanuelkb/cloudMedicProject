const joi = require("joi");

const registerValidator = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required().min(5),
  phoneNumber: joi
    .string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
  gender: joi.string(),
  height: joi.number(),
  weight: joi.number(),
  currentSubscription: joi.string(),
});

const loginValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().min(5),
});

module.exports = {
  registerValidator,
  loginValidator,
};
