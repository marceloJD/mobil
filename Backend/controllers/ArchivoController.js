const ArchivoService = require('../services/ArchivoService'); // Asegúrate de usar la ruta correcta

const ArchivoController = {
  create: async (req, res) => {
    try {
      const { link, fecha_ingreso } = req.body;
      const archivo = await ArchivoService.create(link, fecha_ingreso);
      res.status(201).json(archivo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el archivo.' });
    }
  },
  
  get: async (req, res) => {
    try {
      const { id } = req.params; // Supongamos que el ID se pasa como un parámetro en la URL
      const archivo = await ArchivoService.get(id);

      if (!archivo) {
        return res.status(404).json({ error: 'Archivo no encontrado.' });
      }

      res.json(archivo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el archivo.' });
    }
  },

  getAll: async (req, res) => {
    try {
      const archivos = await ArchivoService.getAll();
      res.json(archivos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la lista de archivos.' });
    }
  },
};

module.exports = ArchivoController;
