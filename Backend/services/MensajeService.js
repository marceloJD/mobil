const Mensaje = require('../models/MensajeModel'); // Asegúrate de usar la ruta correcta

const MensajeService = {
  async getAll() {
    try {
      const mensajes = await Mensaje.findAll();
      return mensajes;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener la lista de mensajes.');
    }
  },

  async get(id) {
    try {
      const mensaje = await Mensaje.findByPk(id);
      if (!mensaje) {
        throw new Error('Mensaje no encontrado.');
      }
      return mensaje;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el mensaje.');
    }
  },

  async create(contenido, id_chat, id_usuario, fecha_ingreso) {
    try {
      const mensaje = await Mensaje.create({
        contenido,
        id_chat,
        id_usuario,
        fecha_ingreso,
      });
      return mensaje;
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear el mensaje.');
    }
  },
};

module.exports = MensajeService;
