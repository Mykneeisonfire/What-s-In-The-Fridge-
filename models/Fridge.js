const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Fridge extends Model {}

Fridge.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.STRING,
    },
    fridge_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'fridge',
  }
);

module.exports = Fridge;