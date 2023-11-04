const UsuarioService = require('../services/UsuarioService');

const UsuarioController = {
  
  create: async (req, res) => {
    try {
      const { nombre, DNI, codigo, email, clave, claveRecuperacion, rol } = req.body;
      const usuario = await UsuarioService.create(nombre, DNI, codigo, email, clave, claveRecuperacion, rol);
      res.status(201).json({ usuario, auth: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el usuario.', auth: false });
    }
  },
  
  get: async (req, res) => {
    try {
      const { id } = req.params; // Supongamos que el ID se pasa como un parámetro en la URL
      const usuario = await UsuarioService.get(id);

      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
      }

      res.json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el usuario.' });
    }
  },

  getAll: async (req, res) => {
    try {
      const usuarios = await UsuarioService.getAll();
      res.json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la lista de usuarios.' });
    }
  },
  

};

module.exports = UsuarioController;

