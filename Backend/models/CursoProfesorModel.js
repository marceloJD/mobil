 
const { DataTypes } = require('sequelize');
const sequelize = require('./database'); 

const CursoProfesor = sequelize.define('CursoProfesor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_profesor: {
    type: DataTypes.INTEGER,
  },
  id_curso: {
    type: DataTypes.INTEGER,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = CursoProfesor;
