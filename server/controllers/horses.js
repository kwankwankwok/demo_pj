const Horse = require('../db/models/Horse')

createHorse = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a horse',
        })
    }

    const horse = new Horse(body)

    if (!horse) {
        return res.status(400).json({ success: false, error: err })
    }

    horse
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: horse._id,
                message: 'Horse created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Horse not created!',
            })
        })
}

updateHorse = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Horse.findOne({ _id: req.params.id }, (err, horse) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Horse not found!',
            })
        }
        horse.name = body.name
        horse.time = body.time
        horse.rating = body.rating
        horse
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: horse._id,
                    message: 'Horse updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Horse not updated!',
                })
            })
    })
}

deleteHorse = async (req, res) => {
    await Horse.findOneAndDelete({ _id: req.params.id }, (err, horse) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!horse) {
            return res
                .status(404)
                .json({ success: false, error: `Horse not found` })
        }

        return res.status(200).json({ success: true, data: horse })
    }).catch(err => console.log(err))
}

getHorseById = async (req, res) => {
    await Horse.findOne({ _id: req.params.id }, (err, horse) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!horse) {
            return res
                .status(404)
                .json({ success: false, error: `Horse not found` })
        }
        return res.status(200).json({ success: true, data: horse })
    }).catch(err => console.log(err))
}

getHorses = async (req, res) => {
    await Horse.find({}, (err, horses) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!horses.length) {
            return res
                .status(404)
                .json({ success: false, error: `Horse not found` })
        }
        return res.status(200).json({ success: true, data: horses })
    }).catch(err => console.log(err))
}

module.exports = {
    createHorse,
    updateHorse,
    deleteHorse,
    getHorses,
    getHorseById,
}