const { login, register, getProfile } = require('../../controllers/users.controllers')
const { checkToken } = require('../../utils/middleware')

const router = require('express').Router()

router.get('/profile', checkToken, getProfile)

router.post('/register', register)
router.post('/login', login)


module.exports = router