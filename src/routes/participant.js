const express = require('express');
const router = express.Router();
const { addParticipant, getAllParticipant } = require('../controller/participant')

router.post('/participant/ajouter', addParticipant)
router.get('/participant/list', getAllParticipant)

module.exports = router;