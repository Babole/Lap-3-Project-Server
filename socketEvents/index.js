const { io } = require('../initWS');

const { GameState } = require('../models/GameState')

function initialise(socket){
    console.log('user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected')
    });

    socket.on('disconnecting', () => {
        const socketRooms = [...socket.rooms].slice(1, )
        console.log('user disconnecting from ...')
        console.log(socketRooms)
        io.to(socketRooms[socketRooms.length - 1]).emit('user disconnected from room')
    });

    socket.on('create game', ({ roomId, host, questions, answers, correctAnswers, category, difficulty }) => {
        console.log(`game created with the code ${roomId}`);
        const state = new GameState(roomId, host, questions, answers, correctAnswers, category, difficulty);
        socket.join(roomId);
        io.to(roomId).emit('change state', state); //this sends to everyone in room including sender
    })

    socket.on('join game', ({roomId, username}) => {
        console.log(`${username} joined with the code ${roomId}`);
        socket.join(roomId);
        socket.to(roomId).emit('user joining waiting room', username);
    })

    socket.on('send state to players', (state)=>{
        io.to(state.roomId).emit('change state', state);
    })
    
    socket.on('update player score', ({roomId, user, score}) => {
        io.to(roomId).emit('update score', {user, score});
        console.log(`updating score of ${user} in room: ${roomId} with a score of ${score}`);
    })
}

module.exports = { initialise };
