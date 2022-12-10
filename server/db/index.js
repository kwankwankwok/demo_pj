const mongoose = require('mongoose')

const { env } = process;

console.log(env);

const MONGODB_URI = env.MONGODB_URI

mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db