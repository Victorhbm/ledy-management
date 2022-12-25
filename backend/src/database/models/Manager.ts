import { Model, DataTypes } from 'sequelize';
import db from '.';

class Manager extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

Manager.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  sequelize: db,
  tableName: 'Managers',
  timestamps: false,
});

export default Manager;