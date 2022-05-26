const express = require('express'); 
const app = express();

const hostname = 'localhost';
const port = 1324;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'dbRev.db'; 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static("../frontend/"));

app.post('/delcad', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
    sql = "DELETE FROM assistente WHERE email = " + req.body.senha;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
  });
  
  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });