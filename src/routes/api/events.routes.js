const router = require('express').Router()
const { getById, getAll, createEvent, getAllSortedByDate, getByDate, updateEvent, deleteEvent } = require('../../controllers/events.controllers')

router.get('', getAll)
router.get('/date', getByDate)
router.get('/upcoming', getAllSortedByDate)
router.get('/:eventId', getById)

router.post('/', createEvent)

router.put('/:eventId', updateEvent)

router.delete('/:eventId', deleteEvent)

module.exports = router