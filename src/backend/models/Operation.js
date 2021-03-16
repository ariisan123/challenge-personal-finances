const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('Operation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY
    },
    type: {
      type: DataTypes.ENUM,
      values: ['in', 'out'],
      default: 'in'
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
