const { Event } = require("../models/events.models")
const { User } = require("../models/users.models")

exports.testing = (req, res, next) => {
    console.log(req.url, "😝")
}
