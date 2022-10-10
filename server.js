const express = require('express')
const cors = require('cors')
const { io, app, server } = require('./initWS')
const { socketEvents } = require('./socketEvents')

app.use(cors())
app.use(express.json());

const usersRoutes = require('./routes/users')

app.get('/', (req, res) => res.send('Welcome to TRIVIA RANGERS'))

app.use('/users', usersRoutes)

io.on("connection", socket => socketEvents(socket))

module.exports = { server }