const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        //required: true
    },
    password: {
        type: String,
        //required: true
    },
    usertype: {
        type: String,
        //required: true
    }
})

const User = mongoose.model('USER', userSchema);

module.exports = User;