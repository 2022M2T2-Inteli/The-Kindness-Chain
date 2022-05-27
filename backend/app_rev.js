
const express = require('express'); 
const app = express();

const hostname = 'localhost';
const port = 1324;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'dbRev.db'; 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static("../frontend/"));

/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
// tabela atendidoinicial
app.get('/users', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
var sql = 'SELECT * FROM atendidoinicial ORDER BY IDcadastro COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro no atendidoinicial (é o C do CRUD - Create)
app.post('/userinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO atendidoinicial (nomePessoa, nasc, educador) VALUES ('" + req.body.nomePessoa + "', '" + req.body.nasc + "', '" + req.body.educador + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Atualiza um registro no atendidoinicial (é o U do CRUD - Update)
app.post('/userupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE atendidoinicial SET educador = '" + req.body.educador + "' WHERE IDcadastro = '" + req.body.IDcadastro+"'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// Exclui um registro no atendidoinicial (é o D do CRUD - Delete)
app.post('/userdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM atendidoinicial WHERE IDcadastro = " + req.body.IDcadastro;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

//tabela atividades
//retorna registros de atividades
app.get('/atvusers', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
var sql = 'SELECT * FROM atividades ORDER BY IDatv COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro em atividades (é o C do CRUD - Create)
app.post('/atvinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO atividades (oficina, banho, lanche) VALUES ('" + req.body.oficina + "','" + req.body.banho + "','" + req.body.lanche + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});
// Atualiza um registro em atividades (é o U do CRUD - Update)
// Atualiza o registro de oficinas
app.post("/userupdateof", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "UPDATE atividades SET oficina  = '" +
    req.body.oficina +
    "' WHERE IDatv = '" +
    req.body.IDatv +
    "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});
//Atualiza o registro de lanche 
app.post("/userupdatelan", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "UPDATE atividades SET lanche  = '" +
    req.body.lanche +
    "' WHERE IDatv = '" +
    req.body.IDatv+"'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});
// Atualiza o registro do banho 
app.post("/userupdateban", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "UPDATE atividades SET banho  = '" +
    req.body.banho +
    "' WHERE IDatv = '" +
    req.body.IDatv+"'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});
//tabela fichas
//retorna registro de fichas
app.get("/usersfichas", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM ficha ORDER BY IDregistro COLLATE NOCASE";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});
//insere dado no registro de fichas
app.post('/datainsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO ficha (CPF, tempoRua, descrição ,toalha, IDregistro) VALUES ('" + req.body.CPF + "', '" + req.body.tempoRua + "', '" + req.body.descrição + "','" + req.body.toalha + "', '" + req.body.IDregistro + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});
// altera descrição na tabela fichas
app.post('/alterdata', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE ficha SET descrição = '" + req.body.descrição + "' WHERE IDregistro = '" + req.body.IDregistro+"'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});
//deleta registro da tabela fichas
app.post('/datadelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
  sql = "DELETE FROM ficha WHERE IDregistro = '" + req.body.IDregistro+"'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});
//tabela assistente
//retorna registro da tabela de assistentes
app.get('/userassistent', (req, res) => {
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
// insere email e senha na tabela de assistentes
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
// altera senha na tabela de assistentes
app.post('/useralter', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE assistente SET senha = '" + req.body.senha + "' WHERE email = '" + req.body.email + "'";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco 
});
// deleta email da tabela assistente
app.post('/delcad', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM assistente WHERE email = '" + req.body.email+"'";
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