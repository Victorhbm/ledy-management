import { Model, DataTypes } from 'sequelize';
import db from '.';
import Category from './Category';
import Subcategory from './Subcategory';

class Product extends Model {
  declare id: number;
  declare name: string;
  declare category: number | undefined;
  declare subcategory: number | undefined;
  declare size: string;
  declare salePrice: number;
  declare costPrice: number;
  declare percentage: number;
  declare color: string | undefined;
  declare observation: string | undefined;
  declare createdAt: Date;
}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  categoryID: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id'
    }
  },
  subcategoryID: {
    type: DataTypes.INTEGER,
    references: {
      model: Subcategory,
      key: 'id'
    }
  },
  size: DataTypes.STRING,
  salePrice: DataTypes.NUMBER,
  costPrice: DataTypes.NUMBER,
  percentage: DataTypes.NUMBER,
  color: DataTypes.STRING,
  observation: DataTypes.STRING,
  createdAt: DataTypes.DATE,
}, {
  sequelize: db,
  tableName: 'Products',
  underscored: true,
  updatedAt: false,
});

Product.hasOne(Category, {
  foreignKey: 'categoryID'
});

export default Product;