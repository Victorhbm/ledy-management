import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import CustomerService from '../services/CustomerService';

class CustomerController {
  public async create(req: Request, res: Response) {
    try {
      const customerCreated = await CustomerService.create(req.body);

      return res.status(StatusCodes.CREATED).json(customerCreated);
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Server error' });
    }
  }

  public async getAll(_req: Request, res: Response) {
    try {
      const customers = await CustomerService.getAll();

      return res.status(StatusCodes.OK).json(customers);
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Server error' });
    }
  }

  public async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { code, data } = await CustomerService.getById(+id);

      return res.status(code).json(data);
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Server error' });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { code, message } = await CustomerService.update(+id, req.body);

      return res.status(code).json({ message });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Server error' });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await CustomerService.delete(+id);

      return res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ messge: 'Server error' });
    }
  }
}

export default new CustomerController();
