const orm = require("../config/orm.js");


//Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (table, vals, cb) {
        orm.insertOne("burgers", table, vals, function (res) {
            cb(res);
        });
    },

    updateOne: function (table, vals, condition, cb) {
        orm.updateOne("burgers", table, vals, condition, function (res) {
            cb(res);
        });
    }
}








module.exports = burger;