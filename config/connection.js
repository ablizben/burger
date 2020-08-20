//DEPENDENCIES
const mysql = require("mysql");

//CREATING DATABASE CONNECTION
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Quito18!",
    database: "burger_DB"
  });
  
  connection.connect(function (err) {
    if (err) throw err;
  });

module.exports = connection;