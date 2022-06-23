
var pessoas=[];//Vetor para armazenar os produtos
function addPessoa(id,nome,tempoRua,localizacao, outrasInfo){//Metodo para adicionar os produtos no array
  console.log("oi")
  pessoas[pessoas.length] = {id:id,nome:nome,tempoRua:tempoRua,localizacao:localizacao,outrasInfo:outrasInfo};
  console.log(pessoas);
}

//Exemplo adicionando os produtos
const api = "http://localhost:1234"
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
      $('tbody').append("<tr class='produto'><td>"+pessoas[i].id+"</td><td>"+pessoas[i].nome+"</td><td>"+pessoas[i].tempoRua+"</td><td>"+pessoas[i].localizacao+"</td><td>"+pessoas[i].outrasInfo+"</td><td><a href = '../cadastroAtendidos/cadastroAt.html'><button class='cadastrar'><i class='fa-solid fa-plus'></i></button></a></td><td><button class='alterar' onclick='maps.list(" + pessoas[i].id + ",\"" + pessoas[i].nome + "\",\"" + pessoas[i].tempoRua + "\",\"" + pessoas[i].localizacao + "\",\"" + pessoas[i].outrasInfo + "\")'><i class='fa-solid fa-pen-to-square'></i></button></td><td><button class='deletar' onclick='user.delete(" + pessoas[i].id + ")'><i class='fa-solid fa-trash-can'></i></button></td></tr>");    
    }
  }


buscar();//Inicializa mostrando todos os itens existentes







var maps = {
  list(id, oldNome, oldTempoRua, oldLocalizacao, oldOutrasInfos) {
    console.log(id + oldNome + oldTempoRua +  oldLocalizacao + oldOutrasInfos)
      window.open("mapUpdate.html?"+id+"|"+oldNome+"|"+oldTempoRua+"|"+oldLocalizacao+"|"+oldOutrasInfos),
      $.ajax({
          type: 'GET',
          success: data => {
            console.log("Ola")
            console.log(id + oldNome + oldTempoRua +  oldLocalizacao + oldOutrasInfos)
          }
      });
      
  }
  
};

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
            }).always(function (msg) {
            });
        }
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
          }).always(function (msg) {
          });
      }
  },

}
