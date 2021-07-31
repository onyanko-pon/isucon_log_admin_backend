import path from 'path'
import { Sequelize, Model, DataTypes } from 'sequelize'

const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.json')[env];

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] ?? "", config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

class Log extends Model {

  public id!: number
  public name!: string
  public body!: string

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Log.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'logs'
  }
);

export { Log }