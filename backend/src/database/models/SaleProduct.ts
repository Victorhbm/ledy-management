import { Model, DataTypes } from 'sequelize';
import db from '.';
import Product from './Product';
import Sale from './Sale';

class SaleProduct extends Model {
  declare id: number;
  declare productID: number;
  declare saleID: number;
  declare quantity: number;
}

SaleProduct.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productID: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id'
    }
  },
  saleID: {
    type: DataTypes.INTEGER,
    references: {
      model: Sale,
      key: 'id'
    }
  },
  quantity: DataTypes.INTEGER,
}, {
  sequelize: db,
  tableName: 'SalesProducts',
  timestamps: false,
  underscored: true,
});

export default SaleProduct;