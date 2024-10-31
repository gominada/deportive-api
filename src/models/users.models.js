const { Schema, model } = require('mongoose')

const userShema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true, versionKey: false, strict: true
})

exports.User = model('user', userShema)