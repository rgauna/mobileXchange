var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = (app) => {

    app.get("/api/selling", (req, res) => {
        res.render("sell");
        db.selling.findAll({
            include: [db.Post]
        }).then((dbSelling) => {
            res.json(dbSelling);
        });
    });

    app.get("/api/selling/:id", (req, res) => {
        db.selling.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then((dbSelling) => {
            res.json(dbSelling);
        });
    });
    app.post("/api/buying", (req, res) => {
        db.buying.create(req.body).then((dbBuying) => {
            res.json(dbBuying);
        });
    });
    app.delete("/api/buying/:id", (req, res) => {
        db.buying.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbBuying) => {
            res.json(dbBuying);
        });
    });
};