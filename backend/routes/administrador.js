//Rutas para crear administradores
const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/administradorController');
const { check } = require ('express-validator');

//Crea un administrador

// /administrador
router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un mail valido').isEmail(),
        check('password', 'El password debe de ser minimo de 6 caracteres').isLength({ min: 6})
    ],
    administradorController.nuevoAdministrador
);

module.exports = router;