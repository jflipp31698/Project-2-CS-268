 var mysql = require('mysql'); 

const app = express(); 

app.use(express.json()); 

const db = mysql.createConnection({
    user: "root",
    host: "localhost", 
    password: "pass", 
    database: "freshmanConnection"
});

app.listen(3001, () => {
    console.log("running server");
}); 