const Usuario = require('../models/Usuario');
const { validationResult } = require('express-validator');

exports.nuevoUsuario = async (req, res) => {

    // Mostrar mensajes de error de express validator
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    
    // Verificar si el usuario ya estuvo registrado
    const { email, edad, posicion, genero } = req.body;

    // Crear un nuevo usuario
    usuario = new Usuario(req.body);

    try {
        await usuario.save();
        res.json({msg : 'Usuario Creado Correctamente'});
    } catch (error) {
        console.log(error);
    }

}

//Get
exports.getUsuarios = async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.json({ usuarios });
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  };