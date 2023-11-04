 
const { DataTypes } = require('sequelize');
const sequelize = require('./database'); 

const Elemento = sequelize.define('Elemento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_curso_profesor: {
    type: DataTypes.INTEGER,
  },
  id_elemento_padre: {
    type: DataTypes.INTEGER,
  },
  contenido: {
    type: DataTypes.TEXT,
  },
  tipo: {
    type: DataTypes.INTEGER,
  },
  complementos: {
    type: DataTypes.TEXT,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Elemento;
