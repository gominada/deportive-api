const { Schema, model } = require('mongoose')

const userShema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true, versionKey: false, strict: true
})

exports.User = model('user', userShema)