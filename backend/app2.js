const express = require('express')

// const { rootCertificates } = require('tls')
const app = express()
const port = 3000

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "example",
    database: "attempt",
});

app.use(express.json())
// do i need? what for 

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

 
// // insert item to table
// app.post('/example', (req, res) => {
// // let x = (con.query(`SELECT id FROM trial WHERE title = '${req.body.title}`, function (err, result, fields) {
// //     if (err) throw err;
// // }))

// //     if (req.body.id == x) {
// //         console.log("Title already exists")
// //     } else {
//         var sql = `INSERT INTO trial (title) VALUES ("${req.body.title}")`;
//         con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//         });
//     res.json({ ...req.body })
//     }
// )


// insert item to table
app.post('/example', (req, res) => {
            var sql = `INSERT INTO trial (title, description) VALUES ("${req.body.title}", "${req.body.description}")`;
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });
        // res.json({ ...req.body })
        res.send("Entry created with uniqie id" + req.body)
        }
    )

// get all items as an array
app.get('/example', (req, res) => {
    con.query("SELECT * FROM trial", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        // res.json("Full list of items" + result)
        res.json({"Full list of items": result})
    });
})

// get item by id
app.get('/example/:id', (req, res) => {
    con.query("SELECT * FROM trial WHERE id = " + req.params.id, function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        res.json({"Requested to do item": result})
    });
})

// update item
app.put('/example/:id', (req, res) => {
    var sql = `UPDATE trial SET title = '${req.body.title}', description = '${req.body.description}' WHERE id = '${req.params.id}'`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(`Item with id: '${req.params.id}' updated`);
      res.json(result)
    });
})

    // var sql = "UPDATE trial SET title = 'meat' WHERE id = '3'";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("record updated");
    // });
  

// delete item by title name
app.delete('/example', (req, res) => {
        var sql = `DELETE FROM trial WHERE title = '${req.body.title}'`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(`Record with title '${req.body.title}' deleted`);
        });
      res.send("item deleted")
}
)

// con.connect(function (err) {
//         if (err) throw err;
//         console.log("Connected!");
//         // var sql = `INSERT INTO postit (title) VALUES (${req.body.title})`; 
//         var sql = "INSERT INTO postit (title) VALUES ('tomato')";
//         con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//         });
//     });
 

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });


// app.post('/example', (req, res) => {
//     // console.log(req.body)
//     // if (req == "bacon") {
//     //     res.json({error: "somthing went wrong "})
//     // }
//     //  res.json({error: "somthing went wrong "})
//     con.connect(function (err) {
//         if (err) throw err;
//         var sql = `INSERT INTO postit (title) VALUES (${req.body.title})`; 
//         // var sql = `INSERT INTO postit (title) VALUES (tomato)`;
//         con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//             // res.json({...req.body})
//             res.json({ ...req.body, id: result.insertId })
//         });
//     });
// })

// con.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT * FROM postit WHERE id = '1'", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// returns all to do items 
// app.get('/todo', (req, res) => {
//     con.query("SELECT * FROM cmon", function (err, result, fields) {
//         if (err) throw err;
//         res.send(result)
//     });
// })

// // returns to do item with id
// app.get('/todo/:id', (req, res) => {
//     con.query("SELECT * FROM cmon WHERE id = " + req.params.id, function (err, result, fields) {
//         if (err) throw err;
//         res.send(result)
//     });
// })


//turn into api

// insert single value, all g
// con.connect(function (err) {
//     if (err) throw err;
//     var sql = "INSERT INTO cmon (title) VALUES ('bacon')"
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("record inserted");
//     });
// })


// app.post('/foo', (req, res) => {
//     //  res.sendStatus(200) -- test
//     con.connect(function (err) {
//         if (err) throw err;
//         var sql = "INSERT INTO cmon (title) VALUES (${req}??)"
//         con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("record inserted");
//         });
//     })
// })


app.listen(port, () => {

})
