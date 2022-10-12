class GameState {
    constructor(roomId, host, questions, answers, correctAnswers) {
        this.roomId = roomId;
        this.host = host
        this.users = [
            {
                name: host,
                score: 0,
                hasCompletedRound: false
            }
        ];
        this.questionNumber = 1;
        this.questions = questions;
        this.answers = answers
        this.correctAnswers = correctAnswers
        this.isGameStarted = false;
        this.isGameFinished = false
    }
}

module.exports = {GameState}

