const { login, register } = require('../../controllers/users.controllers')

const router = require('express').Router()

router.get('/profile',)

router.post('/register', register)
router.post('/login', login)


module.exports = router