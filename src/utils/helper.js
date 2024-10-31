const jwt = require('jsonwebtoken')

exports.createToken = (user) => {
    const payload = {
        user_id: user._id,
        user_name: user.username
    }

    return jwt.sign(payload, '🔑')
}