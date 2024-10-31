const jwt = require('jsonwebtoken')
const { User } = require('../models/users.models')

exports.checkToken = async (req, res, next) => {

    const token = req.headers['authorization']

    if (!token) {
        return res
            .status(401)
            .json({ message: "The authorization token is necessary" })
    }

    let payload
    try {
        payload = jwt.verify(token, '🔑')
    } catch (err) {
        next(err)
    }

    const user = await User.findById(payload.user_id)

    if (!user) {
        return res
            .status(403)
            .json({ message: "Invalid authorization token" })
    }

    req.user = user
    next()
}