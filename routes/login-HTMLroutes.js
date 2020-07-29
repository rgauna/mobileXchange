// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
// var db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");

    });

    app.get("/login", function (req, res) {
        res.render("login")


    });

    app.get("/members", function (req, res) {
        //console.log(db.Buy)
        // db.Buy.findAll({
        //     include: [db.Buy]
        // }).then((dbBuy) => {
        res.render("members")
        // }).catch((err) => {
        //     console.log("Error", err);
        // });
    });

    app.get("/sell", function (req, res) {
        res.render("sell")

    });
    app.get("/confirmbuy", function (req, res) {
        res.render("confirmbuy")

    });

};