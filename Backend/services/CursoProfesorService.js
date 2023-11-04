const Curso_Profesor = require('../models/CursoProfesorModel'); // Asegúrate de usar la ruta correcta

const CursoProfesorService = {
  async getAll() {
    try {
      const cursosProfesores = await Curso_Profesor.findAll();
      return cursosProfesores;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener la lista de cursos profesores.');
    }
  },

  async get(id) {
    try {
      const cursoProfesor = await Curso_Profesor.findByPk(id);
      if (!cursoProfesor) {
        throw new Error('Curso profesor no encontrado.');
      }
      return cursoProfesor;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el curso profesor.');
    }
  },

  async create(id_profesor, id_curso) {
    try {
      const cursoProfesor = await Curso_Profesor.create({
        id_profesor,
        id_curso,
      });
      return cursoProfesor;
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear el curso profesor.');
    }
  },
};

module.exports = CursoProfesorService;
