const { io } = require('../initWS');

function socketEvents(socket) {
    console.log('connected');

    socket.on('disconnect', () => console.log('disconnected'))
}

module.exports = { socketEvents }