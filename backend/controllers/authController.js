const Administrador = require('../models/Administrador');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env'});
const { validationResult } = require('express-validator');

exports.autenticarAdministrador = async (req, res, next) => {

    // Revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    // Buscar el Administrador para ver si esta registrado
    const { email, password } = req.body;
    const administrador = await Administrador.findOne({  email });
    // console.log(administrador);

    if(!administrador) {
        res.status(401).json({msg : 'El administrador No Existe'});
        return next();
    } 

    // Verificar el password y autenticar el administrador

    if(bcrypt.compareSync(password, administrador.password )) {
        // Crear JWT
        const token = jwt.sign({
            id: administrador._id,
            nombre: administrador.nombre,
            email: administrador.email
        }, process.env.SECRETA, {
            expiresIn: '8h'
        }  );

        res.json({ token })

    } else {
        res.status(401).json({msg: "Password Incorrecto"});
        return next();
    }

    
}

exports.administradorAutenticado = (req, res, next) => {
    res.json({administrador: req.administrador } );
}