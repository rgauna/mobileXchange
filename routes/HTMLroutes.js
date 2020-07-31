// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/", function (req, res) {
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
        // res.render("login.html");

    });

    app.get("/login", function (req, res) {
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
        // res.render("login")
    });

    app.get("/members", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../views/members"));
        // db.Buy.create("Buy", req, function (res) {
        //     req(res);
        // }).then((dbBuy) => {
        //     res.render("members")
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