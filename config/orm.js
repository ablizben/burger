var connection = require("./connection.js");

const orm = {
  selectAll: function(tableInput, cb) {
    const query = "SELECT * FROM " + tableInput + ";";
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
    },
  insertOne: function (table, vals, cb) {
    const query = "INSERT INTO ?? SET ?";
        // somevariable = {
    //   burger_name: "cheese",
    // }
    connection.query(query, value, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
  },
  updateOne: function (table, vals, condition, cb) {
    const query = "UPDATE " + table + " SET " + condition + " WHERE id = ?";
    //somevariable this time: {devoured: true}
    //condition "id = 5" if string
    //condition {id: 5} if ?
    connection.query(query, id, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};


module.exports = orm;
