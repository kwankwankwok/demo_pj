const express = require('express')

const HorseCtrl = require('../controllers/horses')

const router = express.Router()

router.post('/horse', HorseCtrl.createHorse)
router.put('/horse/:id', HorseCtrl.updateHorse)
router.delete('/horse/:id', HorseCtrl.deleteHorse)
router.get('/horse/:id', HorseCtrl.getHorseById)
router.get('/horses', HorseCtrl.getHorses)

module.exports = router