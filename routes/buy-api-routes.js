var db = require("../models");
//This route is for getting all items
module.exports = (app) => {
    app.get("/api/Buy", (req, res) => {
        db.Buy.findAll({
            include: [{
                all: true
            }]
        }).then((dbBuy) => {
            res.json(dbBuy);
        });
    });
    //This route is to retrieve single item
    app.get("/api/Buy/:id", (req, res) => {
        db.Buy.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then((dbBuy) => {
            res.json(dbBuy);
        });
    });
    //This route is to save new entry
    app.post("/api/Buy", (req, res) => {
        console.log(res, req);
        db.Buy.create({
            phone_name: req.body.phone_name,
            describes: req.body.describes,
            total_price: req.body.total_price
        }).then((dbBuy) => {
            res.json(dbBuy);
        });
    });
    //This route is to delete by id
    app.delete("/api/Buy/:id", (req, res) => {
        db.Buy.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbBuy) => {
            res.json(dbBuy);
        });
    });
    //This route is to update
    app.put("/api/Buy", (req, res) => {
        db.Buy.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then((dbBuy) => {
            res.json(dbBuy);
        })
    })
};