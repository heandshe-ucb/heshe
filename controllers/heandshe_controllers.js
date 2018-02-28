var express = require('express');

var heandshe = require('../models/heandshe');

var router = express.Router();

router.get("/", function (req, res) {
    heandshe.all(function (data) {
        var hbsObj = {
            users: data
        }
        console.log(hbsObj);
        res.render('index', hbsObj);
    });
});


module.exports = router;