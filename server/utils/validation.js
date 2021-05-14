const joi = require("joi");

const registerValidator = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required().min(5),
  phoneNumber: joi.string().required(),
  gender: joi.string(),
  height: joi.number(),
  weight: joi.number(),
  blood: joi.string(),
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
