const CursoService = require('../services/CursoService');

const CursoController = {
  create: async (req, res) => {
    try {
      const { nombre, ciclo, id_director, creditos } = req.body;
      const curso = await CursoService.create(nombre, ciclo, id_director, creditos);
      res.status(201).json({ curso });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el curso.' });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params; // Supongamos que el ID se pasa como un parámetro en la URL
      const { nombre, ciclo, id_director, creditos } = req.body;
      const curso = await CursoService.update(id, nombre, ciclo, id_director, creditos);

      if (!curso) {
        return res.status(404).json({ error: 'Curso no encontrado.' });
      }

      res.json({ mensaje: 'Curso actualizado con éxito.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el curso.' });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params; // Supongamos que el ID se pasa como un parámetro en la URL
      const deleted = await CursoService.delete(id);

      if (!deleted) {
        return res.status(404).json({ error: 'Curso no encontrado.' });
      }

      res.json({ mensaje: 'Curso eliminado con éxito.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el curso.' });
    }
  },

  get: async (req, res) => {
    try {
      const { id } = req.params; // Supongamos que el ID se pasa como un parámetro en la URL
      const curso = await CursoService.get(id);

      if (!curso) {
        return res.status(404).json({ error: 'Curso no encontrado.' });
      }

      res.json(curso);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el curso.' });
    }
  },

  getAll: async (req, res) => {
    try {
      const cursos = await CursoService.getAll();
      res.json(cursos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la lista de cursos.' });
    }
  },
};

module.exports = CursoController;
