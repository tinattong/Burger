var orm = require('../config/orm.js');

var burger = {
    all: function(callback){
        orm.selectAll("burgers", function(result){
            callback(result);
        });
    },
    create: function(columns, values, callback){
        orm.insertOne("burgers", columns, values, function(result){
            callback(result);
        });
    },
    update: function(objColVals, condition, callback){
        orm.update("burgers", objColVals, condition, function(result){
            callback(result);
        });
    },
    delete: function(condition, callback){
        orm.delete("burgers", condition, function(result){
            callback(result);
        });
    }
};

module.exports = burger;