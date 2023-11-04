const CursoProfesorService = require('../services/CursoProfesorService'); // Asegúrate de usar la ruta correcta

const CursoProfesorController = {
  create: async (req, res) => {
    try {
      const { id_profesor, id_curso } = req.body;
      const cursoProfesor = await CursoProfesorService.create(id_profesor, id_curso);
      res.status(201).json(cursoProfesor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el curso profesor.' });
    }
  },
  
  get: async (req, res) => {
    try {
      const { id } = req.params; // Supongamos que el ID se pasa como un parámetro en la URL
      const cursoProfesor = await CursoProfesorService.get(id);

      if (!cursoProfesor) {
        return res.status(404).json({ error: 'Curso profesor no encontrado.' });
      }

      res.json(cursoProfesor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el curso profesor.' });
    }
  },

  getAll: async (req, res) => {
    try {
      const cursosProfesores = await CursoProfesorService.getAll();
      res.json(cursosProfesores);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la lista de cursos profesores.' });
    }
  },
};

module.exports = CursoProfesorController;
