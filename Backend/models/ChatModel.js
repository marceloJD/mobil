const { DataTypes } = require('sequelize');
const sequelize = require('./database');
const Usuario = require('./Usuario');

const Chat = sequelize.define('Chat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fecha_ingreso: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fecha_edicion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  id_usuario1: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id',
    },
  },
  id_usuario2: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id',
    },
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Chat;
