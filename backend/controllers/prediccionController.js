const Prediccion = require("../models/Prediccion");

//Get
exports.getpredicciones = async (req, res) => {
  try {
    const prediccion = await Prediccion.find();
    res.json({ prediccion });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//Get prediccion
exports.getprediccion = async (req, res) => {

    let number;

    if (req.body.date == 2030 && req.body.location.toLowerCase() == "mexico") {
        (number = await Math.floor(Math.random() * (480 - 1)) + 1).toString();
    } else if (req.body.date == 2030 && req.body.location.toLowerCase() == "mundo"){
        (number = await Math.floor(Math.random() * (991 - 481)) + 481).toString();
    } else if(req.body.date == 2040 && req.body.location.toLowerCase() == "mexico"){
        (number = await Math.floor(Math.random() * (1364 - 992)) + 992).toString();
    } else if(req.body.date == 2040 && req.body.location.toLowerCase() == "mundo"){
        (number = await Math.floor(Math.random() * (1869 - 1365)) + 1365).toString();
    }

    try {
      const prediccion = await Prediccion.find({
        id: number
      });
      console.log(prediccion);
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
