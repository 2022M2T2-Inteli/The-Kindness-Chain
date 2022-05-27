
const express = require('express'); 
const app = express();

const hostname = 'localhost';
const port = 1324;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'dbRev.db'; 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static("../frontend/"));

app.post('/usercad', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    sql = "INSERT INTO assistente (email, senha) VALUES ('" + req.body.email + "', '" + req.body.senha + "')";
    var db = new sqlite3.Database(DBPATH);
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close(); 
    res.end();
  });

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});