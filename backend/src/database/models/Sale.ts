import { Model, DataTypes } from 'sequelize';
import db from '.';
import Customer from './Customer';

class Sale extends Model {
  declare id: number;
  declare customerID: number;
  declare discount: number;
  declare paymentMethod: string;
  declare price: number;
  declare createdAt: Date;
}

Sale.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customerID: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: 'id'
    }
  },
  discount: DataTypes.INTEGER,
  paymentMethod: DataTypes.STRING,
  price: DataTypes.DECIMAL(10, 2),
  createdAt: DataTypes.DATE
}, {
  sequelize: db,
  tableName: 'Sales',
  underscored: true,
  updatedAt: false,
});

export default Sale;