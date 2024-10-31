const router = require('express').Router()
const { getById, getAll, createEvent, getAllSortedByDate, getByDate, updateEvent, deleteEvent } = require('../../controllers/events.controllers')
const { checkToken } = require('../../utils/middleware')

router.get('', getAll)
router.get('/date', getByDate)
router.get('/upcoming', getAllSortedByDate)
router.get('/:eventId', getById)

router.post('/', checkToken, createEvent)

router.put('/:eventId', checkToken, updateEvent)

router.delete('/:eventId', checkToken, deleteEvent)

module.exports = router