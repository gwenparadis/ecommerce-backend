const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    tag_name: {
      type: DataTypes.STRING
    },
    tag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
