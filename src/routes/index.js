const router = require('express').Router()
const messageRoutes = require('./messages')

router.use('/messages', messageRoutes)

router.get('/', (req, res) => res.send('api route'))

module.exports = router



