const http = require('node:http')
require('dotenv').config()
const app = require('./src/app')

// Connection to database
require('./src/config/db')

const port = (process.argv[2] || process.env.PORT || 3000)

const server = http.createServer(app)

server.listen(port)

server.on('listening', () => {
    console.log(`Server listening on http://localhost:${port}`)
})

server.on('error', err => {
    console.log(err)
})