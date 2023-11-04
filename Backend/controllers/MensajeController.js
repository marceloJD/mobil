const MensajeService = require('../services/MensajeService'); // Asegúrate de usar la ruta correcta

const MensajeController = {
    getByChatId: async (req, res) => {
        try {
            const { id } = req.params;
            const mensajes = await MensajeService.getByChatId(id);
      
            if (!mensajes) {
              return res.status(404).json({ error: 'Mensaje no encontrado.' });
            }
      
            res.json(mensajes);
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener el mensaje.' });
          }
      },
  create: async (req, res) => {
    try {
      const { contenido, id_chat, id_usuario, fecha_ingreso } = req.body;
      const mensaje = await MensajeService.create(contenido, id_chat, id_usuario, fecha_ingreso);
      res.status(201).json(mensaje);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el mensaje.' });
    }
  },
  
  get: async (req, res) => {
    try {
      const { id } = req.params; // Supongamos que el ID se pasa como un parámetro en la URL
      const mensaje = await MensajeService.get(id);

      if (!mensaje) {
        return res.status(404).json({ error: 'Mensaje no encontrado.' });
      }

      res.json(mensaje);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el mensaje.' });
    }
  },

  getAll: async (req, res) => {
    try {
      const mensajes = await MensajeService.getAll();
      res.json(mensajes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la lista de mensajes.' });
    }
  },
};

module.exports = MensajeController;
