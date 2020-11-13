const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    edad: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true
    },
    posicion: {
        type: Number,
        required: true
    },
    genero: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema);