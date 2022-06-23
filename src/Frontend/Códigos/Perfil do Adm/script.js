var getDBResDiv = "#nome";
var segundo = "#email";



var queryString = decodeURI(location.search.substring().replace("?",""));
console.log(queryString);
/*
function TestGETDB(){
    var url =  + "/assistente";
    //var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    //resposta = JSON.parse(xhttp.responseText);

   // $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
    $(getDBResDiv).append(/*"<br /><br />" + queryString[0]);
    $(segundo).append(/*"<br /><br />" + queryString[0]);
    //console.log(xhttp.responseText);
}
*/

window.onload = function() {
    $(getDBResDiv).append("<h3>"+ queryString +"</h3>");
    //$(segundo).append(queryString[0]);
};