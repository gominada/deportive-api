const { testing } = require('../../controllers/events.controllers')

const router = require('express').Router()

router.get('/', testing)
router.get('/date', testing)
router.get('/upcoming', testing)
router.get('/:eventId', testing)

router.post('/', testing)

router.put('/:eventId', testing)

router.delete('/:eventId', testing)

module.exports = router