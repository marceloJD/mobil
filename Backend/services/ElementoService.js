const Elemento = require('../models/ElementoModel'); // Asegúrate de usar la ruta correcta

const ElementoService = {
  async getAll() {
    try {
      const elementos = await Elemento.findAll();
      return elementos;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener la lista de elementos.');
    }
  },

  async get(id) {
    try {
      const elemento = await Elemento.findByPk(id);
      if (!elemento) {
        throw new Error('Elemento no encontrado.');
      }
      return elemento;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el elemento.');
    }
  },

  async create(id_curso_profesor, id_elemento_padre, contenido, tipo, complementos) {
    try {
      const elemento = await Elemento.create({
        id_curso_profesor,
        id_elemento_padre,
        contenido,
        tipo,
        complementos,
      });
      return elemento;
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear el elemento.');
    }
  },
};

module.exports = ElementoService;
