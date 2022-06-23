const express = require("express");
const app = express();

const hostname = "localhost";
const port = 1234;
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "dbRev.db";
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("../src/Frontend/Códigos"));

/* Definição dos endpoints */
/****** CRUD ******************************************************************/
// Retorna todos registros (é o R do CRUD - Read)
// tabela mapeamento
app.get("/users", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM mapeamento ORDER BY IDcadastro COLLATE NOCASE";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro no mapeamento (é o C do CRUD - Create)
app.post("/mapinsert", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "INSERT INTO mapeamento (nomePessoa, tempoRua, localização, outrasInfos) VALUES ('" +
    req.body.nomePessoa +
    "', '" +
    req.body.tempoRua +
    "', '" +
    req.body.localização +
    "', '" +
    req.body.outrasInfos +
    "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Atualiza um registro no mapeamento (é o U do CRUD - Update)
app.post("/userupdate", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE mapeamento SET nomePessoa = '" + req.body.nomePessoa + "', tempoRua = '" + req.body.tempoRua + "', outrasInfos = '" + req.body.outrasInfos + "', localização = '" + req.body.localização + "' WHERE IDcadastro = '" + req.body.IDcadastro + "'";

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

// Exclui um registro no mapeamento (é o D do CRUD - Delete)
app.post("/userdelete", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM mapeamento WHERE IDcadastro = " + req.body.IDcadastro;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

//tabela atividades
//retorna registros de atividades
app.get("/atvusers", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM atividades ORDER BY IDatv COLLATE NOCASE";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro em atividades (é o C do CRUD - Create)
app.post("/atvinsert", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "INSERT INTO atividades (oficina, banho, lanche) VALUES ('" +
    req.body.oficina +
    "','" +
    req.body.banho +
    "','" +
    req.body.lanche +
    "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
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
    "UPDATE atividades SET oficina  = '" + req.body.oficina + "' WHERE IDatv = '" + req.body.IDatv + "'";
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
// Atualiza o registro do banho
app.post("/userupdateban", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "UPDATE atividades SET banho  = '" +
    req.body.banho +
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

//tabela cadastro
//retorna registro de cadastro
app.get("/usersassist", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM cadastramento ORDER BY IDregistro COLLATE NOCASE";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//insere dado no registro de cadastro
app.post("/assistinsert", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "INSERT INTO cadastramento (CPF_RG, nomeSocial, serviçosSociais, dataChegada, motivosRua, serviçosSociaisPassados, encaminhamento) VALUES ('" +
    req.body.CPF_RG +
    "', '" +
    req.body.nomeSocial +
    "', '" +
    req.body.serviçosSociais +
    "', '" +
    req.body.dataChegada +
    "', '" +
    req.body.motivosRua +
    "', '" +
    req.body.serviçosSociaisPassados +
    "', '" +
    req.body.encaminhamento +
    "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// altera descrição na tabela cadastro
app.post("/alterassist", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "UPDATE cadastramento SET nomeSocial = '" +
    req.body.nomeSocial +
    "', serviçosSociais = '" +
    req.body.serviçosSociais +
    "', motivosRua = '" +
    req.body.motivosRua +
    "', encaminhamento = '" +
    req.body.encaminhamento +
    "' WHERE IDregistro = '" +
    req.body.IDregistro +
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

//deleta registro da tabela cadastro
app.post("/assistdelete", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "DELETE FROM cadastramento WHERE IDregistro = '" +
    req.body.IDregistro +
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

//tabela assistente
//retorna registro da tabela de assistentes

app.get("/assistente", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM assistente ORDER BY IDassistente";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });

  db.close(); // Fecha o banco
});
// insere email e senha na tabela de assistentes
app.post("/usercad", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  sql =
    "INSERT INTO assistente (email, senha) VALUES ('" +
    req.body.email +
    "', '" +
    req.body.senha +
    "')";
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
  db.close();
  res.end();
});
// altera senha na tabela de assistentes
app.post("/useralter", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "UPDATE assistente SET senha = '" +
    req.body.senha +
    "' WHERE email = '" +
    req.body.email +
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

// deleta email da tabela assistente
app.post("/delcad", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM assistente WHERE email = '" + req.body.email + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

app.post("/userupdate", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "UPDATE assistentes SET (email = '" +
    req.body.email +
    +req.body.email +
    "' WHERE IDassistente = '" +
    req.body.IDassistesnte +
    "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

app.post("/userinsert", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "INSERT INTO assistente (nome, senha, email) VALUES ('" +
    req.body.nome +
    "', '" +
    req.body.senha +
    "', '" +
    req.body.email +
    "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// EDUCADOR

app.get("/usereducador", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM educador ORDER BY IDeducador";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro no educador (é o C do CRUD - Create)
app.post("/educadorinsert", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "INSERT INTO educador (nome, email, senha) VALUES ('" +
    req.body.nome +
    "', '" +
    req.body.email +
    "', '" +
    req.body.senha +
    "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Atualiza um registro no educador (é o U do CRUD - Update)
app.post("/educadorupdate", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "UPDATE educador SET senha = '" +
    req.body.senha +
    "' WHERE IDeducador = '" +
    req.body.IDeducador +
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

// Exclui um registro no educador (é o D do CRUD - Delete)
app.post("/educadordelete", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM educador WHERE IDeducador = " + req.body.IDeducador;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});




app.get("/getficha", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM fichas ORDER BY IDfichas COLLATE NOCASE";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro no atendidoinicial (é o C do CRUD - Create)
app.post("/inficha", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS
  var roupas = "N"
  var alimentos = "N"
  var higiene = "N"
  var atividades = "N"
  var educador = "N"
  if (req.body.roupas == "S"){
    roupas = "S";
  };
  if (req.body.alimentos == "S"){
    alimentos = "S";
  };
  if (req.body.higiene == "S"){
    higiene = "S";
  };
  if (req.body.atividades == "S"){
    atividades = "S";
  };
  if (req.body.educador == "S"){
    educador = "S";
  };
  sql =
    "INSERT INTO fichas (roupas, alimentos, higiene, atividades, educador, datahorário, IDcadastro, IDeducador) VALUES ('" +
    roupas +
    "', '" +
    alimentos +
    "', '" +
    higiene +
    "','" +
    atividades +
    "','" +
    educador +
    "','" +
    req.body.datahorário +
    "','" +
    req.body.IDcadastro +
    "','" +
    req.body.IDeducador +
    "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
  // location.replace("/páginaFichas/lista.html");
});

// Atualiza um registro no atendidoinicial (é o U do CRUD - Update)
app.post("/upfichas", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "UPDATE fichas SET roupas = '" +
    req.body.roupas +
    "', alimentos ='" +
    req.body.alimentos +
    "', higiene = '" +
    req.body.higiene +
    "', atividades = '" +
    req.body.atividades +
    "', educador ='" +
    req.body.educador +
    "', IDcadastro = '" +
    req.body.IDcadastro +
    "', IDeducador ='" +
    req.body.IDeducador +
    "' WHERE IDfichas = '" +
    req.body.IDfichas +
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

//end poits fichas
app.post("/delficha", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM fichas WHERE IDfichas = '" + req.body.IDfichas + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});



 //Get voluntários
 app.get("/getvol", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM voluntarios ORDER BY IDvoluntario COLLATE NOCASE";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});


app.post("/volinsert", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO voluntarios (atividade, nome, contato, disponibilidade) VALUES ('" + req.body.atividade + "', '" + req.body.nome + "', '" + req.body.contato + "', '" + req.body.disponibilidade + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

app.post("/voldelete", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM voluntarios WHERE IDvoluntario = '" + req.body.IDvoluntario + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});




//Post------------------------------------------//
// server.post('/getficha', (req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Access-Control-Allow-Origin', '*');
//   var data1 = req.body.data1
//   console.log(data1)
//   var data2 = req.body.data2
//   console.log(data2)
//   var db = new sqlite3.Database(DBPATH); // Abre o banco
//   var sql = `SELECT SUM(qt_banho) qt_banho, SUM(nr_lanches) nr_lanches, SUM(qt_bazar) qt_bazar, COUNT(id_atendido) id_atendido FROM atendimentos WHERE dt_atendimento BETWEEN "${data1}" AND "${data2}"`;
//   //usado as datas requeridas para consulta no banco de dados
//   db.all(sql, [],  (err, rows ) => {
//       if (err) {
//           throw err;
//       }
//       res.json(rows);
//   });
//   db.close(); // Fecha o banco
// });





// app.listen(process.env.PORT,() => {
//   console.log(`Server running`);
// });
 app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });