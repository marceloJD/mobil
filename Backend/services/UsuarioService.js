const Usuario = require('../models/UsuarioModel'); // Asegúrate de usar la ruta correcta

const UsuarioService = {
  async getAll() {
    try {
      const usuarios = await Usuario.findAll();
      return usuarios;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener la lista de usuarios.');
    }
  },

  async get(id) {
    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        throw new Error('Usuario no encontrado.');
      }
      return usuario;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el usuario.');
    }
  },

  async auth(email, clave) {
    try {
      const usuario = await Usuario.findOne({
        where: {
          email: email,
          clave: clave,
        },
      });
      if (!usuario) {
        throw new Error('Credenciales de autenticación inválidas.');
      }
      return usuario;
    } catch (error) {
      console.error(error);
      throw new Error('Error al autenticar al usuario.');
    }
  },

  async create(nombre, DNI, codigo, email, clave, claveRecuperacion, rol) {
    try {
      const usuario = await Usuario.create({
        nombre,
        DNI,
        codigo,
        email,
        clave,
        claveRecuperacion,
        rol,
      });
      return usuario;
    } catch (error) {
      console.error(error);
      throw new Error('Error al crear el usuario.');
    }
  },
};

module.exports = UsuarioService;
