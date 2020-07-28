var db = require("../models");
//This route is for getting all items
module.exports = (app) => {
    app.get("/api/buying", (req, res) => {
        db.Buying.findAll({
            include: [db.Buying]
        }).then((dbBuying) => {
            res.json(dbBuying);
        });
    });
    //This route is to retrieve single item
    app.get("/api/buying/:id", (req, res) => {
        db.Buying.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then((dbBuying) => {
            res.json(dbBuying);
        });
    });
    //This route is to save new entry
    app.post("/api/buying", (req, res) => {
        console.log(res, req);
        db.Buying.create({
            phone_name: req.body.phone_name,
            describes: req.body.describes,
            total_price: req.body.total_price
        }).then((dbBuying) => {
            res.json(dbBuying);
        });
    });
    //This route is to delete by id
    app.delete("/api/buying/:id", (req, res) => {
        db.Buying.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbBuying) => {
            res.json(dbBuying);
        });
    });
    //This route is to update
    app.put("/api/buying", (req, res) => {
        db.Buying.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then((dbBuying) => {
            res.json(dbBuying);
        })
    })
};