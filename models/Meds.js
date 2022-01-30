const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meds extends Model {
}

Meds.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    medication: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_given: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    next_due: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    pet_id: {
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
    modelName: 'meds',
  }
);

module.exports = Meds;
