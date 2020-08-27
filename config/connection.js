var mysql = require('mysql');

var connection;
   
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else { 

    connection = mysql.createConnection({
       host: "localhost",
        user: "root",
        password: "Quito18!",
        database: "burgers_DB",
    });

};

 connection.connect(function(error){
     if (error){
         console.log("mysql connection error");
     }
     else {console.log("connected to the database")
    }
 });
 module.exports = connection;