const { DataTypes } = require('sequelize');
const sequelize = require('./database');
const Usuario = require('./Usuario');  // Asegúrate de importar el modelo de Usuario si no lo has hecho

const Curso = sequelize.define('Curso', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  ciclo: {
    type: DataTypes.INTEGER,
  },
  id_director: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,  // Haciendo referencia al modelo Usuario
      key: 'id',
    },
  },
  creditos: {
    type: DataTypes.INTEGER,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Curso;
