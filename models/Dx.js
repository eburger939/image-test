const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dx extends Model {
}

Dx.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    diagnosis: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pet_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'pet',
            key: 'id'
        }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dx',
  }
);

module.exports = Dx;
