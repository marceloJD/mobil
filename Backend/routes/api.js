const express = require('express');
const router = express.Router();


const LoginController = require('../controllers/LoginController');
const UsuarioController = require('../controllers/UsuarioController');
const CursoController = require('../controllers/CursoController');
const AlumnoCursoProfesorController = require('../controllers/AlumnoCursoProfesorController');
const ArchivoController = require('../controllers/ArchivoController');
const ChatController = require('../controllers/ChatController');
const MensajeController = require('../controllers/MensajeController');
const CursoProfesorController = require('../controllers/CursoProfesorController');

router.get('/', (req, res) => {
  res.send('¡Hola desde la ruta api!');
});

// AUTH
router.post('/login', LoginController.login);

// USUARIOS
router.get('/usuarios', UsuarioController.getAll);
router.get('/usuarios/:id', UsuarioController.get);
router.post('/usuarios', UsuarioController.create);
//router.patch('/usuarios/:id', UsuarioController.update);
//router.delete('/usuarios/:id', UsuarioController.delete);

// CURSOS
router.get('/cursos', CursoController.getAll);
router.get('/cursos/:id', CursoController.get);
router.post('/cursos', CursoController.create);
router.patch('/cursos/:id', CursoController.update);
router.delete('/cursos/:id', CursoController.delete);

// ALUMNOS EN CURSOS DE PROFESORES
router.get('/alumnos-curso-profesor', AlumnoCursoProfesorController.getAll);
router.get('/alumnos-curso-profesor/:id', AlumnoCursoProfesorController.get);
router.post('/alumnos-curso-profesor', AlumnoCursoProfesorController.create);

// ARCHIVOS
router.get('/archivos', ArchivoController.getAll);
router.get('/archivos/:id', ArchivoController.get);
router.post('/archivos', ArchivoController.create);

// CHATS
router.get('/chats', ChatController.getAll);
router.get('/chats/:id', ChatController.get);
router.post('/chats', ChatController.create);

// MENSAJES
router.get('/mensajes', MensajeController.getAll);
router.get('/mensajes/:id', MensajeController.get);
router.get('/mensajesByChat/:id', MensajeController.getByChatId);
router.post('/mensajes', MensajeController.create);

// CURSOS DE PROFESORES
router.get('/cursos-profesor', CursoProfesorController.getAll);
router.get('/cursos-profesor/:id', CursoProfesorController.get);
router.post('/cursos-profesor', CursoProfesorController.create);
/*




*/

module.exports = router;

