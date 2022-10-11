class GameState {
    constructor(category, difficulty, host, roomId, questions) {
        this.roomId = roomId;
        this.category = category;
        this.difficulty = difficulty;
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
        this.isGameStarted = false;
    }
}

module.exports = {GameState}

