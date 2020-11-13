//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { check } = require ('express-validator');

//Crea un usuario

// api/usuarios
router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('edad', 'El nombre es obligatorio').not().isEmpty(),
        check('posicion', 'El nombre es obligatorio').not().isEmpty(),
        check('genero', 'El nombre es obligatorio').not().isEmpty()
    ],
    usuarioController.nuevoUsuario
);

router.get("/", usuarioController.getUsuarios);

module.exports = router;