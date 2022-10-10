const { io } = require('../initServer');

function socketEvents(socket) {
    console.log('connected');

    socket.on('disconnect', () => console.log('disconnected'))
}

module.exports = { socketEvents }