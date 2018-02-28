var orm = require('../config/orm');

var heandshe = {

    all: function(cb) {
        orm.selectAll("Users", function(res){
            cb(res);
        })
    }
}

module.exports = heandshe;