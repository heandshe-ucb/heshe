var express = require('express');

var heandshe = require('../models/heandshe');

var router = express.Router();

var currentYelpdata = {};

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

router.post("/api/userinput", function(req, res){
    //put yelp search logic in here
    console.log('in controller post', req.body);
    heandshe.insert("navinjoy@gmail.com", req.body.cityState, req.body.distance, req.body.duration, req.body.date, req.body.time, req.body['experienceTypes[]'].toString(), function(result){
        res.json({id : result.insertId});
    })

});

router.get("/results", function (req, res) {
    heandshe.all(function (data) {
        //add yelp data to handlebars object. in handlebars take yelp data and display it however i want in there
        var hbsObj = {
            users: data
        }
        console.log(hbsObj);
        res.render('results', hbsObj);
    });
});

module.exports = router;