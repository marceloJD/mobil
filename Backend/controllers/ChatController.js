const ChatService = require('../services/ChatService'); // Asegúrate de usar la ruta correcta

const ChatController = {
  create: async (req, res) => {
    try {
      const { titulo, fecha_ingreso, id_usuario1, id_usuario2 } = req.body;
      const chat = await ChatService.create(titulo, fecha_ingreso, id_usuario1, id_usuario2);
      res.status(201).json(chat);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el chat.' });
    }
  },
  
  get: async (req, res) => {
    try {
      const { id } = req.params; // Supongamos que el ID se pasa como un parámetro en la URL
      const chat = await ChatService.get(id);

      if (!chat) {
        return res.status(404).json({ error: 'Chat no encontrado.' });
      }

      res.json(chat);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el chat.' });
    }
  },

  getAll: async (req, res) => {
    try {
      const chats = await ChatService.getAll();
      res.json(chats);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la lista de chats.' });
    }
  },
};

module.exports = ChatController;
