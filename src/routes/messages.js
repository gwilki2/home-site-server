const router = require('express').Router()
const {recieved} = require('../controllers/messages')

router.post('/', recieved)

module.exports = router