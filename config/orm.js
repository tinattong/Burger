var connection = require('./connection.js');


function printQuestionMarks(length){
    var questionMarks = [];

    for(var i = 0; i < length; i++){
        questionMarks.push("?");
    }

    return questionMarks.toString();
}

function objectToSql(ob){
    var array = [];
    for(var key in ob){
        var value = ob[key];
        console.log(value);

        if(Object.hasOwnProperty.call(ob, key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'"; 
            }

            array.push(key + "=" + value);
        }
    }

    return array.toString();
}
var orm = {
    selectAll: function(table, callBack){
        var queryString = "SELECT * FROM ??";
        console.log(queryString);
        connection.query(queryString, [table], function(err, result){
            if(err) throw err;
            callBack(result);
        });
    },
    insertOne: function(table, cols, vals, callBack){
        var queryString = "INSERT INTO " + table;

        queryString = queryString +  " (" + cols.toString() + ") ";
        queryString = queryString + "VALUES (" + printQuestionMarks(vals.length) + ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if(err) throw err;
            callBack(result);
        });
        
    },
    update: function(table, objColVals, condition, callback){
        console.log(table);
        var queryString = "UPDATE " + table;

        queryString = queryString + " SET ";
        queryString = queryString + objectToSql(objColVals);
        queryString = queryString + " WHERE ";
        queryString = queryString + condition;
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }

            callback(result);
        });
    },
    delete: function(table, condition, callBack){
      var queryString = "DELETE FROM " + table;

      queryString = queryString + " WHERE ";
      queryString = queryString + condition;
      console.log(queryString);
      connection.query(queryString, function(err, result){
        if(err){
            throw err;
        }
        callBack(result);
      });
    }
};


module.exports = orm;


