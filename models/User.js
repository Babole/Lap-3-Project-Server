const db = require('../dbConfig/init');

module.exports = class User {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.password = data.password
        this.wins = data.wins
    };

    static get all(){ 
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query(`SELECT * FROM users;`)
                const users = result.rows.map(u => new User(u))
                resolve(users);
            } catch (err) {
                reject("Error retrieving users")
            }
        })
    };

    static create(user){
        return new Promise (async (resolve, reject) => {
            try {
                const wins = 0
                let userData = await db.query(`INSERT INTO users (name,password,wins) VALUES ($1,$2,$3) RETURNING *;`, [ user.name, user.password, wins ]);
                resolve(userData.rows[0]);
            } catch (err) {
                reject('User could not be created');
            };
        });
    };

    static findByUsername(username) {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await db.query(`SELECT * FROM users WHERE name = $1;`, [username]);
                let user = new User(result.rows[0])
                resolve(user)
            } catch (err) {
                reject(`Error retrieving user ${err}`);
            }

        });
    }

    static updateUserWins(username) {
        return new Promise(async (resolve, reject) => {
            try {
                let previousWins = await db.query('SELECT wins FROM users WHERE name = $1;', [ username ])
                console.log(username)
                console.log(previousWins.rows[0].wins)
                let newWins = previousWins.rows[0].wins+1
                console.log(newWins)
                let update = await db.query(`UPDATE users SET wins = $1 WHERE name = $2 RETURNING *;`, [ newWins, username ])
                let user = new User(update.rows[0])
                resolve(user)
            } catch (err) {
                reject(`Error updating user ${err}`)
            }
        })
    }

    static getAllUserWins() {
        return new Promise(async (resolve, reject) => {
            try {
                let getWins = await db.query('SELECT name, wins FROM users;')
                resolve(getWins.rows)
            } catch (error) {
                reject(`Error retrieving wins`)
            }
        })
    }

}
