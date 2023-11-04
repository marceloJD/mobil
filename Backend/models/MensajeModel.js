 
const { DataTypes } = require('sequelize');
const sequelize = require('./database'); 

const Mensaje = sequelize.define('Mensaje', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  id_chat: {
    type: DataTypes.INTEGER,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
  },
  fecha_ingreso: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Mensaje;
