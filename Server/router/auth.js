const express = require('express');
const router = express.Router();

require('../db/conn');
const Passenger = require('../model/paxSchema');
const User = require('../model/userSchema');

router.get('/login', (req, res) => {
    res.send("signin page");
})
router.post('/register', (req, res) => {

    const { name, email, phone, discounttype, expiryofcoupon, nextdateofjourney, uniquekey } = req.body;

    if (!name || !email || !phone || !discounttype || !expiryofcoupon || !nextdateofjourney || !uniquekey) {
        return res.status(400).json({ error: "Fill data properly" });
    }

    const pax = new Passenger({ name, email, phone, discounttype, expiryofcoupon, nextdateofjourney, uniquekey });

    pax.save().then(() => {
        res.status(201).json("pax details saved to db");
    }).catch((err) => res.status(202).json("failed to add pax details"));

    //res.send("register pax page");
    //res.json(req.body);
});


module.exports = router;