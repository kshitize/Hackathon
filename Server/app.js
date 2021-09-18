const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;
require('./db/conn');
app.use(express.json()); //acts as a middleware
const User = require('./model/userSchema');
const Passenger = require('./model/paxSchema');
app.use(require('./router/auth')); //acts as a middleware


app.listen(PORT, () => {
    console.log(`listening to port no ${PORT}`);
});