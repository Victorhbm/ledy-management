import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ManagerService from "../services/ManagerService";

class ManagerController {
  public async register(req: Request, res: Response) {
    try {
      const userCreated = await ManagerService.register(req.body);

      return res.status(StatusCodes.CREATED).json(userCreated);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro no servidor!' });
    };
  };

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { code, body } = await ManagerService.login(email, password);

      return res.status(code).json(body);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro no servidor!' });
    }
  }
}

export default new ManagerController();