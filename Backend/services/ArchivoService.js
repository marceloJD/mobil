const Archivo = require('../models/ArchivoModel'); // Asegúrate de usar la ruta correcta

const ArchivoService = {
  async getAll() {
    try {
      const archivos = await Archivo.findAll();
      return archivos;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener la lista de archivos.');
    }
  },

  async get(id) {
    try {
      const archivo = await Archivo.findByPk(id);
      if (!archivo) {
        throw new Error('Archivo no encontrado.');
      }
      return archivo;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el archivo.');
    }
  },

  async create(link, fecha_ingreso) {
    try {
      const archivo = await Archivo.create({
        link,
        fecha_ingreso,
      });
      return archivo;
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear el archivo.');
    }
  },
};

module.exports = ArchivoService;
