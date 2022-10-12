class GameState {
    constructor(roomId, host, questions, answers, correctAnswers, category, difficulty) {
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
        this.category = category
        this.difficulty = difficulty
    }
}

module.exports = {GameState}

