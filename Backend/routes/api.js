const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');
const UsuarioController = require('../controllers/UsuarioController');
const CursosController = require('../controllers/CursoController');

router.get('/', (req, res) => {
    res.send('¡Hola desde la ruta api!');
});

// AUTH
router.post('/login', LoginController.login);





// ALUMNOS
router.get('/alumnos', UsuarioController.getAll);
router.get('/alumnos/:id', UsuarioController.get);
router.post('/alumnos', UsuarioController.create);
//router.patch('/alumnos/:id', UsuarioController.update);
//router.delete('/alumnos/:id', UsuarioController.delete);


//CURSOS



// CURSOS
router.get('/cursos', CursosController.getAll);
router.get('/cursos/:id', CursosController.get);
router.post('/cursos', CursosController.create);
router.patch('/cursos/:id', CursosController.update);
router.delete('/cursos/:id', CursosController.delete);

/*




*/

module.exports = router;

