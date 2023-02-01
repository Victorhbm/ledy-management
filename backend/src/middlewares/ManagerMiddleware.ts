import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Manager from "../database/models/Manager";
import ManagerSchemas from "../schemas/ManagerSchemas";

class ManagerMiddleware {
  public async checkEmail(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    const getManagerByEmail = await Manager.findOne({ where: { email } })

    if (getManagerByEmail) {
      res.status(StatusCodes.CONFLICT).json({ message: 'E-mail já cadastrado!' })
    };

    next();
  };

  public registerValidate(req: Request, _res: Response, next: NextFunction) {
    const { error } = ManagerSchemas.registerSchema.validate(req.body);

    if (error) throw error;

    next();
  };

  public loginValidate(req: Request, _res: Response, next: NextFunction) {
    const { error } = ManagerSchemas.loginSchema.validate(req.body);

    if (error) throw error;

    next();
  };
}

export default new ManagerMiddleware();