var mysql = require('mysql');

var connection;
console.log("in connection");
if (process.env.JAWSDB_URL) {
    console.log('connecting via heroku DB');
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    console.log(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "",
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