const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "my-release-mariadb",
    user: "root",
    password: "example",
    database: "attempt",
});

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
})

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

// create todo item - insert item to table, must be unique title -- redundant?
app.post('/todos', (req, res) => {
    con.query(`SELECT title FROM todo WHERE title = '${req.body.title}'`, function (err, result, fields) {
        if (err) throw err;
        if (result.length > 0) {
            res.send("A ToDo item already exists with this title, please enter a unique title")
        } else {
            const sql = `INSERT INTO todo (title, description, status) VALUES ("${req.body.title}", "${req.body.description}", "inprogress")`;
            con.query(sql, function (err, result) {
                if (err) throw err;
                // console.log(result)
                res.send(`ToDo successfully created - Title: '${req.body.title}' , Description: '${req.body.description}'`)
            })
        }
    })
})

// adds new blank row with unique ID - inprogress
app.post('/newtodo', (req, res) => {
    con.query(`INSERT INTO todo (title, description, status) VALUES (' ', ' ', 'inprogress')`, function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        res.json(result)
    })
})

//set status to completed
app.put('/todos/:id', (req, res) => {
    con.query(`UPDATE todo SET status = 'completed' WHERE id = ${req.params.id}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        res.json(result)
    });
})

// update button - updates entry by id with req body including title and description
app.post('/todos/:id', (req, res) => {
    con.query(`UPDATE todo SET title = '${req.body.title}', description = '${req.body.description}' WHERE id = ${req.params.id}`, function (err, result, fields) {
        if (err) throw err;
        console.log(req.body.title)
        console.log(result)
        res.json(result)
    });
})

// read all items - get items as an array
app.get('/todos', (req, res) => {
    con.query("SELECT * FROM todo", function (err, result, fields) {
        if (err) throw err;
        // console.log(result)
        res.json(result)
    });
})

// read all completed items - get items as an array
app.get('/comptodos', (req, res) => {
    con.query("SELECT * FROM todo WHERE status = 'completed'", function (err, result, fields) {
        if (err) throw err;
        // console.log(result)
        res.json(result)
    });
})

app.delete('/todos', (req, res) => {
            var sql = `DELETE FROM todo WHERE id = '${req.body.id}'`;
            con.query(sql, function (err, result) {
                if (err) throw err;
                res.send("ToDo item successfully deleted");
            });
        } 
     )

// read single item - get item by id
app.get('/todos/:id', (req, res) => {
    con.query("SELECT * FROM todo WHERE id = " + req.params.id, function (err, result, fields) {
        if (err) throw err;
        // console.log(result)
        res.json(result)
    });
})

app.listen(port, () => {
console.log(`App listening on port ${port}`)
})





