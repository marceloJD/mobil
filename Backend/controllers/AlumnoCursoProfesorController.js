const AlumnoCursoProfesorService = require('../services/AlumnoCursoProfesorService'); // Asegúrate de usar la ruta correcta

const AlumnoCursoProfesorController = {
  create: async (req, res) => {
    try {
      const { id_alumno, id_curso_profesor } = req.body;
      const alumnoCursoProfesor = await AlumnoCursoProfesorService.create(id_alumno, id_curso_profesor);
      res.status(201).json(alumnoCursoProfesor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el alumno en curso de profesor.' });
    }
  },
  
  get: async (req, res) => {
    try {
      const { id } = req.params; // Supongamos que el ID se pasa como un parámetro en la URL
      const alumnoCursoProfesor = await AlumnoCursoProfesorService.get(id);

      if (!alumnoCursoProfesor) {
        return res.status(404).json({ error: 'Alumno en curso de profesor no encontrado.' });
      }

      res.json(alumnoCursoProfesor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el alumno en curso de profesor.' });
    }
  },

  getAll: async (req, res) => {
    try {
      const alumnoCursoProfesores = await AlumnoCursoProfesorService.getAll();
      res.json(alumnoCursoProfesores);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la lista de alumnos en cursos de profesores.' });
    }
  },
};

module.exports = AlumnoCursoProfesorController;
