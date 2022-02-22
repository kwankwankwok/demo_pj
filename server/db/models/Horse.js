const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Horse = new Schema(
    {
        horseId : Number,
        name: String,
        src: String,
        description: String,
    },
    { timestamps: true },
)

module.exports = mongoose.model('horses', Horse)