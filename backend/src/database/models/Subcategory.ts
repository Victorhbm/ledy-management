import { Model, DataTypes } from 'sequelize';
import db from '.';
import Category from './Category';

class Subcategory extends Model {
  declare id: number;
  declare name: string;
  declare categoryID: number;
}

Subcategory.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  categoryID: {
    type: DataTypes.INTEGER,
    field: 'category_id',
    references: {
      model: Category,
      key: 'id'
    }
  },
}, {
  sequelize: db,
  tableName: 'Subcategories',
  timestamps: false,
});

export default Subcategory;