const bcrypt = require('bcryptjs')
const { User } = require("../models/users.models")
const { createToken } = require('../utils/helper')

exports.register = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (err) {
        next(err)
    }
}


exports.login = async (req, res, next) => {
    const { name, password } = req.body

    try {
        const user = await User.findOne({ name })
        if (!user) {
            return res.status(401).json({ message: 'Incorrect email/password' })
        }

        const samePasswd = await bcrypt.compare(password, user.password)
        if (!samePasswd) {
            return res.status(401).json({ message: 'Incorrect email/password' })
        }

        res.json({
            message: 'Correct login',
            token: createToken(user)
        })

    } catch (err) {
        next(err)
    }
}

exports.getProfile = (req, res, next) => {
    res.json(req.user)
}

