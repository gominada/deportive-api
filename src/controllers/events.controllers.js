const { Event } = require("../models/events.models")

exports.getAll = async (req, res, next) => {
    const { type } = req.query

    if (type) {
        try {
            const events = await Event.find({ "type": type })
            return res.json(events)
        } catch (err) {
            next(err)
        }
    }

    try {
        const events = await Event.find()
        res.json(events)
    } catch (err) {
        next(err)
    }
}

exports.getById = async (req, res, next) => {
    const { eventId } = req.params
    try {
        const event = await Event.findById(eventId)

        if (!event) {
            return res
                .status(404)
                .json({ message: "The item with the provided ID does not exist" })
        }

        res.json(event)
    } catch (err) {
        next(err)
    }
}

exports.createEvent = async (req, res, next) => {
    try {
        const event = await Event.create(req.body)
        res.status(201).json(event)
    } catch (err) {
        if (err.name === 'ValidationError')
            return res.status(400).json({ message: "Invalid body data" })
        next(err)
    }
}

exports.updateEvent = async (req, res, next) => {
    const { eventId } = req.params
    try {
        const event = await Event.findByIdAndUpdate(eventId, req.body, { new: true })
        res.json(event)

        if (!event) {
            return res
                .status(404)
                .json({ message: "The item with the provided ID does not exist" })
        }

    } catch (err) {
        next(err)
    }
}

exports.deleteEvent = async (req, res, next) => {
    const { eventId } = req.params
    try {
        const event = await Event.findByIdAndDelete(eventId)
        res.json(event)
    } catch (err) {
        next(err)
    }
}

exports.getAllSortedByDate = async (req, res, next) => {
    try {
        const events = await Event.find().sort({ date: 1 })
        res.json(events)
    } catch (err) {
        next(err)
    }
}

exports.getByDate = async (req, res, next) => {
    const { from, to } = req.query

    if (!from || !to) {
        return res.status(400).json({ message: "Invalid parameters" })
    }

    try {
        const events = await Event.find({ date: { $gte: from, $lte: to } })
        res.json(events)
    } catch (err) {
        if (err.name === 'CastError')
            return res.status(400).json({ message: "Invalid parameters format" })
        next(err)
    }
}