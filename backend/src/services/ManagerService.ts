import { IManager } from "../interfaces/IManager";
import * as Bcrypt from 'bcrypt';
import Manager from "../database/models/Manager";
import Token from "../helpers/Token";
import { StatusCodes } from "http-status-codes";

class ManagerService {
  public async register(managerData: IManager) {
    const { name, email, password } = managerData;

    const passwordHash = await Bcrypt.hash(password, 10);

    const { id } = await Manager.create({ name, email, password: passwordHash });

    const token = Token.sign({ data: { id, name, email } });

    return {
      manager: {
        id,
        name,
        email
      },
      token,
    };
  }

  public async login(email: string, password: string) {
    const getManager = await Manager.findOne({ where: { email } });
    if (!getManager) return { code: StatusCodes.NOT_FOUND, body: { message: 'Email not found' } };

    const checkPassword = await Bcrypt.compare(password, getManager.password);
    if (!checkPassword) return { code: StatusCodes.UNAUTHORIZED, body: { message: 'Incorrect password' } };

    const { id, name } = getManager;
    const token = Token.sign({ data: { id, name, email } });
    const data = {
      user: {
        id,
        name,
        email
      },
      token,
    };

    return { code: StatusCodes.OK, body: data };
  }
}

export default new ManagerService();