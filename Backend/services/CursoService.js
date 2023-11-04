const Curso = require('../models/CursoModel'); // Asegúrate de usar la ruta correcta

const CursoService = {
  async getAll() {
    try {
      const cursos = await Curso.findAll();
      return cursos;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener la lista de cursos.');
    }
  },

  async get(id) {
    try {
      const curso = await Curso.findByPk(id);
      if (!curso) {
        throw new Error('Curso no encontrado.');
      }
      return curso;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el curso.');
    }
  },

  async create(nombre, ciclo, id_director, creditos) {
    try {
      const curso = await Curso.create({
        nombre,
        ciclo,
        id_director,
        creditos,
      });
      return curso;
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear el curso.');
    }
  },
};

module.exports = CursoService;

