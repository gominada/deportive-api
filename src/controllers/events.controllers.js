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
        next(err)
    }
}

exports.updateEvent = async (req, res, next) => {
    const { eventId } = req.params
    try {
        const event = await Event.findByIdAndUpdate(eventId, req.body, { new: true })
        res.json(event)
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
    try {
        const events = await Event.find({ date: { $gte: from, $lte: to } })
        res.json(events)
    } catch (err) {
        next(err)
    }
}