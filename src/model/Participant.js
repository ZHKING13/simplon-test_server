const mongoose = require('mongoose')
const Schema = mongoose.Schema
    // creer le schema participant
const ParticipantSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true,
    },
    numero: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

})
module.exports = Participant = mongoose.model('Participant', ParticipantSchema)