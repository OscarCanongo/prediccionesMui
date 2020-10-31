const mongoose = require('mongoose');

const PrediccionSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true
      },
    date: {
      type: Number,
      require: true
    },
    location: {
      type: String,
      require: true
    },
    text: {
        type: String,
        require: true
      }
});

module.exports = mongoose.model('Prediccion', PrediccionSchema);