var mysql = require('mysql');

if(process.env.JAWSDB_URL){
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    var connection = mysql.createConnection(
        {
            localhost: "3306",
            user: "root",
            password: "Sunny05@@",
            database: "burgers_db"
        }
    );
}

connection.connect(function(err){
    if(err){
        console.error("Error connecting: " + err.stack);
    }
    console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;