function valor(){
  alert("deu certo");
}
var upd = {
    list(id,oldNome,oldTempoRua,oldLocalizacao,oldOutrasInfos) {
      alert("deu certo")
        $.ajax({
            //url: api + '/users',
            type: 'GET',
            success: data => {
              alert("deu certo");
              console.log("Deu certo");
              console.log(id);
              console.log(oldNome);
              console.log(oldTempoRua);
              console.log(oldLocalizacao);
              console.log(oldOutrasInfos);
              //document.querySelector('#info1').innerHTML += '<input id="nomePessoa" type="text" class="login__input" placeholder= '+ oldNome +' value='+ oldNome +' name="nome">';
              //document.querySelector('#info2').innerHTML += '<input id="tempoRua" type="text" class="login__input" placeholder= '+ oldTempoRua +' value = '+ oldLocalizacao +'name="tempo">';
              //document.querySelector('#info3').innerHTML += '<input id="localização" type="text" class="login__input" placeholder= '+oldLocalizacao+' value = '+oldLocalizacao+'name="local">'; 
              //document.querySelector('#info4').innerHTML += '<input id="outrasInfos" type="text" class="login__input" placeholder= '+ oldOutrasInfos +' value = '+ oldOutrasInfos +' name="info">';
            }
        });
        
    }
    
  };
  