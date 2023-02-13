import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Customer from '../database/models/Customer';
import CustomerSchemas from '../schemas/CustomerSchemas';

class CustomerMiddleware {
  public async checkExistingEmail(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { email } = req.body;
    const findExistingEmail =
      email && (await Customer.findOne({ where: { email } }));

    if (findExistingEmail)
      return res
        .status(StatusCodes.CONFLICT)
        .json({ message: 'E-mail já cadastrado!' });

    next();
  }

  public async checkExistingCPF(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { CPF } = req.body;
    const findExistingCPF = CPF && (await Customer.findOne({ where: { CPF } }));

    if (findExistingCPF)
      return res
        .status(StatusCodes.CONFLICT)
        .json({ message: 'CPF já cadastrado!' });

    next();
  }

  public validateData(req: Request, _res: Response, next: NextFunction) {
    const { error } = CustomerSchemas.creationAndUpdateSchema.validate(req.body);

    if (error) throw error;

    next();
  }
}

export default new CustomerMiddleware();
