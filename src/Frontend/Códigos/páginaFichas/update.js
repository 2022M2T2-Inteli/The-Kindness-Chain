const api = "http://localhost:1324"

var queryString = location.search.substring().replace("?","").split("|");
console.log(queryString);
window.onload = function() {
  upd.list(queryString[0], queryString[1], queryString[2], queryString[3], queryString[4])
};

var upd = {
    list(id,oldNome,oldTempoRua,oldLocalizacao,oldOutrasInfos) {
        console.log(queryString);
        document.querySelector('#info1').innerHTML += '<input id="nomePessoa" type="text" class="login__input" placeholder= "Nome" value='+ oldNome +' name="nome">';
        document.querySelector('#info2').innerHTML += '<input id="tempoRua" type="text" class="login__input" placeholder= "Tempo de Rua" value = '+ oldTempoRua +' name="tempo">';
        document.querySelector('#info3').innerHTML += '<input id="localizacao" type="text" class="login__input" placeholder= "Localização" value = '+oldLocalizacao+' name="local">'; 
        document.querySelector('#info4').innerHTML += '<input id="outrasInfos" type="text" class="login__input" placeholder= "Outras Informações" value = '+ oldOutrasInfos +' name="info">';
        document.querySelector('#inf').innerHTML += '<button onclick="dadosNovos('+ id +')" class="button login__submit "><span class="button__text">Cadastrar</span></button>	';
        $.ajax({
            url: api + '/users',
            type: 'GET',
            success: data => {
              //document.querySelector('#info1').innerHTML += '<input id="nomePessoa" type="text" class="login__input" placeholder= "Nome" value='+ oldNome +' name="nome">';
              //document.querySelector('#info2').innerHTML += '<input id="tempoRua" type="text" class="login__input" placeholder= "Tempo de Rua" value = '+ oldTempoRua +'name="tempo">';
              //document.querySelector('#info3').innerHTML += '<input id="localização" type="text" class="login__input" placeholder= "Localização" value = '+oldLocalizacao+'name="local">'; 
              //document.querySelector('#info4').innerHTML += '<input id="outrasInfos" type="text" class="login__input" placeholder= "Outras Informações" value = '+ oldOutrasInfos +' name="info">';
            }
        });
        
    }
  };

function dadosNovos(id){
  alert("dados corretos");
  var id = Number(id);
  var nome = document.getElementById("nomePessoa").value;
  var tempoRua = Number(document.getElementById("tempoRua").value);
  var local = Number(document.getElementById("localizacao").value);
  var outrasInfos = document.getElementById("outrasInfos").value;
  up.update(id, nome, tempoRua, local, outrasInfos);
}

var up = {
    update(id, nome, tempoRua, local, outrasInfo) {
      alert(id + nome + tempoRua + local, outrasInfo)
      alert("ola");
      if (id && nome && tempoRua && local && outrasInfo) {
              $.ajax({
                  type: 'POST',
                  url: api + '/userupdate',
                  data: {nomePessoa: nome, tempoRua: tempoRua, outrasInfos: outrasInfo, localização: local, IDcadastro: id},
              }).done(function () {
                  window.location.assign("lista.html")
                  users.list();
              }).fail(function (msg) {
                  //console.log('FAIL');
              }).always(function (msg) {
                  //console.log('ALWAYS');
              });
      }
  },
}