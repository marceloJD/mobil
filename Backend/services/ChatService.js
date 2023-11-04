const Chat = require('../models/ChatModel'); // Asegúrate de usar la ruta correcta

const ChatService = {
  async getAll() {
    try {
      const chats = await Chat.findAll();
      return chats;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener la lista de chats.');
    }
  },

  async get(id) {
    try {
      const chat = await Chat.findByPk(id);
      if (!chat) {
        throw new Error('Chat no encontrado.');
      }
      return chat;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el chat.');
    }
  },

  async create(titulo, fecha_ingreso, id_usuario1, id_usuario2) {
    try {
      const chat = await Chat.create({
        titulo,
        fecha_ingreso,
        id_usuario1,
        id_usuario2,
      });
      return chat;
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear el chat.');
    }
  },
};

module.exports = ChatService;





