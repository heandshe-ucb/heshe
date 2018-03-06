var mysql = require('mysql');

var connection;
console.log("in connection");
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    console.log(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "Beh3re2009",
        database: "heandshe_db"

    });
}
// console.log(connection);
connection.connect(function (err) {
    // console.log("connection details: ",connection);
    if (err) console.log("Error connecting: " + err.stack);
    // console.log("DB connection successful, ID " + connection.threadId);
})

module.exports = connection;