"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const path_1 = __importDefault(require("path"));
const sequelize_1 = require("sequelize");
const basename = path_1.default.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.json')[env];
let sequelize;
if (config.use_env_variable) {
    sequelize = new sequelize_1.Sequelize((_a = process.env[config.use_env_variable]) !== null && _a !== void 0 ? _a : "", config);
}
else {
    sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
}
class Log extends sequelize_1.Model {
}
exports.Log = Log;
Log.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    logType: {
        type: sequelize_1.DataTypes.STRING,
        values: [
            "none",
            "nginx"
        ],
        defaultValue: "none"
    },
    body: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'logs'
});
