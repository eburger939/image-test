const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vax extends Model {
}

Vax.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    vax_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    administered_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    next_due: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pet_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'pet',
            key: 'id'
        }
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vax',
  }
);

module.exports = Vax;