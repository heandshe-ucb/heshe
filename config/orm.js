var connection = require('./connection.js');

var orm = {
    selectAll: function(table_name, cb){
        // tableName - Users
        var queryString = "SELECT * FROM ??;"

        connection.query(queryString, [table_name], function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;
