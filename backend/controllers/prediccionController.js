const Prediccion = require("../models/Prediccion");

//Get
exports.getPrediccion = async (req, res) => {
  try {
    const Prediccion = await Prediccion.find();
    res.json({ Prediccion });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Post
exports.create = async (req, res) => {
 
const Prediccion = new Prediccion(req.body);

//guarda el Prediccion en la db   
 try{
    await Prediccion.save();

    //Todo bien
    res.json({ msg: 'Datos guardados' });


 }catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};