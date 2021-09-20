const mongoose = require('mongoose');

const paxSchema = new mongoose.Schema({
    name: {
        type: String,
        //required: true or false
    },
    email: {
        type: String,
        //required: true
    },
    phone: {
        type: Number,
        //required: true
    },
    discounttype: {
        type: String,
        //required: true
    },
    expiryofcoupon: {
        type: String,
        //required: true
    },
    nextdateofjourney: {
        type: String,
        //required: true
    },
    uniquekey: {
        type: String,
        //required: true
    }
})

const Passenger = mongoose.model('PASSENGER', paxSchema);

module.exports = Passenger;