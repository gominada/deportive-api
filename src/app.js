const express = require('express')

const app = express()

app.use(express.json())

app.use('/api', require('./routes/api.routes'))

// 404
app.use((req, res, next) => {
    const err = new Error('Route does not exist')
    err.status = 404
    next(err)
})

// Error handler
app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({error: err.message})
})

module.exports = app