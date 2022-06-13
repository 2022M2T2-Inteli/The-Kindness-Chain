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
      $('tbody').append("<tr class='produto'><td>"+pessoas[i].id+"</td><td>"+pessoas[i].nome+"</td><td>"+pessoas[i].tempoRua+"</td><td>"+pessoas[i].localizacao+"</td><td>"+pessoas[i].outrasInfo+"</td><td><button class='cadastrar'><i class='fa-solid fa-plus'></i></button></td><td><a href='../Mapeamento/mapUpdate.html'><button class='alterar' onclick='user.update(" + pessoas[i].id + ",\"" + pessoas[i].nome + ",\"" + pessoas[i].tempoRua + ",\"" + pessoas[i].localizacao + ",\"" + pessoas[i].outrasInfo + ")'><i class='fa-solid fa-pen-to-square'></i></button></a></td><td><button class='deletar' onclick='user.delete(" + pessoas[i].id + ")'><i class='fa-solid fa-trash-can'></i></button></td></tr>");
    }
  }


buscar();//Inicializa mostrando todos os itens existentes


var user = {

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

//onclick='user.update(" + pessoas[i].id + ",\"" + pessoas[i].nome + ",\"" + pessoas[i].tempoRua + ",\"" + pessoas[i].localizacao + ",\"" + pessoas[i].outrasInfo + ")'