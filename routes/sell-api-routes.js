var db = require("../models");

module.exports = (app) => {

    app.get("/api/Sell", (req, res) => {
        console.log("handling git request for /api/sell");
        db.Sell.findAll({}).then((dbSell) => {
            res.json(dbSell);
        });
    });

    app.get("/api/Sell/:id", (req, res) => {
        db.Sell.findOne({
            where: {
                id: req.params.id
            },
            // include: [db.Post]
        }).then((dbSell) => {
            res.json(dbSell);
        });
    });

    app.post("/api/Sell", (req, res) => {
        console.log("handeling post request for / api Sell");
        console.log(req.body);
        db.Sell.create({
            phone_make: req.body.make,
            models: req.body.model,
            asking_price: req.body.price,
            description: req.body.description,
            email: req.body.email
        }).then((dbSell) => {
            res.json(dbSell);
        });
    });
    app.delete("/api/Sell/:id", (req, res) => {
        db.Sell.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbSell) => {
            res.json(dbSell);
        });
    });
};