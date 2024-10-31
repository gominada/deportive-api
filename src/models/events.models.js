const { Schema, model } = require('mongoose')

const eventSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    sportType: { type: String, required: true },
    organizer: { type: String, required: true }
}, {
    timestamps: true, versionKey: false, strict: true
})

exports.Event = model('event', eventSchema)