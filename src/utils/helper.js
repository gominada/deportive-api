const jwt = require('jsonwebtoken')

exports.createToken = (user) => {
    const payload = {
        user_name: user.name
    }

    return jwt.sign(payload, '🔐')
}