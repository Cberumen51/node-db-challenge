const server = require('./server')

const PORT = process.env.PORT || 2415

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})