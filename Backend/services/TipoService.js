const Tipo = require('../models/TipoModel'); // Asegúrate de usar la ruta correcta

const TipoService = {
  async getAll() {
    try {
      const tipos = await Tipo.findAll();
      return tipos;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener la lista de tipos.');
    }
  },

  async get(id) {
    try {
      const tipo = await Tipo.findByPk(id);
      if (!tipo) {
        throw new Error('Tipo no encontrado.');
      }
      return tipo;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el tipo.');
    }
  },

  async create(nombre) {
    try {
      const tipo = await Tipo.create({
        nombre,
      });
      return tipo;
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear el tipo.');
    }
  },
};

module.exports = TipoService;
