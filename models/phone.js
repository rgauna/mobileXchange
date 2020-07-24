const orm = require("../config/orm.js")
// Selects all data from burgers table
const buyer = {
    all: (cb) => {
        orm.all("buying", (res) => {
            cb(res);
        });
    },
    //Creates arrays using the variables "cols, vals"
    create: (cols, vals, cb) => {
        orm.create("buying", cols, vals, (res) => {
            cb(res);
        });
    },
    //Updates the table burgers
    update: (objColVals, condition, cd) => {
        orm.update("buying", objColVals, condition, (res) => {
            cb(res);
        })
    }
};
module.exports = buyer