const mongoose = require('mongoose');

const allusersdb = process.env.ALLUSERDATABASE;

mongoose.connect(allusersdb).then(() => {
    console.log("connection with allusersdb successful")
}).catch((err) => console.log("No connection"));