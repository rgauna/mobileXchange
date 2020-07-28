// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
    });

    app.get("/login", function (req, res) {
        res.render("login")
        //     // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        // res.sendFile(path.join(__dirname, "../views/login.handlebars"));
    });

    app.get("/members", isAuthenticated, function (req, res) {
        res.render("members")
        // res.sendFile(path.join(__dirname, "../views/members.handlebars"));
    });
    app.get("/sell", function (req, res) {
        res.render("sell")

    });
    app.get("/confirmbuy", function (req, res) {
        res.render("confirmbuy")

    });

};