import path from 'path'
import { Sequelize, Model, DataTypes, Association, HasManyCreateAssociationMixin } from 'sequelize'

const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.json')[env];

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] ?? "", config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

class Bench extends Model {
  public id!: number;
  public name!: string;
  
  // 追加する

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public createLog!: HasManyCreateAssociationMixin<Log>

  public static associations() {
    // logs: Association<Bench, Log>;
    this.hasMany(Log, {
      sourceKey: 'id',
      foreignKey: 'benchId',
      constraints: false,
    })
  };
}

Bench.init(
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
    // 追加する
  },
  {
    sequelize,
    tableName: "benches",
  }
);
class Log extends Model {

  public id!: number
  public name!: string
  public body!: string

  // 外部キー
  public benchId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations() {
    this.belongsTo(Bench, { foreignKey: 'benchId', constraints: false });
  }
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
    // 外部キー
    benchId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: 'logs'
  }
);


export { Log, Bench }

