
app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM assistente ORDER BY email COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });

    db.close(); // Fecha o banco
    
  });

 ////////////////////////////////////////////////////////////////////////////////////////
  app.post('/datadelete', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    
    sql = "DELETE FROM ficha WHERE IDregistro = " + req.body.IDregistro;
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