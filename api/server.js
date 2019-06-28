const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const gamesRouter = require('./games/gamesRouter')
const server = express();
server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
// 

server.use('/api/games', gamesRouter)

server.get('/', (req, res) => 
    res.json({message: 'Api working!!'})
    
)

module.exports =  server;
