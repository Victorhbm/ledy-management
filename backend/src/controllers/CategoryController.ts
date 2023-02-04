import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CategoryService from "../services/CategoryService";

class CategoryController {
  public async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const categoryCreated = await CategoryService.create(name);

      return res.status(StatusCodes.CREATED).json(categoryCreated);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
    };
  };

  public async getAll(_req: Request, res: Response) {
    try {
      const categories = await CategoryService.getAll();

      return res.status(StatusCodes.OK).json(categories);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
    };
  };

  public async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { code, data } = await CategoryService.getById(+id);

      return res.status(code).json(data);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
    };
  };

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const { code, message } = await CategoryService.update(+id, name);

      return res.status(code).json({ message });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
    };
  };

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await CategoryService.delete(+id);

      return res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ messge: 'Server error' })
    }
  }
}

export default new CategoryController();