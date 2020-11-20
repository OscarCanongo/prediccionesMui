const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Crear el servidor
const app = express();

//Conectar a la base de datos
conectarDB();

//habilitar cors
app.use(cors());

//Habilitar express.json
app.use(express.json({ extended: true}));

//Puerto del server
const port = process.env.PORT || 4000

//Agregar la ruta 
app.use('/predicciones', require('./routes/predicciones'));
app.use('/usuarios', require('./routes/usuarios'));
app.use('/administrador', require('./routes/administrador'));
app.use('/login', require('./routes/auth'));

//Arrancar server
app.listen(port, '0.0.0.0', () => {
    console.log(`El server esta corriendo en el puerto ${port}`);
});
