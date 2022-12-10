/*
copy from server/index.js
*/

const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const serverless = require('serverless-http');

const db = require('../server/db')
const horseRouter = require('../server/routes/horses')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello Woasd!')
})

app.use('/.netlify/functions/server', horseRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

module.exports = app;
module.exports.handler = serverless(app)