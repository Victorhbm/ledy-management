import { StatusCodes } from "http-status-codes";
import Category from "../database/models/Category";

class CategoryService {
  public async create(name: string) {
    const createdCategory = await Category.create({ name });

    return createdCategory;
  };

  public async getAll() {
    const getCategories = await Category.findAll();

    return getCategories;
  };

  public async getById(id: number) {
    const getCategory = await Category.findOne({ where: { id } });

    return getCategory
      ? { code: StatusCodes.OK, data: getCategory }
      : { code: StatusCodes.NOT_FOUND, data: { message: 'Category not found' } };
  };

  public async update(id: number, name: string) {
    const getCategory = await Category.findOne({ where: { id } });

    if (!getCategory) return { code: StatusCodes.NOT_FOUND, message: 'Category not found' };
    
    await Category.update({ name }, { where: { id } });

    return { code: StatusCodes.OK, message: 'Sucessfully updated' };
  };

  public async delete(id: number) {
    await Category.destroy({ where: { id } });
  };
}

export default new CategoryService();