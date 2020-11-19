const Administrador = require('../models/Administrador');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.nuevoAdministrador = async (req, res) => {

    // Mostrar mensajes de error de express validator
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    
    // Verificar si el Administrador ya estuvo registrado
    const { email, password } = req.body;

    let administrador = await Administrador.findOne({ email });

    if(administrador) {
        return res.status(400).json({ msg: 'El administrador ya esta registrado' });
    }

    // Crear un nuevo administrador
    administrador = new Administrador(req.body);
    
    // Hashear el password
    const salt = await bcrypt.genSalt(10);
    administrador.password = await bcrypt.hash(password, salt );

    try {
        await administrador.save();
        res.json({msg : 'Administrador Creado Correctamente'});
    } catch (error) {
        console.log(error);
    }

}