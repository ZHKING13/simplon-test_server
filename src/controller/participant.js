const Participant = require('../model/Participant')
    // ajouter un participant
const addParticipant = async(req, res) => {
        try {
            const { nom, prenom, numero, email } = req.body
                // verifi si un participant a deja le numero 
            const participant = await Participant.findOne({ numero })
            if (participant) {
                return res.status(400).send({ message: 'un participant existe deja avec ce numero' })
            }
            // verifi si un participant a deja  l'email
            const checkMail = await Participant.findOne({ email })
            if (checkMail) {
                return res.status(400).send({ message: 'un participant existe deja avec cet email' })
            }
            // creer un nouveau participant
            const newParticipant = new Participant({ nom, prenom, numero, email })

            await newParticipant.save()
            res.status(200).send({ message: 'Participant enregistré avec succes...' })
        } catch (error) {
            res.status(500).send({ message: 'impossible d\'enregistrer le participant' })
        }
    }
    // recuperer la liste des participants
const getAllParticipant = async(req, res) => {
    try {
        const participants = await Participant.find()
        res.status(200).send({ message: 'liste des participants', participants })
    } catch (error) {
        res.status(500).send({ message: 'impossible de recuperer la liste des participants' })
    }
}
module.exports = { addParticipant, getAllParticipant }