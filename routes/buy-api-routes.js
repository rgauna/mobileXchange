var db = require("../models");

module.exports = (app) => {
    app.get("/api/buying", (req, res) => {
        db.buying.findAll({
            include: [db.Post]
        }).then((dbBuying) => {
            res.json(dbBuying);
        });
    });

    app.get("/api/buying/:id", (req, res) => {
        db.buying.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then((dbBuying) => {
            res.json(dbBuying);
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