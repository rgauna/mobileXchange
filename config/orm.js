const connection = require("../config/connection.js");
// Helper function for sql syntax
let print = (num) => {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};
// Convert pairs to sql syntax
let objToSql = (ob) => {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "-" + value);
        }
        return arr.toString();
    };
};
// Select sql statement
var orm = {
    all: (tableInput, cb) => {
        console.log("tableInput", tableInput)
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Insert into sql statement
    create: (table, cols, vals, cb) => {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += print(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // Update sql statement
    update: (table, objColVals, condition, cb) => {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // Delete sql statement
    delete: (table, condition, cb) => {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};
// Exports orm
module.exports = orm;