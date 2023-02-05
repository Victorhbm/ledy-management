import { Model, DataTypes } from 'sequelize';
import db from '.';
import Subcategory from './Subcategory';

class Category extends Model {
  declare id: number;
  declare name: string;
}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
}, {
  sequelize: db,
  tableName: 'Categories',
  timestamps: false,
});

Category.hasMany(Subcategory, {
  foreignKey: 'categoryID'
});

export default Category;