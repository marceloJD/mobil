const UsuarioService = require('../services/UsuarioService');

const LoginController = {
  login: async (req, res) => {
    try {
      const { email, clave } = req.body; 
      if (!email || !clave) {
        return res.status(400).json({ error: 'Debes proporcionar un correo electrónico y una contraseña.' ,auth:false});
      }

      const usuario = await UsuarioService.auth(email, clave);

      if (!usuario) {
        return res.status(401).json({ error: 'Credenciales de autenticación inválidas.' });
      }

      res.json({usuario,auth:true}); // Puedes devolver el usuario autenticado o el token aquí
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al autenticar al usuario.' ,auth:false});
    }
  },
  

};

module.exports = LoginController;

