const { io } = require('../initWS');

const { GameState } = require('../models/GameState')

function initialise(socket){
    console.log('user connected');

    socket.on('disconnect', () => console.log('user disconnected'));

    socket.on('create game', ({ roomId, host, questions, answers, correctAnswers }) => {
        console.log(`game created with the code ${roomId}`);
        const state = new GameState(roomId, host, questions, answers, correctAnswers);
        socket.join(roomId);
        io.to(roomId).emit('change state', state); //this sends to everyone in room including sender
    })

    socket.on('join game', ({roomId, username}) => {
        console.log(`${username} joined with the code ${roomId}`);
        socket.join(roomId);
        socket.to(roomId).emit('user joining waiting room', username);
    })

    socket.on('send state to players', (state)=>{
        io.to(state.roomName).emit('change state', state);
    })
    
    socket.on('update player score', ({roomId, user, score}) => {
        socket.to(roomId).emit('update opponents score', {user, score});
        console.log(`updating score of ${user} in room: ${roomId} with a score of ${score}`);
    })

    socket.on('complete quiz', ({roomId, user}) => {
        io.to(roomId).emit('update opponent completion', user)
    })
}

module.exports = { initialise };
