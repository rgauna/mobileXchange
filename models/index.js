'use strict';
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var configPath = __dirname + "/../config/config.json";
var db = {};

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// sequelize.authenticate()
//     .then(() => {
//         console.log('connected to DB');
//     });

// var model = sequelize["import"];
fs //reads directory and filter throw the js files in the model folder.
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
    })
    .forEach(function (file) {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });
// associate the models
Object.keys(db).forEach(function (modelName) {

    if (db[modelName].associate) {
        db[modelName].associate(db);
    }

});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;