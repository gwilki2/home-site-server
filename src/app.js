const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

app.get('/', (req, res)=>res.send('api online'))

module.exports = app 

