require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');




const routes = require('./routes');

const server = express();

const port = process.env.PORT || 3000

server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.use('/api', routes);

server.listen(port, () => {
    console.log(`Server running on: http://localhost:${process.env.PORT}`)
})
