const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Okti'
  })
  
connection.connect((err) => {
    if(err) throw err;
    console.log("Connected to MySQL database");
});

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.render("index", {error: null});
});


app.post("/dashboard", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    let query = `SELECT password FROM Users WHERE username=${connection.escape(username)}`;

    connection.query(query, (err, results) => {
        if(err) {
            res.render("index", {error: "Invalid username or password"});
        };
        
        bcrypt.compare(password, results[0].password, (err, result) => {
            if(err) throw err;

            console.log(result);
        });

        res.render("dashboard");    
    });
});


const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
