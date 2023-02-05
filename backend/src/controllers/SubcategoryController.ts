import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import SubcategoryService from "../services/SubcategoryService";

class SubcategoryController {
  public async create(req: Request, res: Response) {
    try {
      const { categoryID, name } = req.body;
      const { code, data } = await SubcategoryService.create(categoryID, name);

      return res.status(code).json(data);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
    };
  };

  public async getByCategoryId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const subcategories = await SubcategoryService.getByCategoryId(+id);

      return res.status(StatusCodes.OK).json(subcategories);
    } catch (error:any) {
      console.log(error.message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
    };
  };

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const { code, message } = await SubcategoryService.update(+id, name);

      return res.status(code).json({ message });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
    };
  };

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await SubcategoryService.delete(+id);

      return res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ messge: 'Server error' })
    }
  }
}

export default new SubcategoryController();