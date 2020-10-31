const express = require("express");
const router = express.Router();
const prediccionController = require("../controllers/prediccionController");

//Get prediccion
router.get("/", prediccionController.getprediccion);

// Post prediccion
router.post("/", prediccionController.create);

module.exports = router;