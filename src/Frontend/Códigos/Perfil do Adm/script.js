var getDBResDiv = "#nome";
var segundo = "#email";

api = 'http://localhost:1234/';

var queryString = decodeURI(location.search.substring().replace("?",""));
console.log(queryString);


window.onload = function() {
    $(getDBResDiv).append("<h3>"+ queryString +"</h3>");
};