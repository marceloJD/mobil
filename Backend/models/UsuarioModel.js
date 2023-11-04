const { DataTypes } = require('sequelize');
const sequelize =  require('./database'); 

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  DNI: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  codigo: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  clave: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  claveRecuperacion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rol: {
    type: DataTypes.INTEGER,
  },
},  {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Usuario;
