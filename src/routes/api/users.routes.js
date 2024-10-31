const { login, register } = require('../../controllers/users.controllers')
const { checkToken } = require('../../utils/middleware')

const router = require('express').Router()

router.get('/profile', checkToken, )

router.post('/register', register)
router.post('/login', login)


module.exports = router