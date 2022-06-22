var getDBResDiv = "#nome";
var segundo = "#email";

api = 'http://localhost:1234/';

function TestGETDB(){
    var url = api + "/assistente";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);

   // $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
    $(getDBResDiv).append(/*"<br /><br />" + */resposta[0].nome);
    $(segundo).append(/*"<br /><br />" + */resposta[0].email);
    //console.log(xhttp.responseText);
}