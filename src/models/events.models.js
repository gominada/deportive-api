const { Schema, model } = require('mongoose')

const eventSchema = new Schema({
    name: String,
    description: String,
    date: Date,
    location: String,
    sportType: String,
    organizer: String
}, {
    timestamps: true, versionKey: false
})

exports.Event = model('event', eventSchema)