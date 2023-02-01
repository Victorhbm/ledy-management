import * as Joi from 'joi';

class ManagerSchema {
  public registerSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  public loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  })
};

export default new ManagerSchema();