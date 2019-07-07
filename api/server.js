const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const gamesRouter = require('./games/gamesRouter')
const db = require('./games/gameModel')

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

server.use('/api/games', gamesRouter)

server.get('/', (req, res) => {
    res.status(200).json(req.body);
});

module.exports = server;