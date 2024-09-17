const mongoose = require('mongoose');


const EventoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Evento', EventoSchema);
