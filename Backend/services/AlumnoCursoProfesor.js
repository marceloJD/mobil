const AlumnoCursoProfesor = require('../models/AlumnoCursoProfesorModel'); // Asegúrate de usar la ruta correcta

const AlumnoCursoProfesorService = {
  async getAll() {
    try {
      const alumnoCursoProfesores = await AlumnoCursoProfesor.findAll();
      return alumnoCursoProfesores;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener la lista de alumnos en cursos de profesores.');
    }
  },

  async get(id) {
    try {
      const alumnoCursoProfesor = await AlumnoCursoProfesor.findByPk(id);
      if (!alumnoCursoProfesor) {
        throw new Error('Alumno en curso de profesor no encontrado.');
      }
      return alumnoCursoProfesor;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el alumno en curso de profesor.');
    }
  },

  async create(id_alumno, id_curso_profesor) {
    try {
      const alumnoCursoProfesor = await AlumnoCursoProfesor.create({
        id_alumno,
        id_curso_profesor,
      });
      return alumnoCursoProfesor;
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear el alumno en curso de profesor.');
    }
  },
};

module.exports = AlumnoCursoProfesorService;
