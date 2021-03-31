const express = require('express')
const gamesRouter = require('./routes/games');

const app = express();

app.get('/', (req, res) => {
    return res.json({mensage: 'api ok'})
})

app.use('/games', gamesRouter);

app.listen(3000, () => {
    console.log('Api running in port 3000')
})