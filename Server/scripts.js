const express = require("express"); 
const app = express(); 
const mysql = require('mysql'); 
const cors = require('cors'); 
//onst port = 3001; 
var database = require("./database")


database.connect((err) => {
    if(err) throw
})
app.use(cors()); 

app.use(express.json()); 

app.use(express.urlencoded ({
    extended: true
})); 


//http://localhost:3005/Login - POST
//http://localhsot:3005/chat - Get, POST

app.listen(3001, () => {
    let sql = 'SELECT * FROM users'; 
    console.log("running on port 3001");
}); 


app.get('/Login', (req, res) =>{
    res.send("hello"); 
})

// const db = mysql.createPool({
//     host: 'localhost', 
//     user: 'root', 
//     password: 'pass',
//     database: 'db',
// }); 



// app.get('/', (req, res) => { // req means require and res means response 
//     const sqlInsert = "INSERT into users (username, password) VALUES ('max', 'pass');"
//     db.query(sqlInsert, (err, res) => {
//         res.send("hello ");
//     })
// }); 

