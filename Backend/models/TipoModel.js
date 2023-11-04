 
const { DataTypes } = require('sequelize');
const sequelize = require('./database'); 

const Tipo = sequelize.define('Tipo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.TEXT,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Tipo;
