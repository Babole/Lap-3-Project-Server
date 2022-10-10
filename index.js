const dotenv = require('dotenv')
dotenv.config()

const { server } = require('./initWS');

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Express now departing from port ${port}!`))
