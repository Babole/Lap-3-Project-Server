const { io } = require('../initWS');

const { GameState } = require('../models/GameState')

function initialise(socket){
    console.log('user connected');
    // alert('user connected')

    socket.on('disconnect', () => console.log('user disconnected'));

    // socket.on('create game', ({room, category, difficulty, host, questions}) => {
    //     console.log(`game created with the code ${room}`);
    //     const state = new GameState(category, difficulty, host, room, questions);
    //     socket.join(room);
    //     io.to(room).emit('change state', state); //this sends to everyone in room including sender
    // })


    // socket.on('join game', ({room, username}) => {
    //     console.log(`${username} joined with the code ${room}`);
    //     socket.join(room);
    //     socket.to(room).emit('user joining waiting room', username);
    // })

    // socket.on('send state to players', (state)=>{
    //     io.to(state.roomName).emit('change state', state);
    // })
    
    // socket.on('update player score', ({room, user, score}) => {
    //     socket.to(room).emit('update opponents score', {user, score});
    //     console.log(`updating score of ${user} in room: ${room} with a score of ${score}`);
    // })

    // socket.on('complete quiz', ({room, user}) => {
    //     io.to(room).emit('update opponent completion', user)
    // })
}

module.exports = { initialise };
