import * as Joi from 'joi';

class CustomerSchema {
  public creationAndUpdateSchema = Joi.object({
    name: Joi.string().min(3).required(),
    CPF: Joi.string().min(11),
    email: Joi.string().email(),
    phoneNumber: Joi.string(),
    state: Joi.string(),
    city: Joi.string(),
    neighborhood: Joi.string(),
    address: Joi.string(),
    birthdate: Joi.date(),
  });
}

export default new CustomerSchema();
