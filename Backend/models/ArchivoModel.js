 
const { DataTypes } = require('sequelize');
const sequelize = require('./database'); 

const Archivo = sequelize.define('Archivo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  link: {
    type: DataTypes.TEXT,
  },
  fecha_ingreso: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Archivo;

