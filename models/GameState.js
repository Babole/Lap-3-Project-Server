class GameState {
    constructor(host, roomId, questions, answers, correctAnswers) {
        this.roomId = roomId;
        this.host = host
        this.users = [
            {
                name: host,
                score: 0,
                hasCompletedQuiz: false
            }
        ];
        this.questionNumber = 1;
        this.questions = questions;
        this.answers = answers
        this.correctAnswers = correctAnswers
        this.isGameStarted = false;
    }
}

module.exports = {GameState}

