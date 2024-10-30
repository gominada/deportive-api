const { Schema, model } = require('mongoose')

const userShema = new Schema({
    name: String,
    password: String,
}, {
    timestamps: true, versionKey: false
})

exports.User = model('user', userShema)