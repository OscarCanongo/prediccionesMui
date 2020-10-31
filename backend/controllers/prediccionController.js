const Prediccion = require("../models/Prediccion");

//Get
exports.getprediccion = async (req, res) => {
  try {
    const prediccion = await Prediccion.find();
    res.json({ prediccion });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Post
exports.create = async (req, res) => {
 
const prediccion = new Prediccion(req.body);

//guarda el Prediccion en la db   
 try{
    await prediccion.save();

    //Todo bien
    res.json({ msg: 'Datos guardados' });


 }catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};