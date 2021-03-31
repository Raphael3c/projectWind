const express = require('express')
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
dotenv.config();

const conect = require('./models/index');

const gamesRouter = require('./routes/games');

const app = express();

app.use(express.urlencoded({extend: false}))
app.use(express.json())
app.use(cookieParser())
conect();

app.get('/', (req, res) => {
    return res.json({mensage: 'api ok'})
})

app.use('/games', gamesRouter);

app.listen(3000, () => {
    console.log('Api running in port 3000')
})