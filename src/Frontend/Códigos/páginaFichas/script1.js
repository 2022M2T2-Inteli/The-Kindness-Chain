
var pessoas=[];//Vetor para armazenar os produtos
function addPessoa(id,nome,tempoRua,localizacao, outrasInfo){//Metodo para adicionar os produtos no array
  console.log("oi")
  pessoas[pessoas.length] = {id:id,nome:nome,tempoRua:tempoRua,localizacao:localizacao,outrasInfo:outrasInfo};
  console.log(pessoas);
}

//Exemplo adicionando os produtos
const api = "http://localhost:1324"
$.ajax({
  url: api + '/users',
  crossDomain: true,
  headers: {'Access-Control-Allow-Origin': '*' },
  type: 'GET',
  success: data => {
    data.forEach(element => {
      addPessoa(element.IDcadastro, element.nomePessoa, element.tempoRua, element.localização, element.outrasInfos);

    });
  }
});


//addProduto(id_produto,'Piso Vinílico Porto Design','0m²','R$ 79,90');
//addProduto('T8002','Piso Laminado Durafloor','40m²','R$ 49,90');
//addProduto('T8003','Piso Laminado Eucafloor','33m²','R$ 37,90');
//addProduto('T8004','Porcelanato Eliane','0m²','R$ 102,90');

$("#input").keypress(function(e){//Adiciona ação de actionkey no input
  if(e.which == 13) {
    buscar();
  }
});

$("#buscar").click(function(){//Adiciona ação ao botão
  buscar();
});

function buscar(){//Função responsavel de buscar os produtos
  $('tbody').html("");
  var p_listados=0;//Inicia contador de produtos encontrados
  $('.pessoas').remove();//Limpa a lista de produtos
  var txtbusca=$("#input").val().toLowerCase();//Captura texto digitado e converte para minusculo
  //Percorre a lista de produtos e imprime ocorrencias verdadeiras
  for(var i=0;i<pessoas.length;i++){
    var nome=pessoas[i].nome.toLowerCase();
    var cod=pessoas[i].id;
    if(nome.match(txtbusca)){//Busca por nome
      listarPessoas(i);
      p_listados++;
    }else if(txtbusca==cod){//Busca por código
      listarPessoas(i);
      p_listados++;
    }
  }
  $('#p_listados').html(p_listados);//Mostra quantidade encontrada
  $('#p_total').html(pessoas.length);//Mostra quantidade total de produtos cadastrados
}
 function listarPessoas(i){//Lista o produto do indece do array produto informado
    if(i!=null){
      //$('tbody').append("<tr class='produto'><td>"+pessoas[i].id+"</td><td>"+pessoas[i].nome+"</td><td>"+pessoas[i].tempoRua+"</td><td>"+pessoas[i].localizacao+"</td><td>"+pessoas[i].outrasInfo+"</td><td><button class='cadastrar'><i class='fa-solid fa-plus'></i></button></td><td><a href='mapUpdate.html' onclick='maps.list(" + pessoas[i].id + "," + pessoas[i].nome + "," + pessoas[i].tempoRua + "," + pessoas[i].localizacao + "," + pessoas[i].outrasInfo + ")'><button class='alterar'><i class='fa-solid fa-pen-to-square'></i></button></td><td><button class='deletar' onclick='user.delete(" + pessoas[i].id + ")'><i class='fa-solid fa-trash-can'></i></button></td></tr>");
      //$('tbody').append("<tr class='produto'><td>"+pessoas[i].id+"</td><td>"+pessoas[i].nome+"</td><td>"+pessoas[i].tempoRua+"</td><td>"+pessoas[i].localizacao+"</td><td>"+pessoas[i].outrasInfo+"</td><td><button class='cadastrar'><i class='fa-solid fa-plus'></i></button></td><td><button class='alterar' onclick='maps.list(" + pessoas[i].id + ",\"" + pessoas[i].nome + ",\"" + pessoas[i].tempoRua + ",\"" + pessoas[i].localizacao + ",\"" + pessoas[i].outrasInfo + ")'><i class='fa-solid fa-pen-to-square'></i></button></td><td><button class='deletar' onclick='user.delete(" + pessoas[i].id + ")'><i class='fa-solid fa-trash-can'></i></button></td></tr>");    
      
      $('tbody').append("<tr class='produto'><td>"+pessoas[i].id+"</td><td>"+pessoas[i].nome+"</td><td>"+pessoas[i].tempoRua+"</td><td>"+pessoas[i].localizacao+"</td><td>"+pessoas[i].outrasInfo+"</td><td><button class='cadastrar'><i class='fa-solid fa-plus'></i></button></td><td><button class='alterar' onclick='maps.list()'><i class='fa-solid fa-pen-to-square'></i></button></td><td><button class='deletar' onclick='user.delete(" + pessoas[i].id + ")'><i class='fa-solid fa-trash-can'></i></button></td></tr>");    

      //$('tbody').append("<tr class='produto'><td>"+pessoas[i].id+"</td><td>"+pessoas[i].nome+"</td><td>"+pessoas[i].tempoRua+"</td><td>"+pessoas[i].localizacao+"</td><td>"+pessoas[i].outrasInfo+"</td><td><button class='cadastrar'><i class='fa-solid fa-plus'></i></button></td><td><a href='../mapUpdate.html'><button class='alterar' onclick='maps.list(" + pessoas[i].id + ")'><i class='fa-solid fa-pen-to-square'></i></button></a></td><td><button class='deletar' onclick='user.delete(" + pessoas[i].id + ")'><i class='fa-solid fa-trash-can'></i></button></td></tr>");
    }
  }


buscar();//Inicializa mostrando todos os itens existentes







var maps = {
  list() {
      $.ajax({
          url: api + '/users',
          type: 'GET',
          success: data => {
            var myWindow =window.open("mapUpdate.html", "_self");

            myWindow.document.write(`<div class="CAD" style="height:600px; margin-top: 20px;"> Atualizar
            <form class="login" style="padding:0px;">
        
                <div class="login__field">
                    <i id = "info1" class="login__icon fas fa-user"></i>
                    <!--<input id="nomePessoa" type="text" class="login__input" placeholder='ola' value="ola" name="nome">-->
                </div>
        
                <div class="login__field">
                  <i  id = "info2" class="login__icon fas fa-user"></i>
                  <!--<input id="tempoRua" type="text" class="login__input" placeholder="Tempo de Rua" name="tempo">-->
                </div>
        
                <div class="login__field">
                    <i id="info3" class="login__icon fas fa-user"></i>
                    <!--<input id="localização" type="text" class="login__input" placeholder="Localização" name="local">-->
                </div>
        
                <div class="login__field">
                    <i id="info4" class="login__icon fas fa-user"></i>
                    <!--<input id="outrasInfos" type="text" class="login__input" placeholder="Outras Informações" name="info">-->
                </div>
        
                <button onclick="map.insert()" class="button login__submit ">
                    <span class="button__text">Cadastrar</span>
                    <i class="button__icon fas fa-chevron-right"></i>
                </button>	
            </form>    
          </div>`);
            //document.querySelector('#info1').innerHTML += '<input id="nomePessoa" type="text" class="login__input" placeholder= '+ oldNome +' value='+ oldNome +' name="nome">';
            //document.querySelector('#info2').innerHTML += '<input id="tempoRua" type="text" class="login__input" placeholder= '+ oldTempoRua +' value = '+ oldLocalizacao +'name="tempo">';
            //document.querySelector('#info3').innerHTML += '<input id="localização" type="text" class="login__input" placeholder= '+oldLocalizacao+' value = '+oldLocalizacao+'name="local">'; 
            //document.querySelector('#info4').innerHTML += '<input id="outrasInfos" type="text" class="login__input" placeholder= '+ oldOutrasInfos +' value = '+ oldOutrasInfos +' name="info">';
          }
      });
      
  }
  
};


/*
var maps = {
  list(userId, oldNome, oldTempoRua, oldLocalizacao, oldOutrasInfos) {
      $.ajax({
          url: api + '/users',
          type: 'GET',
          success: data => {
            window.location.href = "mapUpdate.html";
            document.querySelector('#info1').innerHTML += '<input id="nomePessoa" type="text" class="login__input" placeholder= '+ oldNome +' value='+ oldNome +' name="nome">';
            document.querySelector('#info2').innerHTML += '<input id="tempoRua" type="text" class="login__input" placeholder= '+ oldTempoRua +' value = '+ oldLocalizacao +'name="tempo">';
            document.querySelector('#info3').innerHTML += '<input id="localização" type="text" class="login__input" placeholder= '+oldLocalizacao+' value = '+oldLocalizacao+'name="local">'; 
            document.querySelector('#info4').innerHTML += '<input id="outrasInfos" type="text" class="login__input" placeholder= '+ oldOutrasInfos +' value = '+ oldOutrasInfos +' name="info">';
            console.log(userId);
          }
      });
      
  }
  
};
*/


var user = {


  update(userId, oldNome, oldTempoRua, oldLocalizacao, oldOutrasInfos) {
    var nome = document.getElementById("nomePessoa").value;
    var tempoRua = document.getElementById("tempoRua").value;
    var localizacao = document.getElementById("localização").value;
    var outrasInfo = document.getElementById("outrasInfos").value;
    if (userId && nome && tempoRua && localizacao && outrasInfo) {
        if (nome.trim() != '') {
            $.ajax({
                type: 'POST',
                url: api + '/userupdate',
                data: {nomePessoa: nome, tempoRua: tempoRua, outrasInfos: outrasInfo, localização: localizacao, IDcadastro: userId},
            }).done(function () {
                users.list();
            }).fail(function (msg) {
                //console.log('FAIL');
            }).always(function (msg) {
                //console.log('ALWAYS');
            });
        }
    }
  },
  /*  
  update(IDcadastro, oldNomePessoa, oldTempoRua, oldLocalização, oldOutrasInfos) {

    var nomePessoa = document.getElementById("nomePessoa").value.trim(oldNomePessoa);
    var tempoRua = document.getElementById("tempoRua").value.trim(oldTempoRua);
    var localização = document.getElementById("localização").value.trim(oldLocalização);
    var outrasInfos = document.getElementById("outrasInfos").value.trim(oldOutrasInfos);
    //var nomePessoa = prompt('Digite o novo nome:', oldTitle);
    if (nomePessoa && tempoRua && localização && outrasInfos) {
            $.ajax({
                type: 'POST',
                url: api + '/userupdate',
                data: {nomePessoa: nomePessoa, tempoRua: tempoRua, localização: localização, outrasInfos: outrasInfos, IDcadastro: IDcadastro},
            }).done(function () {
                users.list();
            }).fail(function (msg) {
                //console.log('FAIL');
            }).always(function (msg) {
                //console.log('ALWAYS');
            });
        
    }
  
  },
  */

  delete(userId) {

      if (confirm('Confirma a exclusão?')) {
          $.ajax({
              type: 'POST',
              url: api + '/userdelete',
              data: {IDcadastro: userId},
          }).done(function () {
              users.list();
          }).fail(function (msg) {
              //console.log('FAIL');
          }).always(function (msg) {
              //console.log('ALWAYS');
          });
      }
  },

}

/*
var maps = {
  list(IDvoluntario) {
      $.ajax({
          url: api + '/users',
          type: 'GET',
          success: data => {
            console.log("OLA");

              data.forEach(element => {
                if(IDvoluntario == element.IDvoluntario){
                  console.log("OLA");
                var tx = '';
                  tx += '<div class="CAD" style="height:600px; margin-top: 20px;"> Mapeamento';
                    tx += '<form class="login" style="padding:0px;">';
                      tx += '<div class="login__field">';
                        tx += '<i class="login__icon fas fa-user"></i>';
                        tx += '<input id="nomePessoa" type="text" class="login__input" placeholder="${element.nomeCad}" value="${element.nomeCad}" name="nome">';
                      tx += '</div>';
              
                    tx += '<div class="login__field">';
                      tx += '<i class="login__icon fas fa-user"></i>';
                      tx += '<input id="tempoRua" type="text" class="login__input" placeholder="Tempo de Rua" name="tempo">';
                    tx += '</div>';
              
                    tx += '<div class="login__field">';
                      tx += '<i class="login__icon fas fa-user"></i>';
                      tx += '<input id="localização" type="text" class="login__input" placeholder="Localização" name="local">';
                    tx += '</div>';
              
                    tx += '<div class="login__field">';
                      tx += '<i class="login__icon fas fa-user"></i>';
                      tx += '<input id="outrasInfos" type="text" class="login__input" placeholder="Outras Informações" name="info">';
                    tx += '</div>';
              
                    tx += '<button onclick="map.insert()" class="button login__submit ">';
                      tx += '<span class="button__text">Cadastrar</span>';
                      tx += '<i class="button__icon fas fa-chevron-right"></i>';
                    tx += '</button>';
                    tx += '</form>';
                  tx += '</div>';
                  document.getElementById("atualizar").innerHTML = tx;
                }
              });
          }
      });
      
  }
  
};
*/
//onclick='user.update(" + pessoas[i].id + ",\"" + pessoas[i].nome + ",\"" + pessoas[i].tempoRua + ",\"" + pessoas[i].localizacao + ",\"" + pessoas[i].outrasInfo + ")'