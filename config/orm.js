var connection = require('./connection.js');

var orm = {
    selectAll: function(table_name, cb){
        // tableName - Users
        var queryString = "SELECT * FROM ??;"

        connection.query(queryString, [table_name], function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    selectOne: function(table_name, cb){
        // tableName - Users
        var queryString = "SELECT experiencetype FROM usersearches where id=(SELECT max(id) FROM usersearches);"
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(table_name, username, citystate, distance, duration, date, time, experienceTypes, cb){
        var queryString = "INSERT INTO ?? (username, searchlocation, traveldistance, hourstospend, userdate, starttime, experiencetype) VALUES (?,?,?,?,?,?,?);"
        connection.query(queryString, [table_name, username, citystate, distance, duration, date, time, experienceTypes], function(err, result){
            console.log(queryString);
            if (err) throw err;
            cb(result);
        })
    }
// // 
// INSERT INTO usersearches (username, searchlocation, traveldistance, hourstospend, userdate, starttime, experiencetype)
// VALUES ("navinjoy@gmail.com", "Fremont, CA", "5", "3", "3/3/2018", "2100", "['Romantic','Outdoor','Nature']");

}

module.exports = orm;
