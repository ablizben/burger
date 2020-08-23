const connection = require("../config/connection.js");

function printQuestionMarks(num) {
	const arr = [];
	for (let i = 0; i < num; i++) {
		arr.push('?');
	}
	return arr.toString();
}
function objToSql(ob) {
  const arr = [];
  for (var key in ob) {
    const value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

const orm = {
  selectAll: (tableInput, cb) => {
    const query = "SELECT * FROM " + tableInput + ";";
    connection.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
    },


  create: (table, cols, vals, cb) => {
    const query = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(query, vals, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
  },


  update: (table, objColVals, condition, cb) => {
    const query = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    
    console.log(query);

    connection.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};


module.exports = orm;
