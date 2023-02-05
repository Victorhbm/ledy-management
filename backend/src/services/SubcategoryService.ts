import { StatusCodes } from "http-status-codes";
import Category from "../database/models/Category";
import Subcategory from "../database/models/Subcategory";

class SubcategoryService {
  public async create(categoryID: number, name: string) {
    const getCategory = await Category.findOne({ where: { id: categoryID } });

    if (!getCategory) return { code: StatusCodes.NOT_FOUND, data: { message: 'Category not found' } };

    const subcategoryCreated = await Subcategory.create({ categoryID, name });

    return { code: StatusCodes.CREATED, data: subcategoryCreated };
  };

  public async getByCategoryId(categoryID: number) {
    const getSubcategories = await Subcategory.findAll({ where: { categoryID } });

    return getSubcategories;
  };

  public async update(id: number, name: string) {
    const getSubcategory = await Subcategory.findOne({ where: { id } });

    if (!getSubcategory) return { code: StatusCodes.NOT_FOUND, message: 'Subcategory not found' };
    
    await Subcategory.update({ name }, { where: { id } });

    return { code: StatusCodes.OK, message: 'Sucessfully updated' };
  };

  public async delete(id: number) {
    await Subcategory.destroy({ where: { id } });
  };
}

export default new SubcategoryService();