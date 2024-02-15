var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "example",
    database: "attempt",
});


con.query(`INSERT INTO todo (title, description, status) VALUES (' ', ' ', 'inprogress')`, function (err, result, fields) {
          if (err) throw err;
          console.log(result)
      });