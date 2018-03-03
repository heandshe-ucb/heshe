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


router.get("/userinput", function (req, res) {
    heandshe.all(function (data) {
        var hbsObj = {
            users: data
        }
        console.log(hbsObj);
        res.render('userinput', hbsObj);
    });
});

router.get("/results", function (req, res) {
    heandshe.all(function (data) {
        var hbsObj = {
            users: data
        }
        console.log(hbsObj);
        res.render('results', hbsObj);
    });
});

module.exports = router;