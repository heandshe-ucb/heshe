var orm = require('../config/orm');

var heandshe = {

    all: function(cb) {
        orm.selectAll("Users", function(res){
            cb(res);
        })
    },

    insert: function(username, citystate, distance, duration, date, time, experienceTypes, cb) {
        console.log('usersearches.insert', username, citystate, distance, duration, date, time, experienceTypes);
        orm.insertOne("usersearches", username, citystate, distance, duration, date, time, experienceTypes, function(res){
            cb(res);
        })
    },
    //we'll want to filter on the most recent entry (via highest ID number) QUery this one
    oneusersearch: function(cb) {
        orm.selectOne("Users", function(res){
            cb(res);
        })
    }
}

module.exports = heandshe;