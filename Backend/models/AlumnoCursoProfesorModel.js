 
const { DataTypes } = require('sequelize');
const sequelize = require('./database'); 

const AlumnoCursoProfesor = sequelize.define('AlumnoCursoProfesor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_alumno: {
    type: DataTypes.INTEGER,
  },
  id_curso_profesor: {
    type: DataTypes.INTEGER,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = AlumnoCursoProfesor;
