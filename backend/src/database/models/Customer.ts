import { Model, DataTypes, DateOnlyDataType } from 'sequelize';
import db from '.';

class Customer extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare CPF: string;
  declare phoneNumber: string;
  declare state: string;
  declare city: string;
  declare neighborhood: string;
  declare address: string;
  declare birthdate: DateOnlyDataType;
  declare createdAt: Date;
}

Customer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  CPF: {
    type: DataTypes.STRING,
    field: 'CPF'
  },
  phoneNumber: DataTypes.STRING,
  state: DataTypes.STRING,
  city: DataTypes.STRING,
  neighborhood: DataTypes.STRING,
  address: DataTypes.TEXT,
  birthdate: DataTypes.DATEONLY,
  createdAt: DataTypes.DATE,
}, {
  sequelize: db,
  tableName: 'Customers',
  underscored: true,
  updatedAt: false,
});

export default Customer;