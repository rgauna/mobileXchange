const express = require("express");
const router = express.Router();
const phone = require("../models/phone.js");
// This route gets data from the buying table
router.get("/", (req, res) => {
    buying.all((data) => {
        const object = {
            buyers: data
        };
        console.log(object);
        res.render("index", object);
    });
});
// This route gets data from the selling table
router.get("/", (req, res) => {
    selling.all((data) => {
        const object = {
            sellers: data
        };
        console.log(object);
        res.render("index", object);
    });
});
// This route post data to the buying table
router.post("/api/buying", (req, res) => {
    buyer.create([
        "phone_name", "describe", "total_price"
    ], [
        req.body.phone_name, req.body.describe, req.body.total_price
    ], (result) => {
        res.json({
            id: result.insertId
        });
    });
});
//This route puts data into handlebars
router.put("/api/buying/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);
    console.log(req.params.id);
    buyer.update({
        phone_name: req.body.phone_name,
        describe: req.body.describe,
        total_price: req.body.total_price
    }, condition, (result) => {
        if (result.changedRows == 0) {
            console.log("returning 404");
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
//This route deletes data
router.delete("/api/buying/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    buyer.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;